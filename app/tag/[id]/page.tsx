import TagResults from "@/components/TagResults"
import ImageList from "@/components/image/ImageList"

interface TagPageProps {
  params: {
    id: string | null
  }
  searchParams: {
    tag: string | null
  }
}

export default function TagPage({ params, searchParams }: TagPageProps) {
  const query = searchParams?.tag ?? params?.id

  return (
    <TagResults>
      <ImageList query={query} />
    </TagResults>
  )
}
