import { UnspashTag } from "@/lib/interfaces/UnsplashImage"
import { formatTags } from "@/utils/tags"
import Link from "next/link"

export default function ImageTags({ tags }: { tags: UnspashTag[] }) {
  const fomrattedTags = formatTags(tags)

  return (
    <div className="flex gap-2">
      {fomrattedTags.map((tag) => (
        <Link
          key={tag.id}
          href={`/tag/${tag.title}`}
          className="text-xs border-[1px] border-white text-white px-2 py-1.5 rounded-md max-w-28 truncate hover:bg-white hover:text-black transition-all duration-200"
        >
          {tag.title}
        </Link>
      ))}
    </div>
  )
}
