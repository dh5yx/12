<template>
	<n-icon size="18" class="icon-cursor">
		<ReloadOutlined @click="refresh" />
	</n-icon>
</template>

<script setup lang="ts">
import useRefresh from '@/hook/useRefresh';
const refresh = useRefresh();
</script>

<style scoped></style>
