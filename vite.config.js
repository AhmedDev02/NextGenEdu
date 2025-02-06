import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),

    eslint({ cache: false }), // ✅ Ensure ESLint is properly initialized
  ],
});
