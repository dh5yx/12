/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 16:11:57
 */
// import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import type { ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import { resolve } from "path";
// https://vitejs.dev/config/

export default function (config: ConfigEnv) {
	const { mode } = config;
	return defineConfig({
		plugins: [vue(), vueJsx(), VueSetupExtend()],
		resolve: {
			alias: {
				// "@": fileURLToPath(new URL("./src", import.meta.url)),
				"@": resolve(__dirname, "./src"),
				"vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
			},
		},
		server: {
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ""),
				},
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/styles/variable.scss";`,
				},
			},
		},
		//  打包去除 console.log && debugger
		esbuild: {
			pure: mode === "production" ? ["console.log", "debugger"] : [],
		},
		build: {
			outDir: "dist",
			// esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
			minify: "esbuild",
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
				},
			},
		},
	});
}
