<template>
	<div>登陆</div>
</template>

<script setup lang="ts">
import apis from '@/api/index';
import { onMounted } from 'vue';

onMounted(() => {
	const params = {};
	apis.login(params).then(res => {
		console.log(res);
	});
});
</script>

<style scoped></style>
