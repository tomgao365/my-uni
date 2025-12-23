import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'node16.14',
  outDir: 'dist',
  clean: true,
  dts: true,
})
