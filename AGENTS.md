# AGENTS.md — Lucimeire Xavier Advocacia (site)

Dense rules for coding agents. Prefer short, safe diffs.

## Project

- Institutional law-firm site (Next.js App Router) + MDX blog + Turso admin.
- Commercial focus: direito tributário, niche landing for clínicas de saúde.
- SEO is a first-class feature (metadata, sitemap, schema, internal links).
- Domain: `https://www.lucimeirexavieradvocacia.adv.br`

## Stack / layout

| Path                       | Role                                         |
| -------------------------- | -------------------------------------------- |
| `app/`                     | Routes (public + admin)                      |
| `components/`              | UI composition (keep files under ~300 lines) |
| `components/clinics/`      | Landing de clínicas (content + sections)     |
| `lib/`                     | SEO, blog, admin auth, Turso, pure helpers   |
| `content/blog/`            | MDX posts (frontmatter + body)               |
| `scripts/`                 | Headless checks (`verify-public-seo.mjs`)    |
| `.github/workflows/ci.yml` | lint · prettier · typecheck · test · build   |

## One-shot validation

```bash
npm ci --legacy-peer-deps   # or npm install
npm run ci                  # lint + format:check + typecheck + test + build
```

Partial:

```bash
npm run dev
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
node scripts/verify-public-seo.mjs
```

Pre-commit (husky): `lint-staged` (eslint + prettier) then `npm test`.

## Clean code for agents (must follow)

- Files: target 200–300 lines; hard stop ~500. Split by responsibility.
- Functions: 4–20 lines; one job; early returns; max 2 indent levels.
- Names: greppable domain nouns (`canonicalUrl`, `buildFaqSchema`). Avoid `data` / `utils` dumps.
- Types: explicit on public surfaces; no `any`.
- DRY: extract shared copy/constants to `lib/` or `components/*/content.ts`.
- Comments: WHY / provenance only — keep intent comments on refactor.
- Tests: every new pure helper in `lib/` gets a Vitest file `*.test.ts`.
- Formatting: Prettier only — do not bikeshed style.

## Sensitive areas

- **SEO / public indexation:** `app/page.tsx`, `app/blog/*`, `app/sitemap.ts`, `app/robots.ts`, `lib/seo.ts`, `lib/seo-schema.ts` — do not reintroduce `force-dynamic` on public routes without strong reason.
- **Canonical / redirects:** preserve host `www` and path stability; add redirects if URLs change.
- **Clínicas landing:** `app/para/clinicas-medicas-e-odontologicas`, `components/clinics/*` — OAB-safe copy (no guaranteed recovery amounts).
- **Admin / Turso:** `app/admin/*`, `lib/admin-*`, `lib/blog-repo.ts`, `lib/turso.ts` — touch only with full login → magic → posts flow in mind.
- **Tracking CTAs:** use `TrackedLink` + existing `ctaLocation` patterns.

## Working norms

- Prefer small focused PRs; mirror existing patterns (AreaPage, home-paper, blogSerif).
- New commercial page → metadata via `createPageMetadata`, JSON-LD, sitemap entry, header/footer link if public.
- New blog post → MDX in `content/blog/`, add to `PRIORITY_POST_SLUGS` only if intentional, interlink cluster.
- After structural edits: run `npm run ci` before claiming done.

## Avoid

- Breaking public URLs without redirects.
- Promising tax recovery amounts or aggressive advertising copy.
- Growing god files (`clinics-landing.tsx`, mega UI dumps) — split first.
- Silent deletion of WHY comments.
- Shipping features without a headless test when logic is pure/branchy.
- Treating lint/type/test failures as noise.

## Defensive categories (this project)

- Timeouts: form submit / Formspree — keep UX error states; no infinite spinner.
- Graceful degradation: blog MDX file + Turso merge; missing Turso must not break public file posts.
- No invent retries/circuit breakers unless a task names them.
