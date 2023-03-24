import commonjs from "@rollup/plugin-commonjs";
import dts from 'rollup-plugin-dts';
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import url from '@rollup/plugin-url';

import pkg from './package.json' assert {type: 'json'};

const config = [
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
                name: 'comp0nents'
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            url(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "types",
                exclude: ["**/*.test.*", "**/*.stories.*", "./src/test-utils/*", "./src/setupTests.ts", "./src/react-app-env.d.ts", "./dist/**/*"],
            }),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    }
];

export default config;
