"use client"

import { selectQuery } from "@/store/features/tagSlice"
import { useAppSelector } from "@/store/hooks"

interface TagResultsProps {
  children: React.ReactNode
}

export default function TagResults({ children }: TagResultsProps) {
  const status = useAppSelector(selectQuery)
  const title = status ? "Results" : "Trending Photos Rigth Now"

  return (
    <section className="mt-4">
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      {children}
    </section>
  )
}
