import {
  UnsplashImageList,
  UnsplashRandomImage
} from "@/lib/interfaces/UnsplashImage"

export async function getRandomImages(): Promise<UnsplashRandomImage[]> {
  const count = 30
  const apiKey = process.env.UNSPLASH_API_KEY || ""

  const res = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`,
    { next: { revalidate: 600 } } // Revalidate in 10 minutes
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const json = await res.json()
  return json as UnsplashRandomImage[]
}

export async function getImages(query: string): Promise<UnsplashImageList> {
  const queryParam = encodeURIComponent(query)
  const apiKey = process.env.UNSPLASH_API_KEY || ""

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${queryParam}client_id=${apiKey}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const json = await res.json()
  return json as UnsplashImageList
}
