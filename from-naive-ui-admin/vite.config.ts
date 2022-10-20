import { fileURLToPath, URL } from 'node:url';
import pkg from './package.json';
import { format } from 'date-fns';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const { dependencies, devDependencies, name, version } = pkg;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/variable.scss";`,
			},
		},
	},
	// 定义全局变量 ，还需要声明类型，参考vite官网
	define: {
		__APP_INFO__: JSON.stringify({
			pkg: { dependencies, devDependencies, name, version },
			lastBuildTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
		}),
	},
});
