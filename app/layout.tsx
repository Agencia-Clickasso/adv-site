import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucimeire XavierAdvocacia',
  description: 'Lucimeire Advocacia',
  generator: 'Lucimeire Advocacia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
