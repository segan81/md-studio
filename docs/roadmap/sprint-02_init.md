Perfecto. Para mantener la misma disciplina del Sprint 01, el **Sprint 02** debe centrarse en el primer comportamiento real del producto: **recibir Markdown y renderizarlo en el Viewer**.

Te dejo el documento listo para publicar como:

```text
docs/roadmap/sprint-02.md
```

````markdown
# Sprint 02 — Primer flujo Markdown

<!-- MARK: SPRINT-02-START -->

> **Estado:** Planificado  
> **Versión objetivo:** 0.2.0  
> **Rama:** `feature/sprint-02-markdown-engine`  
> **Producto:** MD Studio — Chrome Extension  
> **Objetivo:** Primer flujo funcional de procesamiento y visualización Markdown

---

# 1. Objetivo

El objetivo del Sprint 02 es transformar el Viewer construido durante el Sprint 01 en el primer componente funcional de MD Studio.

Durante este sprint se implementará el primer flujo completo:

```text
Markdown
   ↓
@md-studio/md-engine
   ↓
HTML
   ↓
MD Studio Viewer
   ↓
Documento renderizado
````

El objetivo no es construir todavía un motor Markdown completo.

Se implementará únicamente la funcionalidad mínima necesaria para demostrar que:

> **MD Studio puede recibir contenido Markdown, procesarlo y mostrarlo correctamente en el Viewer.**

---

# 2. Resultado esperado

Al finalizar el Sprint 02 deberá ser posible ejecutar MD Studio y observar un documento Markdown renderizado dentro del Viewer.

Ejemplo:

```markdown
# MD Studio

Este es un documento Markdown.

## Características

- Markdown
- TypeScript
- Lit
- Chromium
```

deberá producir una representación HTML equivalente:

```text
MD Studio

Este es un documento Markdown.

Características

• Markdown
• TypeScript
• Lit
• Chromium
```

---

# 3. Alcance

## Incluido

* Integración inicial de `@md-studio/md-engine`.
* API mínima del motor Markdown.
* Entrada de texto Markdown.
* Conversión Markdown → HTML.
* Integración del motor con el Viewer.
* Renderizado del HTML dentro de Lit.
* Estilos básicos del documento.
* Pruebas básicas del motor.
* Validación TypeScript.
* Build de la extensión.
* Validación del resultado en Chrome.

## No incluido

Las siguientes funcionalidades quedan fuera del Sprint 02:

* Apertura automática de archivos `.md`.
* File System Access API.
* Drag & Drop.
* Highlight.js.
* Mermaid.
* KaTeX.
* PlantUML.
* Graphviz.
* Tabla de contenido automática.
* Sidebar.
* Temas.
* Plugins.
* Exportación PDF.
* Exportación HTML.
* Integración con IA.
* Edición Markdown.

Estas funcionalidades serán incorporadas progresivamente en sprints posteriores.

---

# 4. Arquitectura

El flujo inicial será:

```text
┌───────────────────────┐
│      MD Studio        │
│    Chrome Extension   │
└───────────┬───────────┘
            │
            │ Markdown
            ▼
┌───────────────────────┐
│     MarkdownEngine    │
│                       │
│ @md-studio/md-engine  │
└───────────┬───────────┘
            │
            │ HTML
            ▼
┌───────────────────────┐
│       MD Viewer       │
│         Lit           │
└───────────┬───────────┘
            │
            ▼
     Documento HTML
```

La extensión será responsable de la interfaz.

El paquete `@md-studio/md-engine` será responsable del procesamiento Markdown.

---

# 5. `md-engine`

El paquete:

```text
packages/md-engine/
```

será utilizado como núcleo del procesamiento Markdown.

La extensión deberá consumirlo mediante:

```typescript
import { MarkdownEngine } from "@md-studio/md-engine";
```

No se utilizarán imports mediante rutas relativas entre paquetes.

La dependencia deberá mantenerse mediante workspace:

```json
"@md-studio/md-engine": "workspace:*"
```

---

# 6. API inicial

El motor tendrá una API mínima.

Conceptualmente:

```typescript
export interface RenderOptions {
  sanitize?: boolean;
}

export class MarkdownEngine {
  render(
    markdown: string,
    options?: RenderOptions
  ): string {
    // Markdown → HTML
  }
}
```

La API deberá mantenerse pequeña durante este sprint.

No se implementarán abstracciones que todavía no tengan una necesidad funcional.

---

# 7. Responsabilidades

## `@md-studio/md-engine`

Responsable de:

* Recibir Markdown.
* Procesar Markdown.
* Generar HTML.
* Exponer una API estable.
* Ejecutar pruebas unitarias.

## Chrome Extension

Responsable de:

* Obtener el contenido Markdown.
* Invocar `MarkdownEngine`.
* Mostrar el HTML.
* Gestionar la interfaz del Viewer.

---

# 8. Primer conjunto de Markdown

Durante este sprint se utilizará un subconjunto inicial de Markdown.

## Encabezados

```markdown
# Heading 1

