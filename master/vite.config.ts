/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-08-16 17:19:51
 */
import { defineConfig, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
// import styleImport from 'vite-plugin-style-import';
export default defineConfig((config: ConfigEnv) => {
    const { mode, command } = config;
    const env = loadEnv(mode, process.cwd());
    console.log(env, command);
    if (command === 'serve') {
        // dev 独有配置
    } else {
        // command === 'build'
        // build 独有配置
    }
    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            // styleImport({
            //     libs: [
            //         {
            //             libraryName: 'element-plus',
            //             esModule: true,
            //             resolveStyle: (name) => {
            //                 // 解决引入element-plus中文css不存在问题
            //                 // if (name === 'locale') {
            //                 //     return 'element-plus/lib/theme-chalk/el-option.css';
            //                 // }
            //                 return `element-plus/lib/theme-chalk/${name}.css`;
            //             },
            //             ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
            //         }
            //     ]
            // }
        ],
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
    };
});
