import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import en from './modules/en';

const i18n = createI18n({
	legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
	locale: 'zh', // set locale 设置当前语言
	fallbackLocale: 'en', // set fallback locale  失败的回退语言
	messages: { zh, en }, // set locale messages
});

export default i18n;
