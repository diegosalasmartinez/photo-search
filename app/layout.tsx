import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { StoreProvider } from "./store-provider"
import "./globals.css"
import SearchTag from "@/components/SearchTag"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Photo Search",
  description: "HayStack Assesment by Diego Salas"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <main className="flex min-h-dvh flex-col p-4">
            <Suspense>
              <SearchTag />
            </Suspense>
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  )
}
