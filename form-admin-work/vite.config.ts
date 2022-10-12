import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue", { "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"] }],
        }),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
        alias({
            entries: [{ find: "@", replacement: path.resolve(projectRootDir, "src") }],
        }),
        resolve(),
    ],
});
