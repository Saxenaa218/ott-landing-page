import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": `${path.resolve(__dirname, "./src/api/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@state": `${path.resolve(__dirname, "./src/state/")}`,
      "@common": `${path.resolve(__dirname, "./src/common/")}`,
    },
  },
});
