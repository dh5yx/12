### 创建项目

```js
 npm create vite@latest
```

### 按需引入 naive-ui

```js
npm i -D naive-ui

// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ imports: ['vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
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
