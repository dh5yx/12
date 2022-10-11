<template>
	<n-tooltip placement="bottom" trigger="hover">
		<template #trigger>
			<n-icon size="18" class="icon-cursor" @click="showDrawer = true">
				<SettingOutlined />
			</n-icon>
		</template>
		<span> 项目配置 </span>
	</n-tooltip>

	<n-drawer v-model:show="showDrawer" :width="280" placement="right">
		<n-drawer-content title="项目配置">
			<div>
				<n-divider title-placement="center"> 主题 </n-divider>
				<div class="drawer-setting-item justify-center dark-switch">
					<n-tooltip placement="bottom">
						<template #trigger>
							<n-switch v-model:value="isDarkTheme">
								<template #checked>
									<n-icon size="14" color="#ffd93b">
										<SunnySharp />
									</n-icon>
								</template>
								<template #unchecked>
									<n-icon size="14" color="#ffd93b">
										<Moon />
									</n-icon>
								</template>
							</n-switch>
						</template>
						<span>{{ isDarkTheme ? "深" : "浅" }}色主题</span>
					</n-tooltip>
				</div>
			</div>

			<div>
				<n-divider title-placement="center"> 系统主题 </n-divider>
				<div class="theme-color">
					<span
						class="theme-color-item flex items-center justify-center"
						v-for="(item, index) in layoutSettingStore.appThemeList"
						:key="index"
						:style="{ 'background-color': item }"
						@click="togTheme(item)"
					>
						<n-icon class="text-white" size="12" v-if="item === layoutSettingStore.appTheme">
							<CheckOutlined />
						</n-icon>
					</span>
				</div>
			</div>

			<div>
				<n-divider title-placement="center"> 导航栏模式 </n-divider>
				<div class="flex justify-around items-start">
					<div class="flex flex-col items-center" v-for="item in navModes" :key="item.title">
						<n-tooltip placement="top">
							<template #trigger>
								<img :src="item.img" @click="navMode = item.type" :alt="item.title" />
							</template>
							<span>{{ item.title }}</span>
						</n-tooltip>
						<n-badge class="mt-3" dot color="#19be6b" v-show="navMode === item.type" />
					</div>
				</div>
			</div>

			<div>
				<n-divider title-placement="center"> 导航栏风格 </n-divider>
				<div class="flex justify-around items-start">
					<div class="flex flex-col items-center" v-for="item in navThemes" :key="item.title">
						<n-tooltip placement="top">
							<template #trigger>
								<img :src="item.img" :alt="item.title" @click="navTheme = item.type" />
							</template>
							<span>{{ item.title }}</span>
						</n-tooltip>
						<n-badge class="mt-3" dot color="#19be6b" v-if="navTheme === item.type" />
					</div>
				</div>
			</div>

			<div>
				<n-divider title-placement="center"> 界面功能 </n-divider>
				<n-space vertical :size="20">
					<div class="flex justify-between">
						<div>固定顶栏</div>
						<n-switch v-model:value="layoutSettingStore.headerSetting.fixed" />
					</div>
				</n-space>
			</div>

			<div>
				<n-divider title-placement="center"> 界面显示 </n-divider>
				<n-space vertical :size="20">
					<div class="flex justify-between">
						<div>显示重载页面按钮</div>
						<n-switch v-model:value="layoutSettingStore.headerSetting.showReload" />
					</div>
					<div class="flex justify-between">
						<div>显示面包屑导航</div>
						<n-switch v-model:value="layoutSettingStore.crumbsSetting.show" />
					</div>
					<div class="flex justify-between">
						<div>显示面包屑显示图标</div>
						<n-switch v-model:value="layoutSettingStore.crumbsSetting.showIcon" />
					</div>
					<div class="flex justify-between">
						<div>显示多页签</div>
						<n-switch v-model:value="layoutSettingStore.multiTabsSetting.show" />
					</div>
				</n-space>
			</div>

			<n-divider title-placement="center"> 动画 </n-divider>
		</n-drawer-content>
	</n-drawer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLayoutSettingStore } from "@/stores/modules/layoutSetting";
import { useGlobalStore } from "@/stores/index";
import verticalImg from "@/assets/images/nav-theme-dark.svg";
import horizontalImg from "@/assets/images/nav-horizontal.svg";
import horizontalMixImg from "@/assets/images/nav-horizontal-mix.svg";
import lightImg from "@/assets/images/nav-theme-light.svg";
import darkImg from "@/assets/images/nav-theme-dark.svg";
import headerDarkImg from "@/assets/images/header-theme-dark.svg";

const globalStore = useGlobalStore();
const layoutSettingStore = useLayoutSettingStore();

const navModes = [
	{ title: "左侧菜单模式", img: verticalImg, type: "vertical" },
	{ title: "顶部菜单模式", img: horizontalImg, type: "horizontal" },
	{ title: "顶部菜单混合模式", img: horizontalMixImg, type: "horizontal-mix" },
];
const navThemes = [
	{ title: "暗色侧边栏", img: darkImg, type: "dark" },
	{ title: "白色侧边栏", img: lightImg, type: "light" },
	{ title: "暗色顶栏", img: headerDarkImg, type: "header-dark" },
];

const showDrawer = computed({
	get() {
		return globalStore.isShowSetting;
	},
	set(val) {
		globalStore.$patch({ isShowSetting: val });
	},
});
const isDarkTheme = computed({
	get() {
		return layoutSettingStore.isDarkTheme;
	},
	set(val) {
		layoutSettingStore.$patch({ isDarkTheme: val });
	},
});
const navMode = computed({
	get() {
		return layoutSettingStore.navMode;
	},
	set(val) {
		layoutSettingStore.$patch({ navMode: val });
	},
});
const navTheme = computed({
	get() {
		return layoutSettingStore.navTheme;
	},
	set(val) {
		layoutSettingStore.$patch({ navTheme: val });
	},
});

function togTheme(val: string) {
	layoutSettingStore.$patch({ appTheme: val });
}
// const appTheme = computed({
// 	get() {
// 		return layoutSettingStore.appTheme;
// 	},
// 	set(val) {
// 		layoutSettingStore.$patch({ appTheme: val });
// 	},
// });
</script>

<style lang="scss" scoped>
.dark-switch .n-switch {
	:deep(.n-switch__rail) {
		background-color: #000e1c;
	}
}
.justify-center {
	// display: flex;
	text-align: center;
}

.theme-color {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.theme-color-item {
		width: 20px;
		height: 20px;
		margin: 2px;
	}
}
</style>
