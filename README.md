# Ferlione

Portfolio comercial de Ferlione, una agencia de desarrollo web para negocios y profesionales.

La primera versión presenta la propuesta, los servicios, el proceso, casos conceptuales y un flujo de contacto preparado para conectar con un endpoint.

## Stack

- Astro con TypeScript estricto
- Bun como runtime, gestor de paquetes y test runner
- Tailwind CSS para estilos
- Biome para formato y linting
- MDX y Content Collections como base para contenido futuro
- Vercel como destino de despliegue estático

## Desarrollo local

Requiere Bun 1.3 o compatible.

```bash
bun install
bun run dev
```

## Comprobaciones

```bash
bun run check
bun run lint
bun run typecheck
bun test
bun run build
```

También se puede ejecutar todo con `bun run validate`.

## Estado del MVP

Los casos mostrados en `/trabajo/` son conceptuales y están marcados como tales. El formulario valida y muestra el estado de envío en el navegador, pero todavía no envía emails ni guarda leads. Para eso habrá que definir el proveedor y las variables de entorno antes de publicar.

Consulta [AGENTS.md](AGENTS.md) y [CONTRIBUTING.md](CONTRIBUTING.md) antes de trabajar en otra rama.
