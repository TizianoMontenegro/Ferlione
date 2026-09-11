# Contribuir a Ferlione

## Preparación

1. Actualiza la copia local desde `main`.
2. Crea una rama propia para el cambio: `feat/nombre`, `fix/nombre`, `docs/nombre` o `chore/nombre`.
3. Revisa el estado y los cambios existentes antes de editar.

## Commits

- Usa mensajes breves que describan el cambio en modo imperativo.
- Mantén cada commit centrado en una sola tarea.
- No mezcles cambios personales o generados automáticamente con el trabajo de la tarea.

## Comprobaciones y publicación

- Ejecuta las pruebas, linters o comprobaciones documentadas por el proyecto.
- Revisa `git diff --check` y el diff completo antes de publicar.
- Publica la rama en `origin` y solicita una revisión antes de integrarla en `main`.
- Si `main` avanzó, actualiza tu rama antes de pedir la integración.

## Conflictos

Resuelve los conflictos conservando la intención de ambos cambios cuando sea posible. Comprueba el resultado, vuelve a ejecutar las pruebas y documenta cualquier decisión relevante en la revisión.
