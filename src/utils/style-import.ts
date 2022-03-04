/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 17:09:24
 * @LastEditors: dh
 * @LastEditTime: 2022-01-20 17:19:31
 */
import { App } from 'vue';
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus';

/**
 * 按需导入 Element Plus 组件
 * Vite 插件 https://github.com/element-plus/vite-plugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
    [ElButton, ElCard, ElLoading, ElIcon].forEach((v) => {
        app.use(v);
    });
    return app;
}
