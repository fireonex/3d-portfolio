import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: ["fireonex.com", "www.fireonex.com"],
  },
});
