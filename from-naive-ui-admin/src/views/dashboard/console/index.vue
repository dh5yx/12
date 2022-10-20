<template>
	<n-space vertical :size="10">
		<TopCard />
		<IconList />
		<VisitTab />
	</n-space>
</template>

<script setup lang="ts">
import TopCard from './components/top-card/index.vue';
import IconList from './components/icon-list/index.vue';
import VisitTab from './components/visit-tab/visit-tab.vue';
</script>

<style lang="scss" scoped></style>
