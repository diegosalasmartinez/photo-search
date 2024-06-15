import TagResults from "@/components/TagResults"
import ImageList from "@/components/image/ImageList"
import SearchTag from "@/components/SearchTag"

export default function Home({
  searchParams
}: {
  searchParams: {
    tag: string | null
  }
}) {
  const query = searchParams?.tag

  return (
    <main className="flex min-h-dvh flex-col p-4">
      <SearchTag />
      <TagResults>
        <ImageList query={query} />
      </TagResults>
    </main>
  )
}
