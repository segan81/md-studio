# Development Guide

<!-- MARK: DEVELOPMENT -->

## Objetivo

Este documento define el flujo de desarrollo oficial de MD Studio.

Todo desarrollo debe seguir este proceso para garantizar calidad, trazabilidad y mantenibilidad.

---

## Flujo de trabajo

Issue
↓

Branch
↓

Implementación
↓

Pruebas

↓

Commit

↓

Pull Request

↓

Code Review

↓

Merge

---

## Estrategia de ramas

main
│
└── develop
    ├── feature/*
    ├── fix/*
    ├── refactor/*
    ├── docs/*
    ├── test/*
    └── hotfix/*

Nunca desarrollar directamente sobre:

- main
- develop

---

## Convención de Commits

feat:
Nueva funcionalidad

fix:
Corrección de errores

docs:
Documentación

refactor:
Refactorización

style:
Formato de código

test:
Pruebas

chore:
Infraestructura

ci:
GitHub Actions

build:
Compilación

---

## Flujo por Sprint

1. Crear Issue
2. Crear rama
3. Implementar
4. Ejecutar pruebas
5. Actualizar documentación
6. Crear Pull Request
7. Merge a develop

---

## Checklist

- Código compilando
- Linter sin errores
- Pruebas exitosas
- Documentación actualizada
- Commit siguiendo Conventional Commits

<!-- MARK: DEVELOPMENT-END -->