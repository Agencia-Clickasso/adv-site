# Forge Runbook - Checkpoints SEO

## Projeto-alvo

- `/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site`

## Pré-requisitos

- `forge` instalado e disponível no `PATH`
- Engine `codex` disponível no ambiente

## Etapa A - Gerar PRD/SDD (sem executar loop)

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" prd --engine codex
```

### Checkpoint A

- [ ] `.forge/plan.md` gerado
- [ ] `docs/specs/session/spec.md` gerado
- [ ] `docs/specs/session/acceptance.md` gerado
- [ ] `docs/specs/session/scenarios.md` gerado

## Etapa B - P0 (SEO técnico)

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" run --engine codex --thinking summary --fresh
```

Monitoramento:

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" monitor
```

Status:

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" status
```

### Checkpoint B

- [ ] `sitemap.xml` com domínio `.adv.br`
- [ ] `robots.txt` com `Sitemap` correto
- [ ] `lang="pt-BR"`
- [ ] metadata global robusta
- [ ] sem `circuit_state = open`

## Etapa C - P1 (metadata + on-page)

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" run --engine codex --thinking summary
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" analyze --modified-only
```

### Checkpoint C

- [ ] metadata em todas as páginas de `areas/*`
- [ ] copy da home e tributário reforça especialidade
- [ ] sem riscos críticos no `analyze`

## Etapa D - P2 (schema + local)

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" run --engine codex --thinking summary
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" analyze --modified-only
```

### Checkpoint D

- [ ] JSON-LD `LegalService` na home
- [ ] JSON-LD de serviço na página tributária
- [ ] NAP consistente

## Etapa E - P3 (conteúdo)

```bash
forge --cwd "/Users/matheuspuppe/Desktop/Projetos/Lucimeire Xavier Advocacia/adv-example-site" run --engine codex --thinking summary
```

### Checkpoint E

- [ ] backlog editorial com 12 pautas
- [ ] template SEO de artigo
- [ ] mapa de linkagem interna
