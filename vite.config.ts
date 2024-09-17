import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ tsconfigPath: "./tsconfig.build.json" })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "LaserEyesModal",
      fileName: "lasereyes-modal-vue",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
