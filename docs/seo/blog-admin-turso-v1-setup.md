# Blog Admin V1 (Turso + Magic Link) - Setup

## O que foi implementado

- Painel interno em `/admin`
- Login por magic link via e-mail
- CRUD enxuto de artigos (rascunho/publicação)
- Blog híbrido (Turso + arquivos MDX antigos)

## Variáveis de ambiente

Configure no ambiente de deploy:

```bash
TURSO_DATABASE_URL=libsql://SEU-BANCO.turso.io
TURSO_AUTH_TOKEN=seu_token_turso

RESEND_API_KEY=re_xxx
RESEND_FROM_EMAIL=Equipe <no-reply@seudominio.com>

AUTH_SECRET=uma-string-secreta-longa
NEXTAUTH_URL=https://www.lucimeirexavieradvocacia.adv.br

BLOG_ADMIN_ALLOWED_EMAILS=cliente@dominio.com,seuemail@dominio.com
```

## Como funciona a inicialização

As tabelas são criadas automaticamente na primeira ação do painel (`/admin/login`, criar/editar/publicar), via migração leve em runtime.

Tabelas criadas:

- `blog_posts`
- `admin_magic_tokens`
- `admin_sessions`

## Fluxo da cliente

1. Acessar `/admin/login`
2. Informar e-mail autorizado
3. Receber link por e-mail
4. Entrar em `/admin/posts`
5. Criar rascunho
6. Publicar quando estiver pronto

## Observações da V1

- Sem upload de imagem
- Sem editor rico (usa Markdown/MDX em textarea)
- Posts novos no Turso convivem com posts antigos em arquivo
- Se um post do Turso usar o mesmo slug de um arquivo, o Turso prevalece no site público

## Checklist pós-deploy

- [ ] `/admin/login` abre normalmente
- [ ] E-mail magic link é enviado (ou logado no console se Resend não configurado)
- [ ] Login funciona com e-mail autorizado
- [ ] `/admin/posts` lista artigos do Turso
- [ ] Publicar artigo faz o post aparecer em `/blog`
- [ ] `sitemap.xml` passa a incluir o slug publicado
