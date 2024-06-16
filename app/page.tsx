import TagResults from "@/components/TagResults"
import ImageList from "@/components/image/ImageList"
import Loader from "@/components/ui/Loader"
import { Suspense } from "react"

interface HomeProps {
  searchParams: {
    tag: string | null
  }
}

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams?.tag

  return (
    <TagResults>
      <Suspense fallback={<Loader />}>
        <ImageList query={query} />
      </Suspense>
    </TagResults>
  )
}
