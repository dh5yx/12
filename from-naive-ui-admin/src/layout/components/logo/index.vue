<template>
	<div class="logo-box">
		<img class="logo-img" width="32" src="@/assets/images/logo.png" alt="" />
		<span v-if="!isCollapse">NaiveUiAdmin</span>
	</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/index';
import { computed } from 'vue';

const globalStore = useGlobalStore();

const isCollapse = computed(() => globalStore.isCollapse);
</script>

<style lang="scss" scoped>
.logo-box {
	display: flex;
	align-items: center;
	height: 64px;
	justify-content: center;
	.logo-img {
		width: 32px;
		height: 32px;
		margin-right: 5px;
		vertical-align: middle;
	}
}
</style>
