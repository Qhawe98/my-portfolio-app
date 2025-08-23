import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Lungani Thabethe - Full Stack Developer",
  description: "Modern portfolio showcasing full-stack development skills and creative projects",
    generator: 'v0.app'
}

const RootLayout =({
  children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
