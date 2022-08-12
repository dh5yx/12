/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-11 15:05:48
 * @LastEditors: dh
 * @LastEditTime: 2022-08-11 15:06:44
 */
import { createI18n } from "vue-i18n";
import zh from "./modules/zh";
import en from "./modules/en";

const i18n = createI18n({
	legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
	locale: "zh", // 设置语言类型
	globalInjection: true, // 全局注册$t方法
	messages: {
		zh,
		en,
	},
});

export default i18n;
