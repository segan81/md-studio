# ADR-0004: Motor Markdown Independiente

- Estado: Aprobado
- Fecha: 2026-08-07

---

# Contexto

La prioridad del proyecto es desarrollar una extensión Chromium para visualizar documentos Markdown.

Sin embargo, se espera que el motor de procesamiento pueda reutilizarse en futuras aplicaciones.

---

# Problema

Implementar toda la lógica directamente dentro de la extensión dificultaría la reutilización y aumentaría el acoplamiento.

---

# Decisión

Se crea un paquete independiente:

```text
packages/md-engine
```

La extensión será únicamente un consumidor de dicho paquete.

---

# Responsabilidades

El motor será responsable de:

- Procesamiento Markdown.
- Renderizado.
- API pública.

No contendrá código específico de Chromium.

---

# Principio

El motor evolucionará únicamente cuando la extensión requiera nuevas capacidades.

No se implementarán funcionalidades anticipadas.

---

# Arquitectura inicial

```text
src/

parser/

renderer/

types/

index.ts
```

La arquitectura podrá evolucionar progresivamente hacia un modelo basado en AST y plugins sin romper la API pública.

---

# Alternativas

## Lógica integrada en la extensión

Descartado.

Genera alto acoplamiento.

---

# Consecuencias

Positivas

- Reutilización.
- Facilidad de pruebas.
- Evolución independiente.

Negativas

- Mayor número de paquetes.

---

# Riesgos

Diseñar una API demasiado grande antes de tiempo.

La estrategia será mantener el motor minimalista y orientado a las necesidades reales del producto.

---

# ADR relacionados

ADR-0001

ADR-0002

ADR-0003