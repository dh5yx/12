<template>
	<el-icon class="collapse" @click="changeCollapse">
		<Fold v-if="isCollapse" />
		<Expand v-else />
	</el-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/index';

const globalStore = useGlobalStore();

const isCollapse = computed(() => globalStore.isCollapse);

const changeCollapse = () => {
	globalStore.setCollapse();
};
</script>

<style lang="scss" scoped>
.collapse {
	cursor: pointer;
}
</style>
