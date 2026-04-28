import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Updated for Brazil repository name
  base: "/quran-site-brazil/",
});
