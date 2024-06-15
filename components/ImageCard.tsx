import Image from "next/image"
import { UnsplashRandomImage } from "@/lib/interfaces/UnsplashImage"
import { formatDate } from "@/utils/date"

export function ImageCard({ image }: { image: UnsplashRandomImage }) {
  return (
    <article className="mt-2 relative w-fit">
      <Image
        src={image.urls.small}
        alt={image.alt_description}
        width={image.width}
        height={image.height}
        className="w-min rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-black/60 px-2 py-3 w-full">
          <p className="text-sm text-white mb-1">
            by <span className="font-bold">{image.user.name}</span>
          </p>
          <p className="text-xs text-white">
            Taken {formatDate(image.created_at)}
          </p>
        </div>
      </div>
    </article>
  )
}
