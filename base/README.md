### 创建项目

```js
//这里使用的 vite 方式创建,更好的体验构建过程把
npm create vite@latest

//实际还是建议使用 vue 官方方式创建
npm init vue@latest

// 安转依赖
pnpm i
```

### 集成配置

```js
// 保证node使用
pnpm i @types/node --save-dev
```

### 添加路径别名

```js
// tsconfig.json  让编辑器提示路径
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
    },
}

// vite.config.ts  让框架识别此路径
import * as path from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

```

### 集成 eslint

1. 安装
   ```js
   pnpm i eslint eslint-plugin-vue --save-dev
   pnpm install @typescript-eslint/parser --save-dev
   pnpm install @typescript-eslint/eslint-plugin --save-dev
   ```
2. 创建配置文件：.eslintrc.cjs 或 .eslintrc.js

   ```js
   module.exports = {
   	parser: 'vue-eslint-parser',
   	parserOptions: {
   		parser: '@typescript-eslint/parser',
   		ecmaVersion: 2020,
   		sourceType: 'module',
   		ecmaFeatures: {
   			jsx: true,
   		},
   	},
   	extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
   	rules: {},
   };
   ```

3. 创建忽略文件：.eslintignore

   ```
   node_modules/
   dist/
   index.html
   ```

4. 命令行式运行 : 修改 package.json

   ```json
   {
   	"scripts": {
   		"eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src"
   	}
   }
   ```

> 注意：package.json 是否有 type:"modules" , 会导致 eslint 和 prettier 失效，需要删除

### 集成 prettier

1. 安装

```bash
pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

2. 创建配置文件： prettier.config.js 或 .prettierrc.js

```js
module.exports = {
	// 超过最大值换行
	printWidth: 150,
	// 缩进字节数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 结尾不用分号(true有，false没有)
	semi: true,
	// 使用单引号(true单引号，false双引号)
	singleQuote: true,
	// 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	bracketSpacing: true,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: 'es5',
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
	arrowParens: 'avoid',
	// 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
	htmlWhitespaceSensitivity: 'css',
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: 'lf',
	// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false,
};
```

3. 修改 .eslintrc.js 配置,解决 eslint 和 prettier 互相干扰，以 prettier 为准

```js
module.exports = {
	extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
};
```

4. 命令行式运行：修改 package.json

```json
{
	"scripts": {
		"prettier": "prettier --write ."
	}
}
```

### 集成 .editorconfig

添加 .editorconfig ，不过 有些配置 和 prettier eslint 可能会有一些冲突，比如最大换行，这里以prettier：150为准

### 集成 pinia

1. 安装

```bash
pnpm i pinia --save
```

2. 实例化

```js
// store/index.ts 实例化 pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
export default pinia;

// store/modules/* 定义模块化存储
import { defineStore } from 'pinia';
export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({}),
	getters: {},
	actions: {},
});
```

3. 使用

```js
// main.ts 使用pinia
import Pinia from '@/store/index';
app.use(Pinia);
```

### 集成 vue-router4

1. 安装

```bash
 pnpm i vue-router -S
```

2. 实例化

```js
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		meta: {},
		component: () => import('@/pages/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
```

3. 引入

```js
// main.ts
import router from '@/router/index';
app.use(router);
```

### 集成 vueuse

1. 安装

```bash
 pnpm i @vueuse/core -S
```

### 集成 sass

1. 安装

```bash
pnpm i sass -D
```

2. 引入全局变量

```js
// vite.config.js
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/variable.scss";',
			},
		},
	},
});
```
