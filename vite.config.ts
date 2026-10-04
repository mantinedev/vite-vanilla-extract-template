import { defineConfig } from "vite-plus";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";

// https://viteplus.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});
