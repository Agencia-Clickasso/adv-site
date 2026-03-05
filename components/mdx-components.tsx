import { MDXComponents } from "mdx/types"
import { ReactNode } from "react"
import { blogSerif } from "@/lib/blog-design"

const headingClass = blogSerif.className

const components: MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className={`${headingClass} text-4xl leading-tight text-slate-950 mb-6`}>{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className={`${headingClass} mt-12 mb-4 text-3xl leading-tight text-slate-950 sm:text-4xl`}>{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className={`${headingClass} mt-10 mb-3 text-2xl leading-tight text-slate-900 sm:text-3xl`}>{children}</h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className={`${headingClass} mt-8 mb-2 text-xl leading-tight text-slate-900 sm:text-2xl`}>{children}</h4>
  ),
  p: ({ children }: { children: ReactNode }) => <p className="mb-5 text-[1.06rem] leading-8 text-slate-700">{children}</p>,
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="mb-6 ml-5 list-disc space-y-3 text-[1.02rem] leading-8 text-slate-700 marker:text-[#9c744a]">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="mb-6 ml-5 list-decimal space-y-3 text-[1.02rem] leading-8 text-slate-700 marker:text-[#9c744a]">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="my-8 rounded-[1.5rem] border border-[#d8b998] bg-[#f4e8d3] px-6 py-5 italic text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children: ReactNode; className?: string }) => {
    if (!className) {
      return <code className="rounded bg-slate-900 px-1.5 py-1 text-sm text-[#f8f0df]">{children}</code>
    }

    return <code className={`${className} block overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100`}>{children}</code>
  },
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="my-6 overflow-x-auto rounded-2xl bg-slate-950 p-1 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">{children}</pre>
  ),
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a
      href={href}
      className="font-semibold text-[#7d5532] underline decoration-[#c5a37f] decoration-2 underline-offset-4 transition hover:text-slate-950"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: ReactNode }) => <strong className="font-semibold text-slate-950">{children}</strong>,
  em: ({ children }: { children: ReactNode }) => <em className="italic text-slate-700">{children}</em>,
  hr: () => <hr className="my-10 border-t border-[#d7c0a1]" />,
  table: ({ children }: { children: ReactNode }) => (
    <div className="my-8 overflow-x-auto rounded-[1.5rem] border border-[#dcc3a4]">
      <table className="min-w-full border-collapse bg-white">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => <thead className="bg-[#f4e8d3]">{children}</thead>,
  tbody: ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children: ReactNode }) => <tr className="border-b border-[#ead8c0] last:border-b-0">{children}</tr>,
  td: ({ children }: { children: ReactNode }) => <td className="px-4 py-3 text-sm leading-7 text-slate-700">{children}</td>,
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">{children}</th>
  ),
}

export default components
