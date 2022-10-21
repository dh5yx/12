/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 14:24:56
 */
import { createApp } from 'vue';
import App from './App.vue';

// * css
import './styles/index.scss';

// * vue-router
import router from '@/router/index';

// * pinia
import Pinia from '@/store/index';

const app = createApp(App);

app.use(router);
app.use(Pinia);
app.mount('#app');
