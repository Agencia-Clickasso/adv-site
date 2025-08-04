# Blog MDX - Guia de Uso

Este diretório contém os posts do blog em formato MDX. Aqui está como adicionar novos posts:

## Estrutura de um Post

Cada post deve ser um arquivo `.mdx` com o seguinte formato:

```markdown
---
title: "Título do Post"
excerpt: "Breve descrição do conteúdo do post"
date: "2024-01-15"
category: "Categoria do Post"
published: true
---

# Conteúdo do Post

Seu conteúdo aqui...
```

## Frontmatter Obrigatório

- **title**: Título que aparecerá na listagem e na página do post
- **excerpt**: Descrição breve que aparece na listagem
- **date**: Data de publicação no formato YYYY-MM-DD
- **category**: Categoria do post (ex: "Direito Trabalhista", "Direito Civil")
- **published**: `true` para publicar, `false` para manter como rascunho

## Nome do Arquivo

O nome do arquivo será usado como URL do post:
- `meu-post-exemplo.mdx` → `/blog/meu-post-exemplo`
- Use apenas letras minúsculas, números e hífens
- Evite acentos e caracteres especiais

## Recursos Disponíveis

### Markdown Padrão
- Títulos (# ## ### ####)
- Parágrafos
- Listas (numeradas e com marcadores)
- Links
- Texto em **negrito** e *itálico*
- `código inline`
- Citações

### Blocos de Código
```javascript
// Exemplo de código
const exemplo = "funciona perfeitamente";
```

### Tabelas
| Coluna 1 | Coluna 2 |
|----------|----------|
| Valor 1  | Valor 2  |

### Citações Destacadas
> Esta é uma citação importante que será destacada visualmente.

## Estilização

Todos os elementos são automaticamente estilizados seguindo o tema do site:
- Cores personalizadas (custom-text-primary, custom-text-secondary, etc.)
- Tipografia consistente
- Espaçamento adequado
- Responsividade

## Dicas

1. **Imagens**: Coloque imagens em `public/images/blog/` e referencie como `/images/blog/sua-imagem.jpg`
2. **Links externos**: Abrem automaticamente em nova aba
3. **SEO**: O título e excerpt são usados para meta tags
4. **Data**: Posts são ordenados por data (mais recentes primeiro)

## Exemplo Completo

```markdown
---
title: "Como Resolver Conflitos Trabalhistas"
excerpt: "Estratégias práticas para mediação e resolução de disputas no ambiente de trabalho."
date: "2024-01-20"
category: "Direito Trabalhista"
published: true
---

# Como Resolver Conflitos Trabalhistas

Conflitos no ambiente de trabalho são mais comuns do que imaginamos...

## Principais Causas

1. **Questões salariais**
2. **Ambiente de trabalho**  
3. **Comunicação deficiente**

### Mediação Prévia

A mediação é sempre o primeiro passo recomendado...

> "A prevenção é sempre melhor que o litígio." - Especialista em Direito Trabalhista

## Conclusão

Com as estratégias adequadas, é possível resolver a maioria dos conflitos...
```

Depois de criar seu post, ele aparecerá automaticamente na listagem do blog e terá sua própria página individual.