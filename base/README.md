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
   ESLint 安装成功后，执行 npx eslint --init，然后按照终端操作提示完成一系列设置来创建配置文件。**但是目前不建议**，直接走下面的流程

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

添加 .editorconfig ，不过 有些配置 和 prettier eslint 可能会有一些冲突，比如最大换行，这里以 prettier：150 为准

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
export const useUserStore = defineStore({
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

// .vue
import { useUserStore } from '@/store/index';
const userStore = useUserStore();
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

### 集成 axios

1. 安装

   ```base
   pnpm i axios -S
   ```

2. 实例化

   ```js
   // src/utils/axios.ts
   import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

   const service = axios.create(); // Request interceptors

   service.interceptors.request.use(
   	(config: AxiosRequestConfig) => {
   		// do something
   		return config;
   	},
   	(error: any) => {
   		Promise.reject(error);
   	}
   ); // Response interceptors

   service.interceptors.response.use(
   	(response: AxiosResponse) => {
   		// do something
   		return response;
   	},
   	(error: any) => {
   		// do something
   		return Promise.reject(error);
   	}
   );

   export default service;
   ```

### [集成 vueuse](https://vueuse.org/)

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

### 使用 commitizen 规范 git 提交

具体实现 在 主项目 里面

1.  安装
    ```bash
    pnpm install -D commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
    ```
2.  配置

    ```js
    // package.json
    {
    	"scripts": {
    		"commit:comment": "引导设置规范化的提交信息",
    		"commit": "git-cz"
    	},

    	"config": {
    		"commitizen": {
    			"path": "node_modules/cz-customizable"
    		}
    	}
    }
    ```

    ```js
    // commitlint.config.js
    module.exports = {
    	extends: ['@commitlint/config-conventional', 'cz'],
    	rules: {
    		'type-enum': [
    			2,
    			'always',
    			[
    				'feature', // 新功能（feature）
    				'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
    				'fix', // 修补bug
    				'ui', // 更新 ui
    				'docs', // 文档（documentation）
    				'style', // 格式（不影响代码运行的变动）
    				'perf', // 性能优化
    				'release', // 发布
    				'deploy', // 部署
    				'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
    				'test', // 增加测试
    				'chore', // 构建过程或辅助工具的变动
    				'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
    				'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
    				'build', // 打包
    			],
    		],
    		// <type> 格式 小写
    		'type-case': [2, 'always', 'lower-case'],
    		// <type> 不能为空
    		'type-empty': [2, 'never'],
    		// <scope> 范围不能为空
    		'scope-empty': [2, 'never'],
    		// <scope> 范围格式
    		'scope-case': [0],
    		// <subject> 主要 message 不能为空
    		'subject-empty': [2, 'never'],
    		// <subject> 以什么为结束标志，禁用
    		'subject-full-stop': [0, 'never'],
    		// <subject> 格式，禁用
    		'subject-case': [0, 'never'],
    		// <body> 以空行开头
    		'body-leading-blank': [1, 'always'],
    		'header-max-length': [0, 'always', 72],
    	},
    };
    ```

    ```js
    // .cz-config.js 自定义提示则添加
    module.exports = {
    	types: [
    		{ value: 'feature', name: 'feature:  增加新功能' },
    		{ value: 'bug', name: 'bug:      测试反馈bug列表中的bug号' },
    		{ value: 'fix', name: 'fix:      修复bug' },
    		{ value: 'ui', name: 'ui:       更新UI' },
    		{ value: 'docs', name: 'docs:     文档变更' },
    		{ value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    		{ value: 'perf', name: 'perf:     性能优化' },
    		{ value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    		{ value: 'release', name: 'release:  发布' },
    		{ value: 'deploy', name: 'deploy:   部署' },
    		{ value: 'test', name: 'test:     增加测试' },
    		{ value: 'chore', name: 'chore:    构建过程或辅助工具的变动(更改配置文件)' },
    		{ value: 'revert', name: 'revert:   回退' },
    		{ value: 'build', name: 'build:    打包' },
    	],
    	// override the messages, defaults are as follows
    	messages: {
    		type: '请选择提交类型:',
    		customScope: '请输入您修改的范围(可选):',
    		subject: '请简要描述提交 message (必填):',
    		body: '请输入详细描述(可选，待优化去除，跳过即可):',
    		footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    		confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    	},
    	allowCustomScopes: true,
    	skipQuestions: ['body', 'footer'],
    	subjectLimit: 72,
    };
    ```

3.  提交代码
    ```bash
    git add . // 暂存文件
    yarn commit // 规范提交
    git push // 推送
    ```

### 提交前代码检查 husky

具体实现 在 主项目 里面

1. 安装

   ```bash
   # 1.安装  版本差异，用法不同
   pnpm i husky lint-staged@7.0.4 -D

   # 2.生成 .husky 的文件夹
   npx husky install

   # 3.添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件
   npx husky add .husky/pre-commit "npx --no-install lint-staged"

   # 4.添加 commit-msg
   npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

   # 5. 使用 `git commit -m "message"` 就会看到 hook 生效了。
   ```

2. 添加配置 package.json
   ```json
   {
   	"lint-staged": {
   		"*.{js,ts}": ["npm run eslint", "npm run prettier"]
   	}
   }
   ```
