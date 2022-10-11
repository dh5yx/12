<template>
	<div>项目文档</div>
</template>

<script lang="ts">
export default {
	beforeRouteEnter(to: any) {
		if (to.meta.url) {
			window.open(to.meta.url);
			return false;
		}
	},
};
</script>
<script setup lang="ts"></script>

<style scoped></style>
