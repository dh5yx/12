/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-11-17 15:32:50
 */
import { createApp } from 'vue';

import App from './App.vue';
// css
import '@/assets/styles/index.scss';
// iconfont
import '@/assets/iconfont/iconfont.scss';
// font
import '@/assets/fonts/font.scss';
// directives
import directives from './directives';
// pinia
import pinia from '@/stores/index';
// router
import router from '@/router';
// element-plus
import ElementPlus from 'element-plus';
// element icons
import * as Icons from '@element-plus/icons-vue';
// vue i18n
import I18n from '@/language/index';

const app = createApp(App);

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(I18n).use(pinia).use(ElementPlus).use(directives).mount('#app');
