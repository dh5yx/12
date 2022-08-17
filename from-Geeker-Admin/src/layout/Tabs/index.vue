<template>
	<el-tabs :model-value="activePath" @tab-click="tabClick" @tab-remove="removeTab" type="card">
		<el-tab-pane v-for="item in tabs" :label="item.title" :name="item.path" :key="item.path" :closable="item.close">
			<template #label>
				<el-icon class="tabs-icon" v-if="item.icon">
					<component :is="item.icon"></component>
				</el-icon>
				{{ item.title }}
			</template>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "vue";
import { TABS_BLACK_LIST } from "@/config";
import { useGlobalStore } from "@/stores/index";
import type { TabsPaneContext, TabPanelName } from "element-plus";

const globalStore = useGlobalStore();

const route = useRoute();
const router = useRouter();

const tabs = computed(() => globalStore.tabs);
const activePath = computed(() => route.path);

const tabClick = (path: TabsPaneContext) => {
	router.push({ path: path.props.name as string });
};
const removeTab = (path: TabPanelName) => {
	globalStore.removeTabs(path, route.path);
};

watch(route, to => {
	if (TABS_BLACK_LIST.includes(to.path)) return;
	if (tabs.value.some(v => v.path === to.path)) return;

	globalStore.addTabs({
		title: to.meta.title as string,
		path: to.path,
		close: true,
	});
});
</script>

<style lang="scss" scoped>
.el-tabs:deep() {
	.el-tabs__header {
		margin: 0;
	}
	.el-tabs__nav {
		border: none;
	}
	.el-tabs__item {
		border: none;
		color: #cccccc;
	}
	.el-tabs__item.is-active {
		color: $primary-color;
		border-bottom: 2px solid $primary-color;
	}
}
</style>
