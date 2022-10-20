/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-05 13:53:09
 * @LastEditors: dh
 * @LastEditTime: 2022-10-20 15:31:24
 */

import { useGlobalStore } from '@/stores/index';

const globalStore = useGlobalStore();

let closeTimer: number;

const startLoading = () => {
	globalStore.loading = true;
};
const endLoading = () => {
	globalStore.loading = false;
};

let needLoadingRequestCount = 0;
export const showFullScreenLoading = () => {
	if (needLoadingRequestCount === 0) {
		clearTimeout(closeTimer);
		startLoading();
	}
	needLoadingRequestCount++;
};

export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		// 这里延迟关闭，可能会有 某个接口请求完，再请求其他接口，比如，删除后再获取列表
		closeTimer = window.setTimeout(() => {
			endLoading();
		}, 200);
	}
};
