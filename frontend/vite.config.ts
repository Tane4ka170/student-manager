import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigpaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths(), svgr()],
});
