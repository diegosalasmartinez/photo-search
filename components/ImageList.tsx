import { getRandomImages } from "../server/unsplash"
import { ImageCard } from "./ImageCard"

export async function ImageList() {
  const randomImages = await getRandomImages()

  return (
    <section className="mt-4">
      <h2 className="font-bold text-lg mb-1">Trending Photos Rigth Now</h2>
      {randomImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </section>
  )
}
