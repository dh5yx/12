<template>
	<n-layout class="layout" has-sider :class="{ 'default-bg': !isDarkTheme }">
		<!-- :inverted="isDarkTheme" -->
		<n-layout-sider class="layout-menu" :width="leftMenuWidth" :native-scrollbar="false" :inverted="invertedSide">
			<Logo />
			<Menu />
		</n-layout-sider>
		<n-layout class="right-layout">
			<n-layout-header class="layout-header" :inverted="invertedHeader" :position="fixedHeader">
				<Header />
				<div class="layout-tabs">
					<Tabs v-if="showTabs" />
				</div>
			</n-layout-header>
			<n-layout-content :class="{ 'content-box-fix': fixedHeader !== 'static' }">
				<!-- <Tabs v-if="showTabs" /> -->
				<div class="content-box">
					<router-view>
						<template #default="{ Component, route }">
							<component :is="Component" :key="route.fullPath" />
						</template>
					</router-view>
				</div>
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>
<script setup lang="ts">
import Logo from './components/logo/index.vue';
import Menu from './components/menu/index.vue';
import Header from './components/header/index.vue';
import Tabs from './components/tabs/index.vue';
// import useLayoutSetting from "@/hook/useLayoutSetting";
import { useLoadingBar, useMessage } from 'naive-ui';
import { computed, unref } from 'vue';
import { useGlobalStore } from '@/stores/index';
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting';

window.$message = useMessage();
window.$loading = useLoadingBar();

const globalStore = useGlobalStore();
const layoutSettingStore = useLayoutSettingStore();

const leftMenuWidth = computed(() => {
	const { minMenuWidth, menuWidth } = unref(layoutSettingStore.menuSetting);
	return globalStore.isCollapse ? minMenuWidth : menuWidth;
});
const isDarkTheme = computed(() => layoutSettingStore.isDarkTheme);
const invertedSide = computed(() => ['dark', 'header-dark'].includes(layoutSettingStore.navTheme));
const invertedHeader = computed(() => ['header-dark'].includes(layoutSettingStore.navTheme));
const showTabs = computed(() => layoutSettingStore.multiTabsSetting.show);
const fixedHeader = computed(() => (layoutSettingStore.headerSetting.fixed ? 'absolute' : 'static'));
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
	.layout-menu {
		transition: all 0.3s;
		box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
	}
}
.right-layout {
	.n-layout-header {
		padding: 0 10px;
		z-index: 5;
	}
	.n-layout-sider {
		width: auto;
	}

	.n-layout-content {
		margin: 10px;
		&.content-box-fix {
			margin-top: 120px;
		}
	}
}
.default-bg {
	.right-layout {
		background-color: $bg-color;
	}
	.layout-tabs {
		height: 46px;
		background-color: $bg-color;
		padding: 10px 10px 0;
		margin: 0 -10px;
	}

	:deep(.n-layout-scroll-container) {
		background-color: $bg-color;
	}
	.content-box {
		background: $bg-color;
	}
}
</style>
