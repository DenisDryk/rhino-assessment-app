# Setup instructions

This monorepository was created using `pnpm` and `Turborepo`.

### Prerequisites

- [PNPM](https://pnpm.io/installation)
- [Turborepo](https://turborepo.com/docs/getting-started/installation)

## Installation

To install all required dependencies, run the following command in the root directory:

```bash
pnpm i
```

## ENV

Before running the `apps` ensure to rename `example.env` file to `.env`.

## Development

To start all projects in development mode, run:

```bash
turbo dev
```

- **project-a** app is going to be available on `http://localhost:3001`;
- **project-b** app is going to be available on `http://localhost:3002`;
- **shared-ui** package can be modified and the changes are going to be applied to apps.
  - for this package storybook env implemented.

## Linting

To check all projects with ESLint, execute:

```bash
turbo lint
```

## Testing

To run all tests across the monorepo, use:

```bash
turbo test
```

**You can also run specific commands within individual projects as needed.**

# Architecture decisions and trade-offs

The project is structured as a **monorepository** containing two main applications located in the `apps` directory and several shared modules located in the `packages` directory.

- The `apps` directory includes independent projects that represent separate applications within the system.
- The `packages` directory contains shared modules that are used across these applications.

The shared packages include:

- **Reusable variables and types** — to ensure consistency and reduce code duplication.
- **Common UI components** — to maintain a unified design system across applications.
- **Configuration packages** for **ESLint**, **Prettier**, and **TypeScript** — to centralize project standards and simplify maintenance.

## Trade-offs

### Pros:

- Simplifies dependency management and code sharing between projects.
- Ensures consistent coding standards and configurations across the repository.
- Easier refactoring and coordinated updates of shared logic.

### Cons:

- Increases initial setup complexity.
- Requires additional tooling (e.g., Turborepo, pnpm workspaces) to manage dependencies and build pipelines efficiently.
- Changes in shared packages can potentially affect multiple projects simultaneously, requiring careful version control and testing.
