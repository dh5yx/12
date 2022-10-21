/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:44:10
 * @LastEditors: dh
 * @LastEditTime: 2022-08-11 14:59:59
 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 500, // 递增进度条的速度
	showSpinner: true, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 初始化时的最小百分比
});
export default NProgress;
