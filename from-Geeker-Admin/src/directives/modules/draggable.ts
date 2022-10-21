/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:18
 * @LastEditors: dh
 * @LastEditTime: 2022-07-26 15:43:38
 */
export default {
	mounted(el: HTMLElement) {
		const offsetTop = el.offsetTop;
		const offsetLeft = el.offsetLeft;
		el.style.top = offsetTop + 'px';
		el.style.left = offsetLeft + 'px';
		el.style.position = 'fixed';
		el.onmousedown = function (e) {
			const offsetY = e.offsetY;
			const offsetX = e.offsetX;
			const maxLeft = document.body.clientWidth - el.offsetWidth;
			const maxTop = document.body.clientHeight - el.offsetHeight;
			document.onmousemove = function (e) {
				let top = e.pageY - offsetY;
				let left = e.pageX - offsetX;

				if (left < 0) left = 0;
				if (left >= maxLeft) left = maxLeft;

				if (top < 0) top = 0;
				if (top >= maxTop) top = maxTop;

				el.style.top = top + 'px';
				el.style.left = left + 'px';
			};
			document.onmouseup = function () {
				document.onmousemove = document.onmouseup = null;
			};
		};
	},
};
