import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
  published?: boolean
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  let fileNames: string[] = []
  
  try {
    fileNames = fs.readdirSync(postsDirectory)
  } catch (error) {
    // If directory doesn't exist, return empty array
    return []
  }

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)

      // Calculate reading time
      const stats = readingTime(content)

      // Combine the data with the slug
      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        readTime: stats.text,
        category: data.category || '',
        content,
        published: data.published !== false, // Default to true if not specified
      } as BlogPost
    })
    .filter((post) => post.published) // Only return published posts
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return allPostsData
}

export function getPostData(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: stats.text,
      category: data.category || '',
      content,
      published: data.published !== false,
    }
  } catch (error) {
    return null
  }
}

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    return []
  }
}