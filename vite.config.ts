/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-04-14 12:02:37
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
            views: resolve(__dirname, 'src/views'), // 设置 views 指向 `views` 目录
        },
    },
    base: './', // 设置打包路径
    server: {
        port: 4000,
        open: false,
        cors: true, // 允许跨域
        // proxy: {
        //   '/api': {
        //     target: 'http://xxx.xxx.xxx.xxx:8000',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace('/api/', '/')
        //   }
        // }
    },
    build: {
        outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
        terserOptions: {
            compress: {
                keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                drop_console: true, // 生产环境去除 console
                drop_debugger: true, // 生产环境去除 debugger
            },
        },
        chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
    css: {
        preprocessorOptions: {
            // 添加公共样式
            scss: {
                // additionalData: '@import "./src/style/style.scss";',
                // additionalData: '$primary: #993300'
            },
        },
    },
});
