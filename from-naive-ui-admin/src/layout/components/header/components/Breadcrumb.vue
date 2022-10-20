<template>
	<div class="breadcrumb">
		<n-breadcrumb>
			<template v-for="routeItem in breadcrumbList">
				<n-breadcrumb-item v-if="routeItem.meta.title" :key="routeItem.name">
					<n-dropdown v-if="routeItem.children && routeItem.children.length" :options="routeItem.children" @select="dropdownSelect">
						<n-space>
							<n-icon v-if="showIcon">
								<component :is="routeItem.meta.icon" />
							</n-icon>
							<span>{{ routeItem.meta.title }}</span>
						</n-space>
					</n-dropdown>
					<span v-else> {{ routeItem.title }}</span>
				</n-breadcrumb-item>
			</template>
		</n-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting';
import type { RouteRecordRawItem } from '@/router/routes';

const route = useRoute();
const router = useRouter();
const layoutSettingStore = useLayoutSettingStore();

// 递归处理面包屑
const generator = (routerMap: any) => {
	return routerMap.map((item: RouteRecordRawItem) => {
		const currentMenu = {
			...item,
			title: item.meta.title,
			key: item.path,
			disabled: item.path === '/',
		};
		if (item.children && item.children.length > 0) {
			currentMenu.children = generator(item.children);
		}
		return currentMenu;
	});
};

const breadcrumbList = computed(() => generator(route.matched));
const showIcon = computed(() => layoutSettingStore.crumbsSetting.showIcon);

const dropdownSelect = (path: string) => {
	router.push(path);
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
:deep(.n-breadcrumb .n-breadcrumb-item .n-breadcrumb-item__link) {
	padding: 0;
}
</style>
