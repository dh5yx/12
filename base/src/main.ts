import { createApp } from 'vue';
import App from './App.vue';

// * css
import './styles/index.scss';
// * router
import router from '@/router/index';
// * Pinia
import Pinia from '@/store/index';

const app = createApp(App);
app.use(Pinia);
app.use(router);
app.mount('#app');
