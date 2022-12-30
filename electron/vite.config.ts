import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';
import electronRender from 'vite-plugin-electron-renderer';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		electronRender(),
		electron({
			main: {
				entry: 'electrons/index.ts',
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
