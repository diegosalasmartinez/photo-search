import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { setQuery } from "@/store/features/tagSlice"
import { useAppDispatch } from "@/store/hooks"

export const useTags = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const pathname = usePathname()

  useEffect(() => {
    const segments = pathname.split("/")
    const tagValue = segments[1] === "tag" ? segments[2] || null : null

    dispatch(setQuery(tagValue))
  }, [pathname])

  const setNewTag = (event: React.FormEvent<HTMLFormElement>) => {
    const { elements } = event.currentTarget
    const tag = elements.namedItem("tag")
    const isInput = tag instanceof HTMLInputElement
    if (!isInput) return

    router.push(`/tag/${tag.value}`)

    tag.value = ""
  }

  return { setNewTag }
}
