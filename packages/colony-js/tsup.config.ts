import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: false,
  entry: ['src'],
  legacyOutput: true,
  tsconfig: 'tsconfig.build.json',
});
