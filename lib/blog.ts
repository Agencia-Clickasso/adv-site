import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import { getDbPostBySlug, listPublishedDbPosts } from "@/lib/blog-repo"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author?: string
  content: string
  published?: boolean
  source?: "turso" | "file"
}

const postsDirectory = path.join(process.cwd(), "content/blog")

function getFilePosts(): BlogPost[] {
  let fileNames: string[] = []

  try {
    fileNames = fs.readdirSync(postsDirectory)
  } catch {
    return []
  }

  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        date: data.date || "",
        readTime: stats.text,
        category: data.category || "",
        author: data.author || "",
        content,
        published: data.published !== false,
        source: "file",
      } as BlogPost
    })
    .filter((post) => post.published)
}

async function getTursoPosts(): Promise<BlogPost[]> {
  const dbPosts = await listPublishedDbPosts()

  return dbPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.publishedAt || post.updatedAt || post.createdAt,
    readTime: readingTime(post.contentMdx).text,
    category: post.category,
    author: post.authorName,
    content: post.contentMdx,
    published: post.status === "published",
    source: "turso",
  }))
}

export async function getSortedPostsData(): Promise<BlogPost[]> {
  const filePosts = getFilePosts()
  const tursoPosts = await getTursoPosts()

  const map = new Map<string, BlogPost>()
  for (const post of filePosts) map.set(post.slug, post)
  for (const post of tursoPosts) map.set(post.slug, post)

  return Array.from(map.values()).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  const dbPost = await getDbPostBySlug(slug)
  if (dbPost && dbPost.status === "published") {
    return {
      slug: dbPost.slug,
      title: dbPost.title,
      excerpt: dbPost.excerpt,
      date: dbPost.publishedAt || dbPost.updatedAt || dbPost.createdAt,
      readTime: readingTime(dbPost.contentMdx).text,
      category: dbPost.category,
      author: dbPost.authorName,
      content: dbPost.contentMdx,
      published: true,
      source: "turso",
    }
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: stats.text,
      category: data.category || "",
      author: data.author || "",
      content,
      published: data.published !== false,
      source: "file",
    }
  } catch {
    return null
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileSlugs = (() => {
    try {
      const fileNames = fs.readdirSync(postsDirectory)
      return fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => fileName.replace(/\.mdx$/, ""))
    } catch {
      return [] as string[]
    }
  })()

  const dbPosts = await listPublishedDbPosts()
  const dbSlugs = dbPosts.map((p) => p.slug)

  return Array.from(new Set([...fileSlugs, ...dbSlugs]))
}
