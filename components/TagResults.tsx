"use client"

import { useAppSelector } from "@/store/hooks"
import { selectQuery } from "@/store/features/tagSlice"
import Typography from "./ui/Typography"

interface TagResultsProps {
  children: React.ReactNode
}

export default function TagResults({ children }: TagResultsProps) {
  const query = useAppSelector(selectQuery)
  const title = query ? "Results" : "Trending Photos Rigth Now"

  return (
    <section className="mt-4">
      <Typography text={title} />
      {children}
    </section>
  )
}
