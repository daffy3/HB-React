import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // SCSS 전역에서 사용할 수 있도록 자동 Import
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/main.scss";`,
            },
        },
    },
});