## Heading 2

### Heading 3
```

## Párrafos

```markdown
Este es un párrafo de ejemplo.
```

## Énfasis

```markdown
**negrita**

*cursiva*
```

## Listas

```markdown
- Item 1
- Item 2
- Item 3
```

## Enlaces

```markdown
[MD Studio](https://example.com)
```

## Código inline

```markdown
Usar `MarkdownEngine` para procesar el documento.
```

## Bloques de código

````markdown
```typescript
const engine = new MarkdownEngine();
```
````

## Citas

```markdown
> Markdown es el lenguaje de documentación utilizado por MD Studio.
```

---

# 9. Seguridad

El HTML generado por el motor no deberá introducir riesgos innecesarios en el Viewer.

La API deberá contemplar:

```typescript
RenderOptions
```

para permitir controlar aspectos relacionados con sanitización.

La implementación de sanitización deberá evaluarse de acuerdo con el mecanismo de parsing utilizado.

No se habilitará contenido arbitrario de forma indiscriminada.

La seguridad tendrá prioridad sobre la comodidad de implementación.

---

# 10. Viewer

El Viewer continuará utilizando Lit.

El flujo será:

```text
viewer.html
      ↓
viewer.ts
      ↓
viewer-app.ts
      ↓
MarkdownEngine
      ↓
HTML
      ↓
DOM
```

El componente:

```html
<md-viewer></md-viewer>
```

será responsable de representar el documento.

---

# 11. Separación entre Engine y UI

No se permitirá que `md-engine` dependa de:

* Lit.
* Chrome APIs.
* DOM.
* `window`.
* `document`.
* APIs específicas de Chromium.

El motor debe permanecer independiente.

La dependencia será:

```text
Chrome Extension
       │
       ▼
md-engine
```

y no:

```text
md-engine
       │
       ▼
Chrome Extension
```

Esto mantiene la separación arquitectónica definida durante los primeros sprints.

---

# 12. Datos de prueba

El Viewer deberá utilizar inicialmente un documento Markdown de prueba.

Ejemplo:

````markdown
# MD Studio

Bienvenido a **MD Studio**.

## Markdown

MD Studio procesa documentos escritos en Markdown.

### Características

- Encabezados
- Párrafos
- Listas
- Enlaces
- Código

> Primer documento renderizado por MD Studio.

```typescript
const engine = new MarkdownEngine();

const html = engine.render(markdown);
````

````

El contenido podrá ser reemplazado posteriormente por archivos reales.

---

# 13. Pruebas

El `md-engine` deberá incorporar pruebas básicas para validar el comportamiento inicial.

Como mínimo se deberán probar:

```text
Markdown
   ↓
Heading
````

```text
Markdown
   ↓
Paragraph
```

```text
Markdown
   ↓
List
```

```text
Markdown
   ↓
Link
```

```text
Markdown
   ↓
Code
```

También deberá existir una prueba que confirme que una entrada vacía es manejada correctamente.

---

# 14. TypeScript

El proyecto deberá mantener validación mediante:

```powershell
pnpm --filter md-engine typecheck
```

y:

```powershell
pnpm --filter chrome-extension typecheck
```

No deberán existir errores de TypeScript antes de considerar terminado el sprint.

---

# 15. Build

El build de la extensión continuará ejecutándose mediante:

```powershell
pnpm --filter chrome-extension build
```

El build deberá producir nuevamente:

```text
dist/
├── manifest.json
├── viewer.html
├── service-worker-loader.js
└── assets/
```

y deberá incorporar el código del `md-engine` utilizado por el Viewer.

---

# 16. Validación en Chrome

La extensión deberá instalarse nuevamente mediante:

```text
chrome://extensions
```

utilizando:

```text
Load unpacked
```

sobre:

```text
apps/chrome-extension/dist
```

El Viewer deberá mostrar el documento Markdown procesado.

---

# 17. Definition of Done

El Sprint 02 estará terminado cuando se cumplan todos los siguientes criterios:

| Criterio                                 | Estado |
| ---------------------------------------- | :----: |
| `@md-studio/md-engine` implementado      |    ⬜   |
| API `MarkdownEngine` disponible          |    ⬜   |
| Markdown → HTML funcionando              |    ⬜   |
| Viewer consume `md-engine`               |    ⬜   |
| Lit renderiza HTML generado              |    ⬜   |
| Encabezados funcionan                    |    ⬜   |
| Párrafos funcionan                       |    ⬜   |
| Listas funcionan                         |    ⬜   |
| Enlaces funcionan                        |    ⬜   |
| Código funciona                          |    ⬜   |
| Pruebas básicas implementadas            |    ⬜   |
| TypeScript sin errores                   |    ⬜   |
| Build exitoso                            |    ⬜   |
| Extensión instalable en Chrome           |    ⬜   |
| Documento Markdown renderizado en Chrome |    ⬜   |

---

# 18. Criterio funcional principal

El criterio más importante del Sprint 02 es:

> **Un documento Markdown proporcionado al Viewer debe convertirse en HTML mediante `@md-studio/md-engine` y mostrarse correctamente en Chrome.**

El flujo mínimo esperado será:

```text
Markdown
   │
   ▼
MarkdownEngine.render()
   │
   ▼
HTML
   │
   ▼
<md-viewer>
   │
   ▼
Chrome
```

---

# 19. Git Workflow

El desarrollo deberá realizarse sobre:

```text
feature/sprint-02-markdown-engine
```

El flujo será:

```text
develop
   │
   └── feature/sprint-02-markdown-engine
```

Los cambios deberán seguir Conventional Commits.

Ejemplos:

```text
feat: add markdown engine
feat: render markdown in viewer
test: add markdown engine tests
fix: sanitize rendered html
docs: document markdown engine
```

Antes de cada commit deberán validarse:

```powershell
git status
```

```powershell
git diff --check
```

y las pruebas/build correspondientes.

---

# 20. Commits

Se recomienda mantener commits pequeños y relacionados con una única responsabilidad.

Ejemplo:

```text
feat: implement markdown engine
```

```text
test: add markdown engine tests
```

```text
feat: integrate markdown engine with viewer
```

```text
style: add markdown document styles
```

```text
docs: document markdown rendering
```

No se deberán acumular cambios no relacionados dentro de un mismo commit.

---

# 21. Documentación

Durante el Sprint 02 se actualizará la documentación cuando exista una decisión técnica relevante.

Los cambios arquitectónicos deberán documentarse mediante ADR cuando corresponda.

La documentación del motor deberá explicar:

* Responsabilidad.
* API pública.
* Entrada Markdown.
* Salida HTML.
* Seguridad.
* Dependencias.
* Estrategia de pruebas.

---

# 22. Fuera de alcance técnico

No se implementarán todavía capas como:

```text
AST
DocumentModel
PluginManager
ThemeEngine
EventBus
RendererPipeline
```

salvo que una necesidad concreta del Sprint obligue a introducir alguna de ellas.

La regla continúa siendo:

> **La arquitectura evoluciona con el producto. No construimos infraestructura para problemas que todavía no existen.**

---

# 23. Próximo paso después del Sprint

Una vez completado este sprint, el producto deberá haber evolucionado de:

```text
MD Studio

Extensión instalada
        +
Viewer funcionando
```

a:

```text
MD Studio

Extensión instalada
        +
Viewer funcionando
        +
Markdown → HTML
```

El siguiente sprint podrá entonces concentrarse en ampliar la compatibilidad Markdown y mejorar la experiencia de lectura.

---

# 24. Resultado esperado

Al finalizar el Sprint 02:

```text
┌─────────────────────────────────┐
│            MD Studio            │
├─────────────────────────────────┤
│                                 │
│  Markdown                       │
│      │                          │
│      ▼                          │
│  md-engine                      │
│      │                          │
│      ▼                          │
│  HTML                           │
│      │                          │
│      ▼                          │
│  Lit Viewer                     │
│      │                          │
│      ▼                          │
│  Chromium                       │
│                                 │
│  Documento renderizado     ✓    │
│                                 │
└─────────────────────────────────┘
```

**Objetivo del Sprint 02: convertir MD Studio de una extensión ejecutable en un visor Markdown funcional.**

<!-- MARK: SPRINT-02-END -->

````

### Resumen del Sprint 02

La diferencia fundamental respecto al Sprint 01 es esta:

**Sprint 01**

```text
Chrome → Extension → Viewer
````

**Sprint 02**

```text
Markdown → md-engine → Viewer → Chrome
```

Y mantendría el Sprint 02 deliberadamente pequeño. **Primero necesitamos demostrar que el flujo Markdown funciona de extremo a extremo; después ampliamos compatibilidad.** No tiene sentido construir Mermaid, plugins, TOC y media docena de capas antes de conseguir que un `# Hola mundo` se renderice bien.
