/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:23:36
 */
import type { DirectiveBinding } from 'vue';
import { ElMessage } from 'element-plus';
import { EventUtils } from '@/utils/eventUtils';

interface ElType extends HTMLElement {
	copyData: string | number;
}

function handelCopy(this: any) {
	const textarea = document.createElement('textarea');
	textarea.value = this.copyData.toString();
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	ElMessage.success({
		message: 'ok',
	});
}

export default {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
		EventUtils.addEvent(el, 'click', handelCopy);
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: ElType) {
		EventUtils.removeEvent(el, 'click', handelCopy);
	},
};
