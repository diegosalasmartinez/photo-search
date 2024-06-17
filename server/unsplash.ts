import {
  UnsplashImageList,
  UnsplashImage
} from "@/lib/interfaces/UnsplashImage"

export async function getRandomImages(): Promise<UnsplashImage[]> {
  const count = 30
  const baseUrl = "https://api.unsplash.com"
  const apiKey = process.env.UNSPLASH_API_KEY || ""

  const queryParams = `count=${count}&client_id=${apiKey}`
  const res = await fetch(
    `${baseUrl}/photos/random?${queryParams}`,
    { next: { revalidate: 600 } } // Revalidate in 10 minutes
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const json = await res.json()
  return json as UnsplashImage[]
}

export async function getImages(tag: string): Promise<UnsplashImage[]> {
  const count = 30
  const baseUrl = "https://api.unsplash.com"
  const apiKey = process.env.UNSPLASH_API_KEY || ""
  const query = encodeURIComponent(tag)

  const queryParams = `query=${query}&per_page=${count}&client_id=${apiKey}`

  const res = await fetch(
    `${baseUrl}/search/photos?${queryParams}`,
    { next: { revalidate: 600 } } // Revalidate in 10 minutes
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const json = (await res.json()) as UnsplashImageList
  return json.results
}
