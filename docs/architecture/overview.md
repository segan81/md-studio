# Arquitectura General

<!-- MARK: ARCHITECTURE-OVERVIEW -->

## Objetivo

MD Studio es una plataforma para visualizar documentación técnica escrita en Markdown mediante una extensión para navegadores basados en Chromium.

El proyecto está diseñado siguiendo una arquitectura modular que separa claramente:

- La aplicación (Chrome Extension)
- El motor de procesamiento Markdown
- La documentación técnica
- La infraestructura de desarrollo

El objetivo es mantener un bajo acoplamiento y permitir que cada módulo evolucione de manera independiente.

---

# Principios de arquitectura

MD Studio sigue los siguientes principios:

- Separación de responsabilidades.
- Modularidad.
- Bajo acoplamiento.
- Alta cohesión.
- Escalabilidad.
- Reutilización del código.
- Seguridad por defecto.
- Documentación como parte del código.

---

# Arquitectura lógica

```text
                    MD Studio

                        │
        ┌───────────────┴───────────────┐
        │                               │
 Chrome Extension                 Documentación
        │
        │
        ▼
@md-studio/md-engine
        │
        ├──────── Parser
        ├──────── Renderer
        ├──────── Types
        └──────── Utils
```

---

# Componentes

## Chrome Extension

Responsable de:

- Interfaz gráfica
- Integración con Chromium
- Gestión del ciclo de vida de la extensión
- Comunicación con el motor Markdown

---

## md-engine

Responsable de:

- Procesamiento Markdown
- Conversión Markdown → HTML
- Renderizado
- API pública

No debe contener código específico del navegador.

---

## Documentación

Contiene:

- ADR
- Manuales
- Roadmap
- Arquitectura
- API

---

# Arquitectura por capas

```text
┌──────────────────────────────────────┐
│ Chrome Extension                     │
├──────────────────────────────────────┤
│ UI (Lit Components)                  │
├──────────────────────────────────────┤
│ Markdown Engine                      │
├──────────────────────────────────────┤
│ Utilities                            │
└──────────────────────────────────────┘
```

---

# Objetivo del MVP

La primera versión deberá ser capaz de:

- Abrir archivos Markdown.
- Renderizar HTML.
- Mostrar una interfaz limpia.
- Funcionar como extensión Manifest V3.

Todo lo demás se añadirá de forma incremental.

<!-- MARK: ARCHITECTURE-OVERVIEW-END -->