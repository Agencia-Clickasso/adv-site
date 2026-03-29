# Rotina Semanal de GSC - Sprint SEO Local

## Objetivo

Monitorar indexação, performance e sinais de consolidação da página comercial tributária sem depender de checagem manual dispersa.

## Janela padrão

- Período: últimos 90 dias
- Propriedade: `sc-domain:lucimeirexavieradvocacia.adv.br`
- Tipo de busca: `web`

## URLs fixas para inspeção

- `https://www.lucimeirexavieradvocacia.adv.br/`
- `https://www.lucimeirexavieradvocacia.adv.br/areas/direito-tributario`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/planejamento-tributario-para-empresas-como-reduzir-riscos`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/defesa-em-execucao-fiscal-estrategias-para-empresas`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/recuperacao-de-creditos-tributarios-quem-pode-recuperar-e-cuidados`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/como-suspender-execucao-fiscal-para-empresa`
- `https://www.lucimeirexavieradvocacia.adv.br/blog/o-que-fazer-ao-receber-cobranca-tributaria-na-empresa`

## Checklist semanal

### 1. Indexação

- Rodar `index_inspect` para a home.
- Rodar `index_inspect` para `/areas/direito-tributario`.
- Rodar `index_inspect` para os 6 posts prioritários.
- Registrar status:
  - `Enviada e indexada`
  - `Detectada, mas não indexada no momento`
  - outro status inesperado

### 2. Sitemap

- Rodar `list_sitemaps`.
- Confirmar:
  - `errors = 0`
  - `warnings = 0`
  - `lastDownloaded` recente
- Se `submitted` crescer e `indexed` não acompanhar, priorizar investigação por URL.

### 3. Performance por página

- Rodar `search_analytics` com dimensão `page`.
- Comparar:
  - cliques
  - impressões
  - CTR
  - posição média
- Prioridade de leitura:
  - home
  - página tributária
  - posts BOFU

### 4. Performance por query

- Rodar `search_analytics` com dimensão `query`.
- Procurar termos ligados a:
  - `advogada tributarista são bernardo do campo`
  - `consultoria tributária são bernardo do campo`
  - `execução fiscal empresa`
  - `cobrança tributária empresa`
  - `planejamento tributário para empresas`

### 5. Decisão

- Se `/areas/direito-tributario` continuar sem indexação por mais de 2 ciclos semanais:
  - revisar links internos
  - revisar snippet e copy da página
  - comparar com a home
- Se a home absorver a maior parte das impressões comerciais:
  - reforçar links e anchors para a página pilar
- Se posts BOFU ganharem impressões mas não cliques:
  - revisar `title`
  - revisar `excerpt`
  - revisar CTA e linkagem para a página pilar

## Critérios de sucesso da sprint

- `/areas/direito-tributario` com status `Enviada e indexada`
- crescimento de impressões da página pilar
- crescimento de cliques da home e da página pilar
- posts BOFU reforçando a página pilar via interlinks e tráfego
