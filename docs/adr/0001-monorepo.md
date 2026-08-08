> **Estado:** Aprobado
>
> **Versión:** 1.0
>
> **Última revisión:** 2026-08-07
>
> **Responsable:** Equipo MD Studio
>
> **Implementación:** Completa | Parcial | Pendiente
>
> **Impacto:** Alto


# ADR-0001: Arquitectura Monorepo

- Estado: Aprobado
- Fecha: 2026-08-07
- Decisores: Equipo MD Studio

---

# Contexto

MD Studio inicia como una extensión para navegadores Chromium, pero desde su concepción se identificó que el motor de procesamiento Markdown puede reutilizarse en múltiples aplicaciones.

Se requiere una arquitectura que permita compartir código sin duplicación y mantener una única fuente de verdad para la configuración, documentación y herramientas.

---

# Problema

Un único proyecto acoplaría la lógica del motor Markdown a la extensión.

Repositorios separados incrementarían la complejidad de sincronización y mantenimiento.

---

# Decisión

Se adopta un Monorepo utilizando pnpm Workspaces.

Estructura:

```text
apps/
packages/
docs/
tooling/
```

Las aplicaciones consumirán paquetes mediante:

```text
workspace:*
```

---

# Alternativas

## Repositorio único

Descartado.

Genera fuerte acoplamiento.

---

## Repositorios independientes

Descartado.

Duplica configuración y dificulta la evolución conjunta.

---

# Consecuencias

Positivas

- Reutilización.
- Configuración centralizada.
- Escalabilidad.
- Mejor experiencia de desarrollo.

Negativas

- Mayor complejidad inicial.

---

# Riesgos

Curva de aprendizaje de pnpm Workspaces.

---

# ADR relacionados

ADR-0002

ADR-0003

ADR-0004

## Historial

| Fecha | Versión | Cambio |
|--------|----------|--------|
| 2026-08-07 | 1.0 | Creación del ADR |