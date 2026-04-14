# Indexacao de Rotas Publicas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remover sinais de renderizacao dinamica das rotas publicas e fazer o sitemap refletir datas reais de atualizacao.

**Architecture:** As rotas publicas devem ser estaticas/ISR para melhorar cache e rastreabilidade. O sitemap deve deixar de usar uma data artificial unica e passar a usar a data do conteudo quando houver.

**Tech Stack:** Next.js 16, TypeScript, App Router

---

### Task 1: Criar verificacao de SEO tecnico para rotas publicas

**Files:**
- Create: `scripts/verify-public-seo.mjs`
- Test: `scripts/verify-public-seo.mjs`

- [ ] **Step 1: Write the failing test**

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-public-seo.mjs`
Expected: FAIL mentioning `force-dynamic` and `currentDate`

- [ ] **Step 3: Write minimal implementation**

```ts
// Remove `export const dynamic = "force-dynamic"` from the public routes.
// Refactor `app/sitemap.ts` to derive `lastModified` from the post dates.
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/verify-public-seo.mjs`
Expected: PASS with `Public SEO verification passed`

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-public-seo.mjs app/page.tsx app/blog/page.tsx app/blog/[slug]/page.tsx app/sitemap.ts
git commit -m "fix: make public pages crawl-friendly"
```

### Task 2: Validar build e comportamento gerado

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Build the application**

Run: `npm run build`
Expected: build successful

- [ ] **Step 2: Review generated output**

Run: `npm run build`
Expected: public routes generated without introducing new build failures

- [ ] **Step 3: Document deploy follow-up**

```txt
1. Deploy the updated build.
2. Confirm `/blog` and one blog post stop returning `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`.
3. Reenviar `https://www.lucimeirexavieradvocacia.adv.br/sitemap.xml` no Google Search Console.
4. Solicitar indexacao manual das URLs comerciais e dos posts prioritarios.
```
