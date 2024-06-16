import { Suspense } from "react"
import { getImages, getRandomImages } from "../../server/unsplash"
import ImageCard from "./ImageCard"

interface ImageListProp {
  query: string | null
}

export default async function ImageList({ query }: ImageListProp) {
  const randomImages = query ? await getImages(query) : await getRandomImages()

  return (
    <>
      {randomImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </>
  )
}
