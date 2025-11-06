# Get Started

## Installation

To install the dependencies for this project, run the following command:

```bash
pnpm i
```

## Usage

### Building Styles

To build the styles for your project using Tailwind CSS, run the following command:

```bash
pnpm build:styles
```

This will generate the CSS file in the dist directory based on the styles defined in src/styles/styles.css.

### Building Components

```bash
pnpm build:components
```

This will compile the TypeScript files in the `src` directory and generate the corresponding JavaScript files in the `dist` directory.

### Development: Styles

To watch for changes in the styles and automatically update the CSS file using Tailwind CSS, run the following command:

```bash
pnpm dev:styles
```

This will start the Tailwind CSS watcher, which monitors the `src/styles/styles.css` file for changes and updates the `dist/index.css` file accordingly.

### Development: Components

To watch for changes in the components and automatically update the JavaScript files using TypeScript, run the following command:

```bash
pnpm dev:components
```

This will start the TypeScript watcher, which monitors the src directory for changes and updates the dist directory accordingly.

### Linting

To lint the code in the src directory using ESLint, run the following command

```bash
pnpm lint
```

This will analyze the code for any linting errors or warnings and provide suggestions for improvement.

### Testing

To run the tests using Vitest, run the following command:

```bash
pnpm test
```

This will execute the tests defined in your project and provide test coverage reports.

### Development: Test

To run the tests using Vitest in watch mode, run the following command:

```bash
pnpm dev:test
```

This will continuously execute the tests and update the test results as you make changes to your code.

### Development: Storybook

To start the Storybook development server, run the following command:

```bash
pnpm dev:storybook
```

This will start the Storybook server at `http://localhost:6006` and allow you to view and interact with your components.
