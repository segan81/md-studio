# Protección del Proyecto

> Este procedimiento debe ejecutarse al finalizar cada Sprint o antes de realizar cambios importantes.

<!-- MARK: GIT-PROTECTION-START -->

## Paso 0. Estrategia Oficial
```
main
│
└── develop
      │
      └── feature/sprint-XX-nombre
```
## Paso 1. Verificar el estado

```bash
git status
```

Debe confirmar que conoces exactamente los cambios pendientes.

---

## Paso 2. Revisar diferencias

```bash
git diff
```

Verificar que no existan archivos temporales ni cambios accidentales.

---

## Paso 3. Agregar cambios

```bash
git add .
```

---

## Paso 4. Confirmar archivos

```bash
git status
```

Debe mostrar únicamente:

```
Changes to be committed
```

---

## Paso 5. Crear commit

```bash
git commit -m "<TIPO>: <DESCRIPCIÓN>"
```

Ejemplos:

```text
feat: add manifest v3
fix: resolve markdown parser
docs: update architecture
refactor: split renderer
chore: update dependencies
```

---

## Paso 6. Crear etiqueta (Tag)

```bash
git tag -a <TAG> -m "<DESCRIPCIÓN>"
```

Ejemplo:

```bash
git tag -a v0.0.1-bootstrap -m "Bootstrap del proyecto"
```

---

## Paso 7. Subir cambios

```bash
git push origin <RAMA>
```

---

## Paso 8. Publicar etiqueta

```bash
git push origin <TAG>
```

---

## Paso 9. Crear siguiente rama

```bash
git checkout -b feature/<NOMBRE>
```

---

## Paso 10. Publicar la nueva rama

```bash
git push -u origin feature/<NOMBRE>
```

---

## Paso 11. Validación

```bash
git log --graph --decorate --oneline --all
```

Verificar:

- Commit creado.
- Tag publicado.
- Nueva rama activa.

<!-- MARK: GIT-PROTECTION-END -->