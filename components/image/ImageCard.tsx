import Image from "next/image"
import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import ImageData from "./ImageData"
import ImageTags from "./ImageTags"

export default function ImageCard({ image }: { image: UnsplashImage }) {
  return (
    <article className="mt-2 mb-4 relative w-fit">
      <Image
        src={image.urls.small}
        alt={image.alt_description}
        width={image.width}
        height={image.height}
        className="w-min rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-black/60 px-2 py-3 w-full flex justify-between items-center">
          <ImageData image={image} />
          <ImageTags tags={image.tags} />
        </div>
      </div>
    </article>
  )
}
