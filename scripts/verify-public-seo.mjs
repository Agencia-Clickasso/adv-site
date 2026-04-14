import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const publicRoutes = [
  "app/page.tsx",
  "app/blog/page.tsx",
  "app/blog/[slug]/page.tsx",
]

const failures = []

for (const relativePath of publicRoutes) {
  const absolutePath = path.join(root, relativePath)
  const source = fs.readFileSync(absolutePath, "utf8")

  if (source.includes('export const dynamic = "force-dynamic"')) {
    failures.push(`${relativePath} should not force dynamic rendering`)
  }
}

const sitemapSource = fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8")

if (sitemapSource.includes("const currentDate = new Date()")) {
  failures.push("app/sitemap.ts should not stamp every URL with the current date")
}

if (failures.length > 0) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Public SEO verification passed")
