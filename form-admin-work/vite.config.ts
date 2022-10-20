import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
    plugins: [
        vue(),
        VueSetupExtend(),
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
    css:{
        preprocessorOptions:{
          scss:{
            additionalData:'@import "./src/styles/variables.scss";'
          }
        }
    },
});
