# ADR-0001: Arquitectura Monorepo para MD Studio

- **Estado:** Aprobado
- **Fecha:** 2026-08-07
- **Decisores:** Equipo MD Studio
- **Versión:** 1.0

---

# Contexto

MD Studio nace como una extensión para navegadores basados en Chromium cuyo objetivo es ofrecer una experiencia profesional para visualizar documentación escrita en Markdown.

Sin embargo, desde la fase de planificación se identificó que el motor de procesamiento Markdown puede reutilizarse en otros entornos distintos a una extensión de navegador.

Algunos escenarios previstos son:

- Aplicación Electron
- Extensión para Visual Studio Code
- Aplicación Web
- Biblioteca distribuida mediante npm
- Aplicaciones móviles mediante WebView

Por esta razón, la lógica de negocio no debe depender de la implementación específica de Chromium.

---

# Problema

Si toda la lógica se desarrolla directamente dentro de la extensión del navegador, el proyecto quedará fuertemente acoplado a Chromium.

Esto dificultará:

- reutilización del código
- pruebas unitarias
- mantenimiento
- evolución del proyecto
- incorporación de nuevos clientes

---

# Decisión

Se adopta una arquitectura **Monorepo** utilizando **pnpm Workspaces**.

La solución separa claramente el motor de procesamiento Markdown de las aplicaciones que lo consumen.

La estructura será la siguiente:

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
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# Responsabilidades

## apps/

Contiene aplicaciones ejecutables.

Cada aplicación puede consumir uno o varios paquetes del directorio packages.

Inicialmente contendrá:

```text
apps/
    chrome-extension/
```

En el futuro podrá incluir:

```text
electron-app/
vscode-extension/
documentation-site/
```

---

## packages/

Contiene librerías reutilizables.

Inicialmente:

```text
packages/
    md-engine/
```

El objetivo es que este paquete no dependa de Chromium.

---

# Arquitectura

```text
                     MD Studio

                        │
        ┌───────────────┴───────────────┐
        │                               │
 Chrome Extension                 Futuras aplicaciones
        │                               │
        └───────────────┬───────────────┘
                        │
                  @md-studio/md-engine
                        │
        ┌───────────────┼───────────────┐
        │               │               │
      Parser        Renderer       Plugin Manager
        │               │               │
        ├───────────────┼───────────────┤
        │               │               │
     Markdown       Mermaid        Highlight.js
        │
     KaTeX
```

---

# Tecnologías seleccionadas

| Tecnología | Justificación |
|------------|---------------|
| pnpm Workspaces | Administración eficiente del monorepo |
| TypeScript | Tipado estático y mantenibilidad |
| Lit | Componentes Web para la interfaz |
| Vite | Desarrollo rápido y compilación eficiente |
| Manifest V3 | Compatibilidad con Chromium moderno |
| GitHub | Repositorio y automatización CI/CD |

---

# Beneficios

La arquitectura propuesta permite:

- separar responsabilidades
- reutilizar código
- facilitar pruebas unitarias
- reducir el acoplamiento
- mejorar la mantenibilidad
- publicar librerías independientes
- escalar el proyecto sin reorganizar el repositorio

---

# Consecuencias

## Positivas

- Alta reutilización del código.
- Separación clara entre lógica y presentación.
- Mayor facilidad para incorporar nuevos clientes.
- Mejor organización del proyecto.
- Escalabilidad.

## Negativas

- Configuración inicial más compleja.
- Curva de aprendizaje de pnpm Workspaces.
- Mayor cantidad de paquetes que administrar.

No obstante, se considera que los beneficios superan ampliamente los costos iniciales.

---

# Alternativas consideradas

## Proyecto único

```
chrome-extension/
```

**Descartado**

Genera fuerte acoplamiento entre la lógica del negocio y Chromium.

---

## Repositorios independientes

```
md-engine
chrome-extension
```

**Descartado**

Duplicación de configuración.

Mayor complejidad para sincronizar versiones.

Mayor costo de mantenimiento.

---

# Decisión final

Se adopta una arquitectura Monorepo basada en pnpm Workspaces donde:

- `packages/md-engine` contendrá toda la lógica del motor Markdown.
- `apps/chrome-extension` será únicamente un cliente del motor.
- Las futuras aplicaciones reutilizarán el mismo paquete sin duplicar código.

Esta decisión establece la base arquitectónica del proyecto MD Studio y servirá como referencia para las decisiones técnicas posteriores.

---

# ADR relacionados

- ADR-0002: Selección de Lit como framework UI.
- ADR-0003: Arquitectura basada en plugins.
- ADR-0004: Estrategia de renderizado Markdown.
- ADR-0005: Integración con Manifest V3.
