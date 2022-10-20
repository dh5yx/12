<template>
	<n-icon size="18" class="icon-cursor" @click="toggleCollapse">
		<!-- <MenuUnfoldOutlined /> -->
		<component :is="isCollapse ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"></component>
		<!-- <MenuFoldOutlined /> -->
	</n-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/index';

const globalStore = useGlobalStore();

const isCollapse = computed(() => globalStore.isCollapse);

const { toggleCollapse } = globalStore;
</script>

<style scoped></style>
