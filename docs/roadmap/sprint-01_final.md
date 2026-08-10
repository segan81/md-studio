# Sprint 01 — Extensión Chromium funcional

<!-- MARK: SPRINT-01-START -->

> **Estado:** Completado  
> **Versión objetivo:** 0.1.0  
> **Rama:** `feature/sprint-01-manifest-v3`  
> **Producto:** MD Studio — Chrome Extension  
> **Resultado:** Extensión Manifest V3 instalable y Viewer funcional

---

## 1. Objetivo

El objetivo del Sprint 01 fue construir el primer **vertical slice funcional** de MD Studio.

Al finalizar el sprint, la extensión debía poder:

1. Compilar correctamente mediante Vite + CRXJS.
2. Generar una extensión válida bajo Manifest V3.
3. Generar y empaquetar el Service Worker.
4. Generar el Viewer como página HTML procesada por Vite.
5. Instalarse mediante **Load unpacked** en Chrome.
6. Abrir `viewer.html` desde el contexto de la extensión.
7. Renderizar el primer componente de interfaz de MD Studio.

El objetivo del sprint **no incluía todavía el procesamiento de Markdown**.

---

# 2. Resultado del Sprint

El Sprint 01 consiguió un primer producto ejecutable:

```text
Chrome
   │
   ▼
MD Studio Extension
   │
   ├── Manifest V3
   │
   ├── Service Worker
   │
   └── Viewer
         │
         ▼
      Lit Component
         │
         ▼
   "MD Studio está funcionando"
```

La extensión fue instalada correctamente en Chrome utilizando el directorio generado por el proceso de build:

```text
apps/chrome-extension/dist/
```

El Viewer también fue accesible directamente mediante:

```text
chrome-extension://<extension-id>/viewer.html
```

---

# 3. Alcance

## Incluido

- Manifest V3.
- Configuración de Vite.
- Integración de CRXJS.
- Service Worker.
- Viewer HTML.
- Viewer TypeScript.
- Componente inicial basado en Lit.
- Build de producción.
- Instalación de la extensión en Chrome.
- Validación del Viewer.
- Integración con el repositorio Git.

## No incluido

Las siguientes funcionalidades quedan fuera del Sprint 01:

- Parser Markdown.
- Renderizado Markdown.
- Apertura automática de archivos `.md`.
- Highlight.js.
- Mermaid.
- KaTeX.
- Tabla de contenido.
- Sidebar.
- Themes.
- Sistema de plugins.
- Exportación.
- Integración avanzada con `md-engine`.

Estas funcionalidades serán desarrolladas en sprints posteriores.

---

# 4. Arquitectura implementada

La aplicación Chromium quedó organizada conceptualmente de la siguiente manera:

```text
apps/chrome-extension/
│
├── public/
│   ├── manifest.json
│   └── icons/
│
├── viewer.html
│
├── src/
│   ├── background/
│   │   └── service-worker.ts
│   │
│   ├── viewer/
│   │   ├── viewer.ts
│   │   ├── viewer.css
│   │   └── viewer-app.ts
│   │
│   └── shared/
│
├── vite.config.ts
├── package.json
└── tsconfig.json
```

El `viewer.html` se encuentra en la raíz de la aplicación para que pueda ser tratado como un **entry point de Vite**.

La carpeta `public/` se mantiene para recursos estáticos y el `manifest.json`.

---

# 5. Manifest V3

El proyecto utiliza:

```json
{
  "manifest_version": 3
}
```

La extensión declara:

- Nombre: `MD Studio`
- Descripción: `Modern Markdown Viewer for Chromium browsers.`
- Versión: `0.1.0`
- Service Worker.
- Acción de extensión.
- Sin permisos adicionales.
- Sin `host_permissions`.

La configuración inicial permite mantener el principio de mínimo privilegio:

```json
"permissions": [],
"host_permissions": []
```

Esto evita solicitar permisos que todavía no son necesarios para el MVP.

---

# 6. Service Worker

Se creó el Service Worker:

```text
apps/chrome-extension/src/background/service-worker.ts
```

La implementación inicial valida que el contexto de extensión se inicializa correctamente y utiliza el evento:

```typescript
chrome.runtime.onInstalled
```

El Service Worker se declara desde el Manifest V3 y CRXJS se encarga de integrarlo en el proceso de build.

El resultado generado por CRXJS incluye:

```text
dist/service-worker-loader.js
```

y el bundle correspondiente dentro de:

```text
dist/assets/
```

---

# 7. Viewer

El Viewer constituye la primera interfaz visible de MD Studio.

Archivo:

```text
apps/chrome-extension/viewer.html
```

Su responsabilidad es servir como punto de entrada de la interfaz:

```text
viewer.html
      │
      ▼
viewer.ts
      │
      ├── viewer.css
      │
      └── viewer-app.ts
```

