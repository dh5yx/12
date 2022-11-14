参照 [Naive Ui Admin](https://github.com/jekip/naive-ui-admin) ，手写一次，但不全一样，仅供自己熟悉 v3 和 ts

1. 此项目采用手动按需引入，不方便，可以采用自动按需引人


### 创建项目

```bash
 这里使用的vite方式创建,更好的体验构建过程把,建议使用vue官方方式创建 npm init vue@latest
 npm create vite@latest
```

### 按需引入 naive-ui

```bash
npm i -D naive-ui
```

```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: [
				'vue',
				{
					'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
				},
			],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
	],
});
```

### 添加路径别名

```js
// tsconfig.json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
    },
}

// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        alias({
            entries: [{ find: "@", replacement: path.resolve(projectRootDir, "src") }],
        }),
        resolve(),
    ],
});
```

### 引入路由

```bash
npm install vue-router@4
```

```js
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
const routes = [];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;

// main.ts
import router from '@/router/index';
app.use(router);
```

### 引入 pinia

```bash
npm install pinia
```

```js
// store/index.ts 实例化 pinia
import { createPinia } from "pinia";
const pinia = createPinia();
export default pinia;

// store/modules/* 定义模块化存储
import { defineStore } from "pinia";
export const useCounterStore = defineStore( {
    id:'counter',
    state: () => (),
    getters: {},
    actions: {},
});

// main.ts 使用pinia
import Pinia from "@/store/index";
app.use(Pinia);
```

### 引入 Eslint

```bash
yarn add eslint --dev
yarn add eslint-plugin-vue --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add eslint-plugin-prettier --dev
yarn add @typescript-eslint/parser --dev
yarn add prettier --dev
yarn add eslint-config-prettier --dev

// 执行
npx eslint --init
```

### 配置全局 scss

```js
export default defineConfig({
css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "./src/assets/styles/variables.scss";'
      }
    }
})
```

<!-- pnpm i @types/node --save-dev -->

### 引入 tailwindcss

```bash
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```js
// postcss.config.js
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

```

```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
