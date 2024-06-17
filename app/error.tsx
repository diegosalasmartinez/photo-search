"use client"

import ErrorAlert from "@/components/ui/ErrorAlert"
import { useEffect } from "react"

export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorAlert message="Failed to load the images." />
}
