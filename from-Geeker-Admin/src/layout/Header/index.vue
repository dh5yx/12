<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 14:54:00
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:42:01
-->
<template>
	<div class="header">
		<div class="flex-center">
			<CollapseIcon id="collapseIcon"></CollapseIcon>
			<Breadcrumb id="breadcrumb" v-if="showBreadcrumb"></Breadcrumb>
		</div>
		<div class="flex-center">
			<Size id="globalSize"></Size>
			<Language id="globalLocale"></Language>
			<Theme id="globalTheme"></Theme>
			<Fullscreen></Fullscreen>
			<span class="username">Geeker</span>
			<Avatar></Avatar>
		</div>
	</div>
</template>

<script setup lang="ts">
import CollapseIcon from './components/CollapseIcon.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Size from './components/Size.vue';
import Language from './components/Language.vue';
import Theme from './components/Theme.vue';
import Fullscreen from './components/Fullscreen.vue';
import Avatar from './components/Avatar.vue';
import { computed } from 'vue';
import { useConfigStore } from '@/stores/modules/config';

const configStore = useConfigStore();
const showBreadcrumb = computed(() => configStore.showBreadcrumb);
</script>
<style lang="scss" scoped>
.header {
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
:deep(.flex-center) {
	display: flex;
	align-items: center;
	& > * {
		margin-right: 20px;
	}
	& .iconfont {
		font-size: 20px;
	}
}
</style>
