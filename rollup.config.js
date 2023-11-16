import typescript from '@rollup/plugin-typescript';
import * as d from "rollup-plugin-dts";

const config = [
  {
    input: 'build/src/index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['axios', 'form-data'],
    plugins: [typescript({ declaration: false })]
  }, 
  {
    input: 'build/src/index.js',
    output: {
      file: 'dist/mjs/index.js',
      format: 'es',
      sourcemap: true,
    },
    external: ['axios', 'form-data'],
    plugins: [typescript({ declaration: false })]
  },
  {
    input: 'build/src/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [d.dts()]
  }
];

export default config;