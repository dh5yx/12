/*
 * @Description:事件监听
 * @Author: dh
 * @Date: 2022-07-21 10:32:37
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:10
 */
interface HTMLElementPlus extends HTMLElement {
	[ket: string]: any;
}
export const EventUtils = {
	// 视能力分别使用dom0||dom2||IE方式 来绑定事件
	// 添加事件
	addEvent: function (element: HTMLElementPlus, type: string, handler: any) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},

	// 移除事件
	removeEvent: function (element: HTMLElementPlus, type: string, handler: any) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},

	// 获取事件目标
	getTarget: function (event: Event) {
		return event.target || event.srcElement;
	},

	// 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
	getEvent: function (event: Event) {
		return event || window.event;
	},

	// 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
	stopPropagation: function (event: Event) {
		if (event.stopPropagation) {
			// W3C标准：取消事件冒泡、
			event.stopPropagation();
		} else {
			// IE独有：取消事件冒泡、
			event.cancelBubble = true;
		}
	},

	// 取消事件的默认行为
	preventDefault: function (event: Event) {
		if (event.preventDefault) {
			// W3C标准：取消右键菜单
			event.preventDefault();
		} else {
			// IE独有：取消右键菜单
			event.returnValue = false;
		}
	},
};
