import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      commonjs(),
      peerDepsExternal(),
      postcss(),
      resolve(),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      del({ targets: 'build/*' })
    ]
  },
  {
    input: 'build/esm/types/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/]
  }
];
