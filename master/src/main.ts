/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-12-28 15:52:29
 */
import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

console.log(import.meta.env);

const app = createApp(App);

// app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
