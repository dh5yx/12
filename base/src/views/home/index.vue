<template>
	<div>首页-{{ userStore.name }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/index';
const userStore = useUserStore();
</script>

<style scoped lang="scss">
* {
	background: $bgColor;
}
</style>
