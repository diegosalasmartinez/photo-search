"use client"

import { selectQuery } from "@/store/features/tagSlice"
import { useAppSelector } from "@/store/hooks"
import Typography from "./ui/Typography"

interface TagResultsProps {
  children: React.ReactNode
}

export default function TagResults({ children }: TagResultsProps) {
  const status = useAppSelector(selectQuery)
  const title = status ? "Results" : "Trending Photos Rigth Now"

  return (
    <section className="mt-4">
      <Typography text={title} />
      {children}
    </section>
  )
}
