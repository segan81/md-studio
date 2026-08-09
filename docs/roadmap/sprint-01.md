# Sprint 01

<!-- MARK: SPRINT-01 -->

## Nombre

**Manifest V3 – Primera Extensión Funcional**

---

# Objetivo del Sprint

Como usuario, quiero instalar **MD Studio** en un navegador basado en Chromium para verificar que la extensión carga correctamente y muestra una pantalla inicial.

Este Sprint tiene como propósito obtener el **primer entregable ejecutable** del proyecto.

Al finalizar el Sprint, MD Studio deberá poder instalarse como una extensión en Chrome o Edge y mostrar una interfaz inicial funcional.

---

# Entregable

Una extensión Chromium basada en **Manifest V3**, instalable desde `chrome://extensions`, con una pantalla inicial desarrollada en Lit.

---

# Alcance

Durante este Sprint se implementará:

- Manifest Version 3.
- Service Worker.
- Página Viewer.
- Componente raíz en Lit.
- Configuración de Vite para la extensión.
- Proceso de compilación.
- Instalación en Chromium.

No se implementará aún:

- Renderizado Markdown.
- Parser.
- Highlight.js.
- Mermaid.
- Sidebar.
- Tabla de contenido.
- Exportación.
- Sistema de Plugins.

Todo el esfuerzo estará orientado únicamente a conseguir una extensión funcional.

---

# Backlog del Sprint

| Nº | Historia | Estado |
|----|----------|--------|
| 1 | Revisar estructura del proyecto | ⬜ Pendiente |
| 2 | Implementar Manifest V3 | ⬜ Pendiente |
| 3 | Configurar Vite para la extensión | ⬜ Pendiente |
| 4 | Implementar Service Worker | ⬜ Pendiente |
| 5 | Crear Viewer | ⬜ Pendiente |
| 6 | Crear componente raíz en Lit | ⬜ Pendiente |
| 7 | Generar Build | ⬜ Pendiente |
| 8 | Instalar la extensión en Chromium | ⬜ Pendiente |

---

# Metodología

Durante este Sprint trabajaremos bajo la siguiente regla:

**Una única tarea a la vez.**

Cada tarea seguirá exactamente el mismo ciclo:

```text
Tarea

↓

Implementación

↓

Compilación

↓

Prueba

↓

Commit

↓

Push

↓

Verificación

↓

Siguiente tarea
```

No se iniciará una nueva tarea hasta que la anterior haya sido validada e integrada correctamente.

---

# Rama del Sprint

Todo el desarrollo de este Sprint se realizará en la rama:

```text
feature/sprint-01-manifest-v3
```

No se crearán ramas adicionales durante este Sprint.

Al finalizar:

```text
feature/sprint-01-manifest-v3
            │
            ▼
         develop
            │
            ▼
           main
            │
            ▼
        Tag v0.1.0
```

---

# Convención de Commits

Todos los commits deberán seguir **Conventional Commits**.

Ejemplos:

```text
feat(manifest): add Manifest V3

feat(background): add service worker

feat(viewer): create viewer page

feat(lit): add root component

build(vite): configure extension build

docs: update sprint progress
```

---

# Criterios de aceptación

El Sprint se considerará completado cuando:

- La extensión compile correctamente.
- La extensión pueda cargarse desde `chrome://extensions`.
- El Service Worker no presente errores.
- Se visualice una pantalla inicial desarrollada con Lit.
- La estructura del proyecto permanezca organizada.
- La documentación haya sido actualizada.

---

# Definition of Done

Para considerar este Sprint finalizado deberán cumplirse todos los siguientes puntos:

- Código compilando correctamente.
- Sin errores de TypeScript.
- Sin errores de ESLint.
- Build exitoso.
- Extensión instalada correctamente en Chromium.
- Documentación actualizada.
- Merge hacia `develop`.
- Publicación de la versión estable en `main`.
- Creación del tag correspondiente.

---

# Estado

**En progreso**

<!-- MARK: SPRINT-01-END -->