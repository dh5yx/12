<template>
	<div>123</div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';

const route = useRoute();
const router = useRouter();
const { pathMatch } = route.params;
onBeforeMount(() => {
	router.replace({
		path: '/' + (Array.isArray(pathMatch) ? pathMatch.join('/') : 'pathMatch'),
	});
});
</script>

<style scoped></style>
