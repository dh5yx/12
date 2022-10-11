<template>
	<n-config-provider :theme="isDarkTheme ? darkTheme : undefined" :theme-overrides="themeOverrides" style="height: 100%">
		<n-dialog-provider>
			<n-loading-bar-provider>
				<n-message-provider>
					<RouterView />
				</n-message-provider>
			</n-loading-bar-provider>
		</n-dialog-provider>
	</n-config-provider>
	<div v-show="loading" class="global-loading">
		<n-spin class=""></n-spin>
	</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useGlobalStore } from "@/stores/index";
import { darkTheme } from "naive-ui";
import { useLayoutSettingStore } from "@/stores/modules/layoutSetting";
import { NDialogProvider } from "naive-ui";
import type { GlobalThemeOverrides } from "naive-ui";

const globalStore = useGlobalStore();
const layoutSettingStore = useLayoutSettingStore();

const loading = computed(() => globalStore.loading);
const isDarkTheme = computed(() => layoutSettingStore.isDarkTheme);
/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = computed((): GlobalThemeOverrides => {
	return {
		common: {
			primaryColor: layoutSettingStore.appTheme,
			primaryColorHover: lighten(layoutSettingStore.appTheme, 10),
		},
	};
});

/**
 * Sums the passed percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
function addLight(color: string, amount: number) {
	const cc = parseInt(color, 16) + amount;
	const c = cc > 255 ? 255 : cc;
	return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
function lighten(color: string, amount: number) {
	color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
	amount = Math.trunc((255 * amount) / 100);
	return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`;
}
</script>

<style scoped>
.global-loading {
	background: #000;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	opacity: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
