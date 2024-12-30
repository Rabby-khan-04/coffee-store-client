import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1":
        "https://coffee-store-server-ctvjd4aeh-rabbykhan04s-projects.vercel.app",
    },
  },
  plugins: [react()],
});
