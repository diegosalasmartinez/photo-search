import { getImages, getRandomImages } from "@/server/unsplash"
import ImageCard from "./ImageCard"

interface ImageListProp {
  query: string | null
}

export default async function ImageList({ query }: ImageListProp) {
  const images = query ? await getImages(query) : await getRandomImages()

  return (
    <div className="mt-2 flex flex-col gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}
