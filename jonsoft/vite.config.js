import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    plugins: [react()],
    optimizeDeps: {
        exclude: ["react-router-dom"],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern",
            },
        },
    },
});
