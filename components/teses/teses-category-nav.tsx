import { TESE_CATEGORIES } from "@/lib/teses"

export default function TesesCategoryNav() {
  return (
    <nav
      aria-label="Categorias de teses e oportunidades tributárias"
      className="flex flex-wrap gap-3"
    >
      {TESE_CATEGORIES.map((categoria) => (
        <a
          key={categoria.id}
          href={`#${categoria.id}`}
          className="rounded-full border border-custom-text-primary/20 bg-white/5 px-4 py-2 text-sm text-custom-text-primary transition hover:border-custom-text-primary/40 hover:text-custom-text-secondary"
        >
          {categoria.title}
          <span className="ml-2 text-custom-text-primary/50">{categoria.teses.length}</span>
        </a>
      ))}
    </nav>
  )
}
