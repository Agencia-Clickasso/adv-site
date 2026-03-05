# Validação de Produção e Indexação

Data da checagem: 2026-03-05
Ambiente validado: `https://www.lucimeirexavieradvocacia.adv.br`

## Status técnico

- `http://lucimeirexavieradvocacia.adv.br` redireciona para `https://www.lucimeirexavieradvocacia.adv.br/`
- `https://lucimeirexavieradvocacia.adv.br` redireciona para `https://www.lucimeirexavieradvocacia.adv.br/`
- Host canônico responde `200`
- `robots.txt` publicado com sitemap canônico
- `sitemap.xml` publicado e usando somente o host `https://www`
- Home com `title`, `description` e `canonical` focados em Direito Tributário
- Página `/areas/direito-tributario` com metadata própria e schema `Service`
- Página `/blog` com metadata e canonical
- Post de blog validado com metadata, canonical, Open Graph e schema `BlogPosting`
- HTML root publicado com `lang="pt-BR"`

## Evidência validada

### Home

- URL: `https://www.lucimeirexavieradvocacia.adv.br`
- `title`: `Advogada Tributarista em São Bernardo do Campo`
- `canonical`: `https://www.lucimeirexavieradvocacia.adv.br`
- JSON-LD: `LegalService`

### Área tributária

- URL: `https://www.lucimeirexavieradvocacia.adv.br/areas/direito-tributario`
- `title`: `Direito Tributário para Empresas e Profissionais | Lucimeire Xavier Advocacia`
- `canonical`: `https://www.lucimeirexavieradvocacia.adv.br/areas/direito-tributario`
- JSON-LD: `Service`

### Blog

- URL: `https://www.lucimeirexavieradvocacia.adv.br/blog`
- `title`: `Blog Jurídico e Tributário | Lucimeire Xavier Advocacia`
- `canonical`: `https://www.lucimeirexavieradvocacia.adv.br/blog`

### Post validado

- URL: `https://www.lucimeirexavieradvocacia.adv.br/blog/consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita`
- `og:type`: `article`
- `canonical`: `https://www.lucimeirexavieradvocacia.adv.br/blog/consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita`
- JSON-LD: `BlogPosting`

## URLs prioritárias para inspeção no Search Console

### Páginas principais

- `https://www.lucimeirexavieradvocacia.adv.br/`
- `https://www.lucimeirexavieradvocacia.adv.br/areas/direito-tributario`
- `https://www.lucimeirexavieradvocacia.adv.br/blog`

### Conteúdos BOFU

- `https://www.lucimeirexavieradvocacia.adv.br/blog/consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/recuperacao-de-creditos-tributarios-quem-pode-recuperar-e-cuidados`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/parcelamento-de-divida-fiscal-para-empresas-quando-vale-a-pena`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/quais-documentos-separar-antes-de-uma-consultoria-tributaria`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/planejamento-tributario-para-empresas-como-reduzir-riscos`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/defesa-em-execucao-fiscal-estrategias-para-empresas`

## Pendência manual

- reenviar o sitemap em `https://www.lucimeirexavieradvocacia.adv.br/sitemap.xml`
- solicitar indexação das URLs prioritárias acima
- confirmar que a propriedade correta no Search Console é a do domínio canônico ou da versão `https://www`
