import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		electron({
			main: {
				entry: 'electron/index.ts',
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
