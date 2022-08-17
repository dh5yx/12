<template>
	<div class="tabs" v-if="tabs.length">
		<el-tag
			v-for="tag in tabs"
			:key="tag.index"
			class="mr-20"
			size="default"
			effect="dark"
			:type="route.path === tag.index ? '' : 'info'"
			closable
			@click="router.push(tag.index as string)"
			@close="close(tag.index as string)"
		>
			{{ tag.title }}
		</el-tag>
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { watch, computed } from 'vue';
import { useGlobalStore } from '@/stores/index';

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();

const tabs = computed(() => globalStore.openedTabs);

const close = (path: string) => {
	globalStore.removeTabs(path);
};

watch(route, to => {
	// 有此tab了就不添加
	if (tabs.value.some(v => v.index === to.path)) return;

	// 只匹配到一个路由的就不是layout里面的页面，不添加tab。但是不太严谨
	if (to.matched.length <= 1) return;

	globalStore.addTabs({
		title: to.meta.title as string,
		index: to.path,
	});
});
</script>

<style lang="scss" scoped>
.tabs {
	// margin-bottom: 10px;
	background: #fff;
	padding: 4px;
	.el-tag {
		cursor: pointer;
	}
}
.mr-20 {
	margin: 0 3px;
}
</style>
