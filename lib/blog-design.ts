import { Cormorant_Garamond, Manrope } from "next/font/google"

export const blogSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const blogSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}
