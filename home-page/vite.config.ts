import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/trustbuilder-ai-homepage/",
  plugins: [vue()],
  build: {
    outDir: "dist",
  },
});