El archivo `viewer.ts` utiliza imports de módulos:

```typescript
import "./viewer.css";
import "./viewer-app";
```

Esto permite que Vite construya el Viewer como un bundle independiente.

---

# 8. Integración con Lit

El Viewer utiliza un componente Web Component basado en Lit.

La página contiene:

```html
<md-viewer></md-viewer>
```

La implementación inicial no pretende todavía representar Markdown.

Su objetivo es validar el pipeline completo:

```text
HTML
 ↓
TypeScript
 ↓
Lit
 ↓
Web Component
 ↓
Chrome Extension
```

El resultado visible confirma que MD Studio está funcionando correctamente.

---

# 9. Configuración de Vite

La aplicación utiliza Vite como herramienta de build.

La configuración final incorpora CRXJS:

```typescript
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";

import manifest from "./public/manifest.json";

export default defineConfig({
  plugins: [
    crx({ manifest })
  ],

  build: {
    rollupOptions: {
      input: {
        viewer: "viewer.html"
      }
    }
  }
});
```

## Motivo de `rollupOptions.input`

El proyecto necesita que `viewer.html` sea tratado como un **entry point real de Vite**.

Esto permite que:

- Vite procese el HTML.
- `viewer.ts` sea transformado.
- CSS y TypeScript sean empaquetados.
- Las referencias a los assets se resuelvan durante el build.

El resultado final confirma que el Viewer ya no es simplemente un archivo estático copiado al directorio `dist`.

---

# 10. Integración de CRXJS

Se incorporó:

```text
@crxjs/vite-plugin
```

como dependencia de desarrollo de la aplicación Chrome Extension.

El plugin permite integrar directamente:

```text
Manifest V3
+
Vite
+
TypeScript
+
Service Worker
+
Web Components / Lit
```

dentro del proceso de compilación.

La configuración utiliza:

```typescript
crx({ manifest })
```

para integrar el Manifest V3 con Vite.

---

# 11. Scripts del proyecto

El `package.json` de la extensión utiliza los siguientes comandos:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "typecheck": "tsc --noEmit"
}
```

La separación entre:

```text
typecheck
```

y:

```text
build
```

permite utilizar TypeScript para validación estática y Vite/CRXJS para generar los artefactos de la extensión.

---

# 12. Validación TypeScript

Antes de continuar con el build se validó TypeScript mediante:

```powershell
pnpm --filter chrome-extension exec tsc --noEmit
```

Resultado:

```text
Process completed successfully.
```

También se confirmó la versión utilizada:

```text
Version 6.0.3
```

---

# 13. Build de producción

El build se ejecutó desde la raíz del monorepo:

```powershell
pnpm --filter chrome-extension build
```

Resultado final:

```text
vite v8.2.1 building client environment for production...
✓ 26 modules transformed.
computing gzip size...
```

Los principales artefactos generados fueron:

```text
dist/
├── manifest.json
├── service-worker-loader.js
├── viewer.html
│
└── assets/
    ├── service-worker.ts-C9iIlogq.js
    ├── viewer-BW2xvLQY.css
    └── viewer-uJy3DFiz.js
```

El build terminó correctamente:

```text
✓ built in 988ms
```

---

# 14. Warning de Vite

Durante el build aparece actualmente el siguiente warning:

```text
Your Vite config uses features that are unsupported by
configLoader: 'native'...

JSON import "./public/manifest.json" without import attributes
```

Este mensaje **no impide la compilación**.

El build termina correctamente y la extensión puede instalarse y ejecutarse.

Por esta razón, el warning queda registrado como una mejora técnica futura y no como un bloqueo del Sprint 01.

---

# 15. Instalación en Chrome

La extensión compilada se instaló mediante:

```text
chrome://extensions
```

utilizando:

```text
Developer mode
        ↓
Load unpacked
        ↓
apps/chrome-extension/dist
```

Chrome aceptó correctamente la extensión.

Se verificó:

- Extensión instalada.
- Extensión habilitada.
- Manifest V3 aceptado.
- Service Worker reconocido.
- Sin permisos adicionales.

El estado:

```text
Service Worker — inactive
```

no representa un error.

Los Service Workers de extensiones pueden ser suspendidos por Chrome cuando no tienen eventos pendientes.

---

# 16. Validación del Viewer

Una vez instalada la extensión, se accedió al Viewer mediante:

```text
chrome-extension://<extension-id>/viewer.html
```

El resultado fue exitoso.

La página cargó correctamente el componente de MD Studio y mostró:

```text
MD Studio

La extensión está funcionando correctamente.
```

Esto valida el flujo completo:

```text
Manifest
   ↓
CRXJS
   ↓
Vite
   ↓
Service Worker
   ↓
Viewer
   ↓
Lit
   ↓
