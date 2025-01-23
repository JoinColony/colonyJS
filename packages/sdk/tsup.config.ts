import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  format: 'esm',
  minify: true,
  noExternal: [/@colony\/.+/],
  outDir: 'dist/prod',
  outExtension() {
    return {
      js: '.min.js',
    };
  },
  target: 'es2022',
  tsconfig: 'tsconfig.json',
});
