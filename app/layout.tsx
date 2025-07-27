import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucimeire Xavier Advocacia',
  description: 'Lucimeire Xavier Advocacia',
  generator: 'Lucimeire Xavier Advocacia',
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
