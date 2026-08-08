# Manifest V3

<!-- MARK: MANIFEST-V3 -->

## Objetivo

Definir la integración entre MD Studio y Chromium utilizando Manifest Version 3.

Manifest V3 será el único formato soportado por el proyecto.

---

# Arquitectura

```text
Chrome

↓

Manifest.json

↓

Service Worker

↓

Viewer

↓

Markdown Engine
```

---

# Componentes

## Manifest

Responsable de:

- Registrar la extensión.
- Declarar permisos.
- Definir recursos.
- Configurar el Service Worker.

---

## Service Worker

Responsable de:

- Ciclo de vida.
- Eventos.
- Comunicación con Chromium.

---

## Viewer

Responsable de:

- Mostrar el documento.
- Crear la interfaz.
- Invocar al motor Markdown.

---

# Flujo

```text
Usuario

↓

Abre archivo .md

↓

Viewer

↓

Markdown Engine

↓

HTML

↓

Render
```

---

# Estructura

```text
apps/chrome-extension/

public/

    manifest.json

    icons/

src/

    background/

        service-worker.ts

    viewer/

        viewer.ts

        viewer-app.ts

        viewer.css
```

---

# Permisos

Inicialmente utilizaremos únicamente los permisos estrictamente necesarios.

Ejemplo:

- storage

Los permisos adicionales deberán documentarse mediante un ADR antes de ser incorporados.

---

# Seguridad

Toda salida HTML deberá ser sanitizada antes de renderizarse.

No se permitirá la ejecución de código dinámico.

La extensión seguirá las políticas CSP definidas por Manifest V3.

---

# Evolución

Versiones futuras podrán incorporar:

- Side Panel
- Context Menus
- Commands
- Omnibox
- File Handling API
- Offscreen Documents

Siempre manteniendo compatibilidad con Manifest V3.

<!-- MARK: MANIFEST-V3-END -->