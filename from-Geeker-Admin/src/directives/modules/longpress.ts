/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:23:40
 */
import type { DirectiveBinding } from "vue";
import { EventUtils } from "@/utils/eventUtils";

interface ElType extends HTMLElement {
	callback?: Function;
	time?: number;
	timeId?: number | null;
}

function start(this: any) {
	this.timeId = window.setTimeout(() => {
		this.callback.apply(this);
	}, this.time);
}

function end(this: any) {
	window.clearTimeout(this.timeId);
}

export default {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.callback = binding.value;
		el.time = Number(binding.arg);
		el.timeId = null;
		EventUtils.addEvent(el, "mousedown", start);
		EventUtils.addEvent(el, "mouseup", end);
	},
	beforeUnmount(el: ElType) {
		EventUtils.removeEvent(el, "mousedown", start);
		EventUtils.removeEvent(el, "mouseup", end);
	},
};