Chrome
```

---

# 17. Git y control de cambios

El desarrollo se realizó sobre:

```text
feature/sprint-01-manifest-v3
```

Antes del commit se verificaron los cambios mediante:

```powershell
git status
```

y:

```powershell
git diff --check
```

No se encontraron errores de whitespace.

Git reconoció correctamente el movimiento de:

```text
apps/chrome-extension/public/viewer.html
```

a:

```text
apps/chrome-extension/viewer.html
```

como:

```text
renamed:
apps/chrome-extension/public/viewer.html
    ->
apps/chrome-extension/viewer.html
```

---

# 18. Commit del Sprint

El checkpoint funcional quedó registrado mediante:

```text
4fadaa9 feat: configure extension viewer entry
```

Commit completo:

```text
feat: configure extension viewer entry
```

Cambios registrados:

```text
3 files changed
26 insertions(+)
16 deletions(-)
```

El movimiento del Viewer fue detectado como un rename del 100%:

```text
apps/chrome-extension/{public => }/viewer.html
```

---

# 19. Publicación de la rama

La rama:

```text
feature/sprint-01-manifest-v3
```

fue publicada correctamente en el repositorio remoto mediante:

```powershell
git push
```

El push terminó sin errores.

---

# 20. Definition of Done

| Criterio | Estado |
|---|:---:|
| Manifest V3 válido | ✅ |
| CRXJS integrado | ✅ |
| Service Worker configurado | ✅ |
| Viewer implementado | ✅ |
| Lit funcionando | ✅ |
| TypeScript validado | ✅ |
| Build exitoso | ✅ |
| `viewer.html` procesado por Vite | ✅ |
| Extensión instalada en Chrome | ✅ |
| Viewer accesible desde la extensión | ✅ |
| Código publicado en Git | ✅ |

---

# 21. Decisiones técnicas del Sprint

## 21.1 CRXJS como integración de extensión

Se adopta:

```text
Vite
+
@crxjs/vite-plugin
```

como mecanismo de build de la extensión Chromium.

La razón principal es integrar correctamente Manifest V3, Service Workers y páginas de extensión dentro del pipeline de Vite.

---

## 21.2 Viewer como entry point

`viewer.html` se mantiene fuera de `public/` para que Vite pueda procesarlo como página de aplicación.

```text
viewer.html
```

es tratado como un entry point explícito:

```typescript
rollupOptions: {
  input: {
    viewer: "viewer.html"
  }
}
```

---

## 21.3 Mínimo privilegio

El Manifest no solicita permisos adicionales mientras no exista una funcionalidad que los requiera:

```json
"permissions": [],
"host_permissions": []
```

Los permisos se incorporarán únicamente cuando exista una necesidad funcional real.

---

## 21.4 Lit como tecnología de UI

Lit se mantiene como la tecnología para los componentes visuales de la extensión.

El Viewer utiliza Web Components, permitiendo una arquitectura modular para futuras piezas como:

```text
Toolbar
Sidebar
Document
StatusBar
TOC
```

Estas piezas no forman parte todavía del Sprint 01.

---

# 22. Fuera de alcance

Durante el Sprint 01 no se implementaron funcionalidades que pertenecen a etapas posteriores.

Por diseño, todavía no existe:

```text
Markdown Parser
Markdown Renderer
AST
Highlight.js
Mermaid
KaTeX
TOC
Sidebar
Themes
Plugins
File System integration
```

Esto es intencional.

El Sprint 01 busca demostrar primero que la infraestructura de la extensión funciona correctamente.

---

# 23. Próximo Sprint

El siguiente objetivo será comenzar a utilizar el paquete:

```text
@md-studio/md-engine
```

para introducir el primer flujo funcional relacionado directamente con Markdown.

Objetivo conceptual:

```text
Archivo Markdown
       ↓
md-engine
       ↓
HTML
       ↓
MD Studio Viewer
```

El siguiente sprint deberá partir del estado estable conseguido en este Sprint 01 y evitar modificar nuevamente la infraestructura de extensión salvo que exista una necesidad técnica concreta.

---

# 24. Resultado final

El Sprint 01 establece el primer punto funcional de MD Studio:

```text
┌──────────────────────────────┐
│          MD Studio           │
├──────────────────────────────┤
│                              │
│   Chromium Extension         │
│                              │
│   Manifest V3        ✓       │
│   Service Worker     ✓       │
│   CRXJS              ✓       │
│   Vite               ✓       │
│   TypeScript         ✓       │
│   Lit                ✓       │
│   Viewer             ✓       │
│                              │
│   Extension instalada ✓     │
│                              │
└──────────────────────────────┘
```

**Sprint 01 completado.**

El proyecto cuenta ahora con un **vertical slice ejecutable**, sobre el cual se podrá construir el procesamiento y visualización de Markdown en los siguientes sprints.

<!-- MARK: SPRINT-01-END -->