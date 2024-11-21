import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

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

export default defineConfig({
  base: `http://localhost:3001/`,
  plugins: plugins,
  server: {
    port: 3001,
    strictPort: true,
  },
  resolve: {
    alias: [
      {
        find: `@`,
        replacement: `/src`,
      },
    ],
  },
  build: {
    cssCodeSplit: true,
    assetsDir: `assets`,
    rollupOptions: {
      input: `src/main.tsx`,
      external: externalDependencies,
      output: {
        entryFileNames: `main.js`,
        format: `system`,
      },
      preserveEntrySignatures: `strict`,
    },
  },
})
