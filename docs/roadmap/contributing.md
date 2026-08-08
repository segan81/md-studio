# Contributing Guide

<!-- MARK: CONTRIBUTING -->

## Bienvenido

¡Gracias por tu interés en contribuir a MD Studio!

Nuestro objetivo es construir una de las mejores extensiones para visualizar documentación Markdown en navegadores basados en Chromium, manteniendo una arquitectura limpia, documentación de alta calidad y un código fácil de mantener.

Toda contribución es bienvenida.

---

# Filosofía del proyecto

MD Studio sigue los siguientes principios:

- Simplicidad antes que complejidad.
- Arquitectura limpia.
- Bajo acoplamiento.
- Código autodocumentado.
- Calidad sobre velocidad.
- Documentación como parte del desarrollo.
- Seguridad por defecto.

---

# Antes de comenzar

Lee los siguientes documentos:

- README.md
- docs/architecture/
- docs/adr/
- docs/manual/development.md
- docs/manual/coding-standards.md

---

# Flujo de trabajo

1. Crear un Issue.
2. Asignar el Issue.
3. Crear una rama desde `develop`.
4. Implementar la solución.
5. Ejecutar las pruebas.
6. Actualizar la documentación si aplica.
7. Crear un Pull Request.

---

# Convención de ramas

feature/<nombre>

fix/<nombre>

refactor/<nombre>

docs/<nombre>

test/<nombre>

hotfix/<nombre>

Ejemplos

feature/manifest-v3

feature/sidebar

fix/render-images

---

# Convención de Commits

Seguimos Conventional Commits.

Ejemplos:

feat: add markdown parser

fix: resolve image rendering

docs: update architecture

refactor: split renderer

test: add parser tests

chore: update dependencies

---

# Pull Requests

Todo Pull Request debe:

- Compilar correctamente.
- No introducir errores de lint.
- Mantener la cobertura de pruebas.
- Actualizar la documentación cuando corresponda.
- Mantener compatibilidad con Manifest V3.

---

# Revisión de código

Durante la revisión se evaluará:

- Legibilidad.
- Arquitectura.
- Seguridad.
- Rendimiento.
- Cobertura de pruebas.
- Documentación.

---

# Código de conducta

Esperamos un ambiente respetuoso, colaborativo y profesional.

Las discusiones técnicas deben centrarse en argumentos y evidencia, nunca en personas.

---

# Definition of Done

Una contribución se considera terminada cuando:

- El código compila.
- Todas las pruebas son exitosas.
- El Pull Request es aprobado.
- La documentación fue actualizada.
- Se realizó el merge a `develop`.

<!-- MARK: CONTRIBUTING-END -->