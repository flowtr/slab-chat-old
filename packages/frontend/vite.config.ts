import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import windicss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), tsconfigPaths(), windicss()],
  resolve: {
    alias: {
      "@/": "src/",
      react: "preact/compat",
      "react-dom": "preact/compat"
    }
  }
});
