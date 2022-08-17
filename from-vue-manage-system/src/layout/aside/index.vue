<template>
	<el-scrollbar>
		<el-menu :collapse="isCollapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
			<MenuItem :menuList="menuList"></MenuItem>
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { menuList } from '@/dict';
import { useGlobalStore } from '@/stores';
import { computed } from 'vue';
const globalStore = useGlobalStore();

const isCollapse = computed(() => globalStore.isCollapse);
</script>

<style lang="scss" scoped>
.el-menu:not(.el-menu--collapse) {
	width: 250px;
}
</style>
