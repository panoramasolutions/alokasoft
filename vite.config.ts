
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0', // Allows external connections (e.g., from mobile)
    port: 3000,      // Change port to 3000
  },
  plugins: [react()],
  //publicDir: "./static",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  base:"/",
  publicDir: "public",
}));
