import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000
  },
  plugins: [
    react(),
    federation({
      filename: "microfront-app1-entry.js",
      name: "microfront-app1",
      shared: ["react", "react-dom", "react-router-dom"],
      remotes: {
        app1: "http://localhost:5001/dist/assets/microfront-app1-entry.js",
      }
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
