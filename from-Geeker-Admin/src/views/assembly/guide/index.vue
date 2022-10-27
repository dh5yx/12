<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 09:54:38
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:17:25
-->
<template>
	<div>
		<el-alert
			title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."
			type="warning"
			:closable="false"
		>
		</el-alert>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css'; // import driver.js css
const steps = [
	{
		element: '#collapseIcon',
		popover: {
			title: '菜单收缩',
			description: '点击咱开收缩菜单栏',
			position: 'right',
		},
		padding: 10,
		offset: 20,
	},
	{
		element: '#breadcrumb',
		popover: {
			title: '面包屑',
			description: '展示菜单层级',
			position: 'right',
		},
		padding: 10,
		offset: 20,
	},
	{
		element: '#globalSize',
		popover: {
			title: '组件大小',
			description: '控制全局组件的大小',
			position: 'left',
		},
		padding: 10,
		offset: 20,
	},
	{
		element: '#globalLocale',
		popover: {
			title: '语言',
			description: '国际化',
			position: 'left',
		},
		padding: 10,
		offset: 20,
	},
];
const driver: Driver = new Driver({
	allowClose: false,
	doneBtnText: '结束',
	closeBtnText: '关闭',
	nextBtnText: '下一步',
	prevBtnText: '上一步',
});
onMounted(() => {
	driver.defineSteps(steps);
	driver.start();
});
</script>

<style scoped></style>
