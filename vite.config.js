import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import glb from "vite-plugin-glb";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ fastRefresh: false })],
	assetsInclude: ["**/*.glb"],
});
