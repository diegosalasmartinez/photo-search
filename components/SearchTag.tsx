"use client"

import React from "react"
import { useTags } from "@/hooks/useTags"
import Typography from "./ui/Typography"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function SearchTag() {
  const { setNewTag } = useTags()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewTag(event)
  }

  return (
    <>
      <Typography text="Search by tag" />
      <form className="flex gap-2 md:gap-4 text-base" onSubmit={handleSubmit}>
        <Input name="tag" type="text" placeholder="flags" required />
        <Button text="Search" />
      </form>
    </>
  )
}
