import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    plugins: [react(), svgr()],
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
