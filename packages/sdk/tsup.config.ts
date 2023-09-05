import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src'],
  legacyOutput: true,
  tsconfig: 'tsconfig.build.json',
});
