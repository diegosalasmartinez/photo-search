import TagResults from "@/components/TagResults"
import ImageList from "@/components/image/ImageList"

interface HomeProps {
  searchParams: {
    tag: string | null
  }
}

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams?.tag

  return (
    <TagResults>
      <ImageList query={query} />
    </TagResults>
  )
}
