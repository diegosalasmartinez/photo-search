import TagResults from "@/components/TagResults"
import ImageList from "@/components/image/ImageList"

interface TagPageProps {
  params: {
    slug: string | null
  }
}

export default function TagPage({ params }: TagPageProps) {
  const query = params?.slug

  return (
    <TagResults>
      <ImageList query={query} />
    </TagResults>
  )
}
