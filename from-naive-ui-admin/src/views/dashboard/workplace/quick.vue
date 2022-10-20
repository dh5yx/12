<template>
	<n-card title="快捷操作" :bordered="false" size="small" content-style="padding: 0;">
		<div class="flex flex-wrap">
			<n-card size="small" class="cursor-pointer ms:w-1/2 md:w-1/3" v-for="item in list" :key="item.name" hoverable>
				<div class="text-center">
					<div>
						<n-icon size="30" :color="item.color">
							<component :is="item.icon"></component>
						</n-icon>
					</div>
					<div>{{ item.name }}</div>
				</div>
			</n-card>
		</div>
	</n-card>
</template>

<script setup lang="ts">
import { renderIcon } from '@/utils/index';
import { ref } from 'vue';
import type { Component } from 'vue';

interface ListItem {
	name: string;
	icon: Component;
	color?: string;
}
const list = ref<Array<ListItem>>([
	{
		name: '主控台',
		icon: renderIcon('DashboardOutlined'),
		color: '#68c755',
	},
	{
		name: '列表',
		icon: renderIcon('ProfileOutlined'),
		color: '#fab251',
	},
	{
		name: '表单',
		icon: renderIcon('FileProtectOutlined'),
		color: '#1890ff',
	},
	{
		name: '权限管理',
		icon: renderIcon('ApartmentOutlined'),
		color: '#f06b96',
	},
	{
		name: '系统管理',
		icon: renderIcon('SettingOutlined'),
		color: '#7238d1',
	},
	{
		name: '主控台',
		icon: renderIcon('DashboardOutlined'),
	},
]);
</script>

<style lang="scss" scoped></style>
