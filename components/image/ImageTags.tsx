"use client"

import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/store/hooks"
import { formatTags } from "@/utils/tags"
import { UnspashTag } from "@/lib/interfaces/UnsplashImage"
import { setQuery } from "@/store/features/tagSlice"

export default function ImageTags({ tags }: { tags: UnspashTag[] }) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const formattedTags = formatTags(tags)

  const handleTagSelected = (tag: string) => {
    dispatch(setQuery(tag))
    router.push(`/tag/${tag}`)
  }

  return (
    <div className="flex gap-2">
      {formattedTags.map((tag) => (
        <button
          key={tag.id}
          className="text-xs border-[1px] border-white text-white px-2 py-1.5 rounded-md max-w-24 truncate hover:bg-white hover:text-black transition-all duration-200"
          onClick={() => handleTagSelected(tag.title)}
        >
          {tag.title}
        </button>
      ))}
    </div>
  )
}
