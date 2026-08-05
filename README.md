# Lucimeire Xavier Advocacia — site

Site institucional em **Next.js App Router** com blog MDX, SEO técnico e admin de posts (Turso).

Domínio: [www.lucimeirexavieradvocacia.adv.br](https://www.lucimeirexavieradvocacia.adv.br)

## Shape

```
app/                 rotas públicas + admin
components/          UI (home, áreas, blog, clínicas)
components/clinics/  landing clínicas (content + sections)
content/blog/        posts MDX
lib/                 SEO, blog, auth, Turso, helpers testáveis
scripts/             checks headless
```

Agent rules: see **[AGENTS.md](./AGENTS.md)**.

## Setup

```bash
npm ci --legacy-peer-deps
# or
npm install
```

## Dev

```bash
npm run dev
```

## One-shot validation (CI local)

```bash
npm run ci
```

Runs: lint → prettier check → typecheck → vitest → production build.

Individual:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

Pre-commit (husky): lint-staged + tests.

## Key public routes

| Route                                    | Role                       |
| ---------------------------------------- | -------------------------- |
| `/`                                      | Home                       |
| `/para/clinicas-medicas-e-odontologicas` | Landing clínicas (nicho)   |
| `/areas/direito-tributario`              | Pilar comercial tributário |
| `/blog`                                  | Hub editorial              |
