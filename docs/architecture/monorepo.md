# Arquitectura del Monorepo

<!-- MARK: MONOREPO -->

## Objetivo

Centralizar el desarrollo de MD Studio utilizando un único repositorio Git.

El monorepo permite compartir configuración, dependencias y paquetes sin duplicación de código.

---

# Estructura

```text
md-studio/
│
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

# Directorios

## apps/

Contiene aplicaciones ejecutables.

Actualmente:

```text
chrome-extension
```

En el futuro:

```text
electron-app

vscode-extension

documentation-site
```

---

## packages/

Contiene librerías reutilizables.

Actualmente:

```text
md-engine
```

El motor Markdown será independiente de cualquier aplicación.

---

## docs/

Documentación oficial.

- ADR
- Arquitectura
- Roadmap
- Manuales

---

## tooling/

Configuración compartida.

- ESLint
- Prettier
- TSConfig
- Scripts

---

# Dependencias

```text
Chrome Extension

↓

@md-studio/md-engine

↓

TypeScript
```

Nunca al contrario.

El motor nunca dependerá de la extensión.

---

# Reglas

- Ningún paquete accederá directamente a otro mediante rutas relativas.
- Toda dependencia interna utilizará:

```text
workspace:*
```

- Toda comunicación entre aplicaciones y paquetes será mediante APIs públicas.

---

# Beneficios

- Reutilización del código.
- Configuración centralizada.
- Builds más rápidos.
- Escalabilidad.
- Menor deuda técnica.

<!-- MARK: MONOREPO-END -->