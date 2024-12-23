import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

//This configuration file, based on the example from this repository 
// https://github.com/sw1tch3roo/single-spa-example-service/blob/systemjs/vite.config.ts , was adapted for use in this project.
// The original example is described in detail in this article on Habr: https://habr.com/ru/articles/826590/ ."

// External dependencies that will not be bundled but loaded from external sources.
const externalDependencies = [
  `react`,
  `react-dom`,
  `react-router-dom`,
  `react-router`,
]

const plugins = [
  react(),
  svgr({
    svgrOptions: {
      exportType: `named`,
      ref: true,
      svgo: false,
      titleProp: true,
    },
    include: `**/*.svg?react`,
  }),
]

// Export Vite configuration
export default defineConfig({
  base: `http://localhost:3001/`, // Base URL for the app, useful for modular microfrontend hosting.
  plugins: plugins,
  server: {
    port: 3001, // Specifies the local development server's port.
    strictPort: true, // Prevents switching to another port if 3001 is already in use.
  },
  resolve: {
    alias: [
      {
        find: `@`, // Allows importing files using `@` as shorthand for `/src`.
        replacement: `/src`,
      },
    ],
  },
  build: {
    cssCodeSplit: true,
    assetsDir: `assets`,
    rollupOptions: {
      input: `src/main.tsx`, // Entry point for the application.
      external: externalDependencies, // Excludes external dependencies from the bundle.
      output: {
        entryFileNames: `main.js`, // Name of the generated JS file.
        format: `system`, // Uses SystemJS module format for compatibility with Single-SPA.
      },
      preserveEntrySignatures: `strict`,
    },
  },
})
