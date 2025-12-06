import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkyRover X',
  description: 'Your personal autonomous balloon assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
