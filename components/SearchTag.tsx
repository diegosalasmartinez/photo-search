"use client"
import React from "react"

export function SearchTag() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

    console.log("Tag selected", tag.value)

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
