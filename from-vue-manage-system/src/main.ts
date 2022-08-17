import { createApp } from 'vue';
import pinia from './stores';
import App from './App.vue';
import router from './router';

// css
import '@/styles/index.scss';
// element
import ElementPlus from 'element-plus';
// vue-i18n@9
import i18n from '@/language/index';
// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.use(router).use(ElementPlus).use(pinia).use(i18n).mount('#app');
