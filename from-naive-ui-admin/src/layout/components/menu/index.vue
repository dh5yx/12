<template>
	<n-menu
		:accordion="true"
		:inverted="inverted"
		:value="selectedKeys"
		:options="menuOptions"
		:collapsed="isCollapse"
		:collapsed-width="64"
		:collapsed-icon-size="22"
		:indent="24"
		:expanded-keys="openKeys"
		:on-update:value="changeMenu"
		:on-update:expanded-keys="expandedMenu"
	/>
</template>
<script setup lang="ts">
import routerArray from "@/router/routes";
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/index";
import { useLayoutSettingStore } from "@/stores/modules/layoutSetting";

import { renderIcon } from "@/utils/index";
import type { RouteRecordRaw } from "vue-router";
import type { MenuOption } from "naive-ui";

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();
const layoutSetting = useLayoutSettingStore();

const menuOptions = ref<MenuOption[]>([]);
const openKeys = ref(route.matched.map(v => v.name));

const selectedKeys = computed(() => {
	// 处理隐藏菜单激活问题
	const activeMenu = route.meta?.activeMenu || "";
	return activeMenu ? activeMenu : route.name;
});
const isCollapse = computed(() => globalStore.isCollapse);
const inverted = computed(() => ["dark", "header-dark"].includes(layoutSetting.navTheme));

watch(
	() => route.fullPath,
	() => {
		openKeys.value = route.matched.map(v => v.name);
	}
);

// * 根据路由过滤为菜单
const filterMenu = (route: Array<RouteRecordRaw & RouteItem>): any => {
	// 过滤需要隐藏的菜单
	const menuOptions = route.filter(v => !v.meta?.hidden);
	return menuOptions.map(v => {
		if (v.children && v.children.length) {
			if (!v.meta?.root) {
				v.children = filterMenu(v.children);
			} else {
				v.meta = v.children[0].meta;
				delete v.children;
			}
		}
		return {
			label: v.meta && v.meta.title,
			// icon: v.meta?.icon,
			icon: v.meta?.icon ? renderIcon(v.meta?.icon as string) : null,
			key: v.name,
			children: v.children as any,
		};
	});
};

// * 点击跳转路由
const changeMenu = (name: string) => {
	router.push({ name });
};

// * 展开菜单
const expandedMenu = (keys: string[]) => {
	openKeys.value = keys;
};

const watchWidth = () => {
	const width = document.body.offsetWidth;
	globalStore.$patch({ isCollapse: width < 900 });
};

onMounted(() => {
	menuOptions.value = filterMenu(JSON.parse(JSON.stringify(routerArray)));
	window.addEventListener("resize", watchWidth);
});
</script>

<style scoped></style>
