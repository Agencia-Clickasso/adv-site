# Checklist de Validação Pós-Deploy (SEO)

## Objetivo

Validar rapidamente a implementação de SEO técnico e on-page após deploy em produção/staging.

## 1. Canonical e redirects

- [ ] `http://lucimeirexavieradvocacia.adv.br` redireciona `301` para `https://www.lucimeirexavieradvocacia.adv.br`
- [ ] `https://lucimeirexavieradvocacia.adv.br` redireciona `301` para `https://www.lucimeirexavieradvocacia.adv.br`
- [ ] `https://www.lucimeirexavieradvocacia.adv.br` responde `200`
- [ ] Páginas principais exibem canonical no host `https://www...adv.br`

## 2. Sitemap e robots

- [ ] `https://www.lucimeirexavieradvocacia.adv.br/sitemap.xml` abre sem erro
- [ ] Todas as URLs do sitemap usam somente o host canônico
- [ ] `https://www.lucimeirexavieradvocacia.adv.br/robots.txt` abre sem erro
- [ ] `robots.txt` contém `Sitemap: https://www.lucimeirexavieradvocacia.adv.br/sitemap.xml`

## 3. Metadata (inspeção manual)

- [ ] Home (`/`) com title e description focados em Direito Tributário
- [ ] Página tributária (`/areas/direito-tributario`) com metadata própria
- [ ] Página de blog (`/blog`) com metadata e canonical
- [ ] Post de blog (`/blog/<slug>`) com title/description/canonical e Open Graph
- [ ] HTML root com `lang="pt-BR"`

## 4. Dados estruturados (JSON-LD)

- [ ] Home contém schema `LegalService`
- [ ] `/areas/direito-tributario` contém schema `Service`
- [ ] Post de blog contém schema `BlogPosting` (quando aplicável)
- [ ] NAP do schema confere com footer/contato (nome, endereço, telefone, e-mail)

## 5. Search Console (propriedade correta)

- [ ] Confirmar propriedade canônica (`https://www.lucimeirexavieradvocacia.adv.br` ou domínio)
- [ ] Enviar/reenviar sitemap
- [ ] Inspecionar URL da Home e solicitar indexação (se necessário)
- [ ] Inspecionar `/areas/direito-tributario` e solicitar indexação
- [ ] Verificar ausência de erro por sitemap em domínio incorreto

## 6. Observação de infraestrutura

- [ ] Se o ambiente de deploy não respeitar redirects do Next.js na borda, replicar regras na plataforma (Netlify/Vercel/proxy) para garantir `http -> https` e host canônico
