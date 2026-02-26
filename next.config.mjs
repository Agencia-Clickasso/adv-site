import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.lucimeirexavieradvocacia.adv.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lucimeirexavieradvocacia.adv.br",
          },
        ],
        destination: "https://www.lucimeirexavieradvocacia.adv.br/:path*",
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig)
