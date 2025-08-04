import { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

const components: MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-bold text-custom-text-secondary mb-6 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-bold text-custom-text-secondary mb-4 mt-8 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-semibold text-custom-text-secondary mb-3 mt-6 leading-tight">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-xl font-semibold text-custom-text-secondary mb-2 mt-4">
      {children}
    </h4>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-custom-text-primary mb-4 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside text-custom-text-primary mb-4 space-y-2 pl-4">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside text-custom-text-primary mb-4 space-y-2 pl-4">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-custom-text-primary leading-relaxed">
      {children}
    </li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-custom-text-primary pl-6 py-2 my-6 italic text-custom-text-primary bg-custom-bg-secondary/30 rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ children, className }: { children: ReactNode; className?: string }) => {
    // Inline code
    if (!className) {
      return (
        <code className="bg-custom-bg-secondary text-custom-text-secondary px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      )
    }
    
    // Code block
    return (
      <code className={`${className} block bg-custom-bg-secondary text-custom-text-primary p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm leading-relaxed`}>
        {children}
      </code>
    )
  },
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-custom-bg-secondary p-4 rounded-lg my-4 overflow-x-auto">
      {children}
    </pre>
  ),
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a 
      href={href} 
      className="text-custom-text-secondary underline hover:text-custom-text-primary transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-bold text-custom-text-secondary">
      {children}
    </strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic text-custom-text-primary">
      {children}
    </em>
  ),
  hr: () => (
    <hr className="border-custom-text-primary/30 my-8" />
  ),
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-custom-text-primary/30">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-custom-bg-secondary">
      {children}
    </thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody>
      {children}
    </tbody>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="border-b border-custom-text-primary/30">
      {children}
    </tr>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="border border-custom-text-primary/30 px-4 py-2 text-custom-text-primary">
      {children}
    </td>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="border border-custom-text-primary/30 px-4 py-2 text-custom-text-secondary font-semibold text-left">
      {children}
    </th>
  ),
}

export default components