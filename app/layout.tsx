import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "SkyRover X - Otonom Hava Zekası",
  description:
    "Gelişmiş yapay zeka yeteneklerine sahip yeni nesil otonom balon drone. SkyRover X ile hava teknolojisinin geleceğini deneyimleyin.",
  generator: "v0.app",
  keywords: ["drone", "otonom", "balon drone", "hava teknolojisi", "SkyRover", "yapay zeka"],
  authors: [{ name: "SkyRover Technologies" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#6496ff",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
