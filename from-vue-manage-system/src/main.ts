import { createApp } from 'vue';
import pinia from './stores';
import App from './App.vue';
import router from './router';

// css
import '@/styles/index.scss';

const app = createApp(App);

app.use(router).use(pinia).mount('#app');
