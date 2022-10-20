<template>
	<n-grid cols="1 s:2 m:3 l:8 xl:8 2xl:8" responsive="screen" :x-gap="16" :y-gap="16">
		<n-grid-item v-for="item in iconList" :key="item.title">
			<n-card size="small" style="text-align: center">
				<n-icon :size="item.size" :color="item.color">
					<component :is="item.icon" v-on="item.eventObject || {}" />
				</n-icon>
				<p>{{ item.title }}</p>
			</n-card>
		</n-grid-item>
	</n-grid>
</template>

<script setup lang="ts">
import { renderIcon } from '@/utils/index';
const iconList = [
	{
		icon: renderIcon('UsergroupAddOutlined'),
		size: '32',
		title: '用户',
		color: '#69c0ff',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('BarChartOutlined'),
		size: '32',
		title: '分析',
		color: '#69c0ff',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('ShoppingCartOutlined'),
		size: '32',
		title: '商品',
		color: '#ff9c6e',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('AccountBookOutlined'),
		size: '32',
		title: '订单',
		color: '#b37feb',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('CreditCardOutlined'),
		size: '32',
		title: '票据',
		color: '#ffd666',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('MailOutlined'),
		size: '32',
		title: '消息',
		color: '#5cdbd3',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('TagsOutlined'),
		size: '32',
		title: '标签',
		color: '#ff85c0',
		eventObject: {
			click: () => {},
		},
	},
	{
		icon: renderIcon('SettingOutlined'),
		size: '32',
		title: '配置',
		color: '#ffc069',
		eventObject: {
			click: () => {},
		},
	},
];
</script>

<style lang="scss" scoped></style>
