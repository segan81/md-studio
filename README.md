# MD Studio

> Professional Markdown Viewer for Chromium Browsers.

[![Version](https://img.shields.io/badge/version-0.0.1--bootstrap-blue.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#)
[![Chromium](https://img.shields.io/badge/Chromium-Compatible-success.svg)](#)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-orange.svg)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](#)
[![Lit](https://img.shields.io/badge/Lit-3.x-red.svg)](#)

---

## 📖 Descripción

**MD Studio** es una extensión para navegadores basados en **Chromium** diseñada para visualizar documentación escrita en **Markdown** de forma rápida, moderna y profesional.

El proyecto está construido sobre una arquitectura modular basada en un motor Markdown independiente (`@md-studio/md-engine`), permitiendo que la lógica del procesamiento pueda reutilizarse en futuras aplicaciones sin depender de Chromium.

---

## 🎯 Objetivos

- Visualización profesional de archivos Markdown.
- Arquitectura limpia y desacoplada.
- Alto rendimiento.
- Seguridad mediante Manifest V3.
- Código abierto y documentado.
- Plataforma preparada para crecer.

---

## ✨ Características

### MVP

- ✅ Apertura de archivos `.md`
- ✅ Renderizado Markdown
- ✅ Highlight.js
- ✅ Tabla de contenido (TOC)
- ✅ Tema claro
- ✅ Manifest V3

### Futuras versiones

- Mermaid
- KaTeX
- PlantUML
- Graphviz
- Exportación PDF
- Exportación HTML
- Sistema de Plugins
- Temas personalizados
- IA

---

# 🏗 Arquitectura

```
                    MD Studio

                         │
        ┌────────────────┴────────────────┐
        │                                 │
 Chrome Extension                 Documentation
        │
        ▼
 @md-studio/md-engine
        │
        ├──────── Parser
        ├──────── Renderer
        ├──────── Types
        └──────── Utils
```

La prioridad actual del proyecto es la **Extensión Chromium**.

El motor Markdown evolucionará únicamente cuando la extensión requiera nuevas capacidades.

---

# 📁 Estructura

```
md-studio/

├── apps/
│   └── chrome-extension/
│
├── packages/
│   └── md-engine/
│
├── docs/
│
├── tooling/
│
├── .github/
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# 🚀 Tecnologías

- TypeScript
- Lit
- pnpm Workspaces
- Vite
- Manifest V3
- ESLint
- Prettier
- GitHub Actions

---

# 🛠 Desarrollo

## Requisitos

- Node.js LTS
- pnpm
- Git
- Chromium (Chrome, Edge, Brave)

---

## Workflow
```
Issue
   │
   ▼
feature/sprint-XX
   │
   ▼
Commit
   │
   ▼
Push
   │
   ▼
Pull Request
   │
   ▼
Review
   │
   ▼
Merge → develop
   │
   ▼
Delete Feature Branch
```

## Instalación

```bash
git clone git@github.com:<usuario>/md-studio.git

cd md-studio

pnpm install
```

---

## Desarrollo

```bash
pnpm dev
```

---

## Compilación

```bash
pnpm build
```

---

## Lint

```bash
pnpm lint
```

---

## Type Check

```bash
pnpm typecheck
```

---

# 📚 Documentación

## Arquitectura

- docs/architecture/overview.md
- docs/architecture/monorepo.md
- docs/architecture/manifest-v3.md

---

## ADR

- ADR-0001 — Monorepo
- ADR-0002 — Lit
- ADR-0003 — Manifest V3
- ADR-0004 — Markdown Engine

---

## Manuales

- Development Guide
- Coding Standards
- Git Workflow
- Release Management
- Contributing Guide

---

## Roadmap

- Product Vision
- Sprint 00
- Sprint 01
- Product Backlog
- Changelog

---

# 🧭 Roadmap

| Versión | Estado |
|----------|--------|
| 0.0.1-bootstrap | ✅ Bootstrap |
| 0.1.0 | 🚧 MVP |
| 0.2.0 | Planeado |
| 0.5.0 | Planeado |
| 1.0.0 | Objetivo |

---

# 🤝 Contribuir

Las contribuciones son bienvenidas.

Antes de comenzar, consulta:

- Contributing Guide
- Coding Standards
- Development Guide

Todo el desarrollo sigue:

- Conventional Commits
- Semantic Versioning
- GitHub Flow
- Pull Requests

---

# 📄 Licencia

Este proyecto será distribuido bajo la licencia **MIT**.

---

# 🙌 Agradecimientos

Gracias a todos los desarrolladores y proyectos de código abierto que hacen posible este ecosistema.

Especial reconocimiento a las comunidades de:

- TypeScript
- Lit
- Vite
- Chromium
- Markdown
- Highlight.js

---

# ⭐ Estado del Proyecto

Actualmente MD Studio se encuentra en fase de desarrollo activo.

La prioridad es construir un **visor Markdown profesional para Chromium** con una arquitectura moderna, extensible y preparada para evolucionar hacia una plataforma completa de documentación técnica.

---

**MD Studio**
```
"Write once. Read everywhere."
```
