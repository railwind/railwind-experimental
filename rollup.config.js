/* eslint-disable @typescript-eslint/no-var-requires */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extensions: ['.css'],
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: 'src/railwind.js',
    output: [
      {
        file: 'dist/railwind.js',
        format: 'cjs',
        sourcemap: false,
        exports: 'auto',
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), terser()],
  },
];
