<template>
	<div class="header">
		<n-space class="header-left" align="center" :size="20">
			<!-- 折叠 -->
			<Collapse />
			<!-- 刷新 -->
			<Refresh v-if="showReload" />
			<!-- 面包屑 -->
			<Breadcrumb v-if="show" />
		</n-space>

		<n-space class="header-right" :size="20">
			<!-- 搜索 -->
			<Search />
			<!-- github -->
			<Github />
			<!-- 锁屏 -->
			<Lock />
			<!-- 全屏 -->
			<FullScreen />
			<!-- 用户 -->
			<User />
			<!-- 设置 -->
			<Setting />
		</n-space>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Collapse from "./components/Collapse.vue";
import Refresh from "./components/Refresh.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Search from "./components/Search.vue";
import Github from "./components/Github.vue";
import Lock from "./components/Lock.vue";
import FullScreen from "./components/FullScreen.vue";
import User from "./components/User.vue";
import Setting from "./components/Setting.vue";
import { useLayoutSettingStore } from "@/stores/modules/layoutSetting";

const layoutSettingStore = useLayoutSettingStore();

const showReload = computed(() => layoutSettingStore.headerSetting.showReload);
const show = computed(() => layoutSettingStore.crumbsSetting.show);
</script>

<style lang="scss" scoped>
.header {
	padding: 0 14px;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&-left {
		display: flex;
		align-items: center;
	}
	&-right {
		display: flex;
	}
}
</style>
