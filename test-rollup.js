import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/App.tsx", // Entry file for your component
  output: {
    file: "dist/bundle.js", // Output file path and name
    format: "cjs", // Output format (CommonJS)
    sourcemap: true, // Generate sourcemaps for better debugging
    exports: "named" // Named exports
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json", // Path to your tsconfig.json
      sourceMap: true,
      declaration: true
    }),
    resolve(), // Resolve npm module imports
    commonjs(), // Convert CommonJS modules to ES6
    babel({ babelHelpers: "bundled" }) // Add the babel plugin
  ],
  external: ["react", "react-dom"] // Specify external dependencies
};
