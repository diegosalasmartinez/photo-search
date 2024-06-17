import { useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useAppDispatch } from "@/store/hooks"
import { setQuery } from "@/store/features/tagSlice"

export const useTags = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tag = searchParams.get("tag")
    if (tag) dispatch(setQuery(tag))
  }, [])

  const setNewTag = (event: React.FormEvent<HTMLFormElement>) => {
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

  return { setNewTag }
}
