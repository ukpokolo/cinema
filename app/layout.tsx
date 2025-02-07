import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import type React from "react" // Import React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}



import './globals.css'