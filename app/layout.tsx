import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SearchTag from "@/components/SearchTag"
import { StoreProvider } from "./store-provider"
import "./globals.css"
import Header from "@/components/ui/Header"

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
          <Header />
          <main className="flex min-h-dvh flex-col p-4">
            <Suspense fallback={<></>}>
              <SearchTag />
            </Suspense>
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  )
}
