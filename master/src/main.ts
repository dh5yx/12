/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-07-21 16:12:57
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import 'element-plus/dist/index.css';
const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
