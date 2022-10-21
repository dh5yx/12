/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:23:58
 */
import type { DirectiveBinding } from 'vue';

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const { color = '#ccc', fontSize = '30px', text = 'canvas' } = binding.value || {};
		const canvas = document.createElement('canvas') as HTMLCanvasElement;
		canvas.height = 150;
		canvas.width = 200;
		canvas.style.border = '1px solid red';
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		ctx.font = `bold ${fontSize} 宋体`;
		ctx.textAlign = 'start';
		ctx.fillStyle = color;
		ctx.rotate((-20 * Math.PI) / 180);
		ctx.fillText(text, 10, 100);
		el.style.background = `url(${canvas.toDataURL('image/png')})`;
	},
};
