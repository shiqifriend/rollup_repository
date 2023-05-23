import TypescriptPlugin from "@rollup/plugin-typescript";
import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import DtsPlugin from "rollup-plugin-dts";

const PLUGINS = [NodeResolvePlugin(), CommonjsPlugin(), TypescriptPlugin()];

export default [
  {
    input: "src/web.ts",
    output: { file: "dist/web.js", format: "cjs" },
    plugins: PLUGINS,
  },
  {
    input: "src/web.ts",
    output: { file: "dist/web.esm.js", format: "esm" },
    plugins: PLUGINS,
  },
  {
    input: "src/web.umd.ts",
    output: { file: "dist/web.umd.js", format: "umd", name: "BruceUs" },
    plugins: PLUGINS,
  },
  {
    input: "src/node.ts",
    output: { file: "dist/node.js", format: "cjs" },
    plugins: PLUGINS,
  },
  {
    input: "src/node.ts",
    output: { file: "dist/node.esm.js", format: "esm" },
    plugins: PLUGINS,
  },
  {
    input: "src/index.ts",
    output: { file: "dist/index.d.ts", format: "esm" },
    plugins: [DtsPlugin()],
  },
];
