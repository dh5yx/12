/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-05 13:53:09
 * @LastEditors: dh
 * @LastEditTime: 2022-08-11 15:00:04
 */
import { ElLoading } from "element-plus";

/* 全局请求 loading(服务方式调用) */
let loadingInstance: ReturnType<typeof ElLoading.service>;
let closeTimer: number;

const startLoading = () => {
	loadingInstance = ElLoading.service({
		fullscreen: true,
		lock: true,
		text: "Loading",
		background: "rgba(0, 0, 0, 0.7)",
	});
};
const endLoading = () => {
	loadingInstance.close();
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
