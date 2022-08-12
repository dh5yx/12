<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:12:29
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:01:34
-->
<template>
	<div class="global-config">
		<div @click="drawerVisible = true">
			<i :class="'iconfont icon-zhuti'" class="icon-style"></i>
		</div>

		<el-drawer v-model="drawerVisible" title="布局设置" size="300px">
			<el-divider class="divider" content-position="center">
				<el-icon class="divider-icon"><ColdDrink /></el-icon>
				<span class="divider-title">全局主题</span>
			</el-divider>
			<div class="config-item">
				<span>主题颜色</span>
				<el-color-picker v-model="themeConfig.primary" @change="primaryChange" />
			</div>
			<div class="config-item">
				<span>暗黑模式</span>
				<el-switch v-model="themeConfig.isDark" @change="darkCChange" />
			</div>
			<div class="config-item">
				<span>灰色模式</span>
				<el-switch v-model="themeConfig.isGrey" @change="greyChange" />
			</div>
			<div class="config-item">
				<span>色弱模式</span>
				<el-switch v-model="themeConfig.isWeak" @change="weakChange" />
			</div>
			<el-divider class="divider" content-position="center">
				<el-icon class="divider-icon"><Setting /></el-icon>
				<span class="divider-title">界面设置</span>
			</el-divider>
			<div class="config-item">
				<span>折叠菜单</span>
				<el-switch v-model="isCollapse" />
			</div>
			<div class="config-item">
				<span>面包屑导航</span>
				<el-switch v-model="themeConfig.showBreadcrumb" />
			</div>
			<div class="config-item">
				<span>标签栏</span>
				<el-switch v-model="themeConfig.showTabs" />
			</div>
			<div class="config-item">
				<span>页脚</span>
				<el-switch v-model="themeConfig.showFooter" />
			</div>
		</el-drawer>
	</div>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/stores/index";
import { ConfigStore } from "@/stores/modules/config";
import { ref, computed } from "vue";
import useTheme from "@/hooks/useTheme";

const globalStore = GlobalStore();
const configStore = ConfigStore();

let drawerVisible = ref<boolean>(false);

const themeConfig = computed(() => configStore);
const isCollapse = computed({
	get() {
		return globalStore.isCollapse;
	},
	set() {
		globalStore.setCollapse();
	},
});

const { weakChange, greyChange, darkCChange, primaryChange } = useTheme();
</script>

<style lang="scss" scoped>
.config-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	font-size: 13px;
}
.divider-icon {
	vertical-align: -2px;
	margin-right: 5px;
}
</style>
