# ADR-0003: Adopción de Manifest Version 3

- Estado: Aprobado
- Fecha: 2026-08-07

---

# Contexto

Google estableció Manifest Version 3 como el estándar para las nuevas extensiones Chromium.

Manifest V2 está deprecado.

---

# Problema

Continuar utilizando Manifest V2 impediría la publicación futura de MD Studio.

---

# Decisión

Toda la extensión utilizará exclusivamente Manifest Version 3.

---

# Justificación

- Compatibilidad futura.
- Mayor seguridad.
- Service Workers.
- Mejor aislamiento.
- Mejor rendimiento.

---

# Alternativas

## Manifest V2

Descartado.

Obsoleto.

---

# Consecuencias

Positivas

- Compatibilidad con Chrome.
- Compatibilidad con Edge.
- Arquitectura moderna.

Negativas

- Restricciones adicionales para ejecución en segundo plano.

---

# Riesgos

Cambios futuros en la API de Chromium.

---

# ADR relacionados

ADR-0001

ADR-0002

ADR-0004