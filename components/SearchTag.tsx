"use client"
import { setQuery } from "@/store/features/tagSlice"
import { useAppDispatch } from "@/store/hooks"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

export default function SearchTag() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tag = searchParams.get("tag")
    if (tag) dispatch(setQuery(tag))
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

    const params = new URLSearchParams(searchParams)
    params.set("tag", tag.value)
    replace(`${pathname}?${params.toString()}`)
    dispatch(setQuery(tag.value))

    tag.value = ""
  }

  return (
    <>
      <h2 className="font-bold text-lg mb-1">Search by tag</h2>
      <form className="text-base" onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none rounded-md w-[300px] border-[1px] bg-white text-gray-500 border-gray-300 p-2 text-sm leading-tight focus:outline-none focus:shadow-outline"
          name="tag"
          type="text"
          placeholder="flags"
          required
        />
        <button className="ml-4 rounded-md bg-sky-600 p-2 text-white text-sm hover:bg-sky-800 transition-all duration-200">
          Search
        </button>
      </form>
    </>
  )
}
