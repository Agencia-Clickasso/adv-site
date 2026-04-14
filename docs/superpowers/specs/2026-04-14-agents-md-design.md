# AGENTS.md Design

## Objetivo

Criar um `AGENTS.md` na raiz de `adv-example-site` voltado para **agentes de codigo**, com tom **recomendativo** e foco em ajudar mudancas seguras neste projeto sem transformar o arquivo em burocracia.

## Escopo

O arquivo deve orientar agentes sobre:

- objetivo e natureza do projeto;
- stack principal e estrutura relevante do codigo;
- comandos de desenvolvimento e validacao;
- areas sensiveis do repositorio;
- boas praticas recomendadas para mudancas;
- riscos conhecidos e coisas a evitar.

O arquivo nao deve:

- impor gates absolutos;
- duplicar documentacao extensa de framework;
- virar changelog ou tutorial longo;
- prometer automacoes inexistentes.

## Publico

Agentes de codigo trabalhando diretamente no repositorio `adv-example-site`.

## Estrutura proposta

### 1. Project Overview

Resumo curto do projeto:

- site institucional juridico em Next.js App Router;
- blog MDX;
- foco forte em SEO tecnico;
- admin/painel para posts com Turso.

### 2. Stack and Layout

Mapa objetivo do repositorio:

- `app/` para rotas publicas e admin;
- `components/` para UI e composicao;
- `lib/` para SEO, blog, auth/admin e Turso;
- `content/blog/` para artigos MDX;
- `scripts/` para verificacoes auxiliares.

### 3. Recommended Commands

Lista curta de comandos que um agente deve considerar antes de concluir trabalho:

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `node scripts/verify-public-seo.mjs`

### 4. Sensitive Areas

Destacar as partes que exigem cuidado extra:

- rotas publicas e SEO (`app/page.tsx`, `app/blog/*`, `app/sitemap.ts`, `app/robots.ts`, `lib/seo.ts`);
- conteudo e renderizacao MDX;
- admin/auth e persistencia (`app/admin/*`, `lib/admin-*`, `lib/blog-*`, `lib/turso.ts`);
- redirects e canonical.

### 5. Recommended Working Norms

Orientacoes praticas:

- preferir mudancas pequenas e focadas;
- seguir padroes existentes do repo;
- nao reintroduzir `force-dynamic` em rotas publicas sem justificativa forte;
- preservar comportamento de indexacao, sitemap e canonical;
- considerar impacto em SEO ao mexer em conteudo, links internos e headings;
- validar build em mudancas estruturais.

### 6. Avoid

Lista curta de antipadroes:

- alterar admin/Turso sem revisar fluxo completo;
- quebrar URLs publicas sem redirects;
- tratar warnings de audit/build/lint como irrelevantes sem evidencias;
- adicionar instrucoes genericas que nao reflitam o repo real.

## Nivel de detalhe

Curto e operacional. O arquivo deve caber em leitura rapida e servir como contexto inicial para agentes.

## Validacao

Depois de criado, o `AGENTS.md` deve ser revisado por:

- aderencia ao estado real do projeto;
- tom recomendativo, nao mandatorio;
- ausencia de placeholders;
- comandos e caminhos validos.
