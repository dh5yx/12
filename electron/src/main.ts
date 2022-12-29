import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';

console.log(process.env);

const app = createApp(App);
app.use(router);
app.mount('#app');
