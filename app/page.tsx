import { ImageList } from "../components/ImageList"
import { SearchTag } from "../components/SearchTag"

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col p-4">
      <SearchTag />
      <ImageList />
    </main>
  )
}
