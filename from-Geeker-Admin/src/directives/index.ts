/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:11
 * @LastEditors: dh
 * @LastEditTime: 2022-08-11 11:13:27
 */
import type { App } from "vue";
import copy from "./modules/copy";
import watermark from "./modules/watermark";
import draggable from "./modules/draggable";
import debounce from "./modules/debounce";
import throttle from "./modules/throttle";
import longpress from "./modules/longpress";

const directivesList: any = {
	copy,
	watermark,
	draggable,
	debounce,
	throttle,
	longpress,
};

export default {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach((key: string) => {
			app.directive(key, directivesList[key]);
		});
	},
};
