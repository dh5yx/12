<template>
	<div class="tabs">
		<div class="tabs-content">
			<n-tabs
				animated
				:value="name"
				:tab-style="{ background: getCardColor }"
				type="card"
				size="small"
				:on-update:value="handleChange"
				@close="handleClose"
			>
				<n-tab-pane v-for="item in panels" :key="item.name" :tab="item.name" :name="item.path" :closable="item.close"></n-tab-pane>
			</n-tabs>
		</div>
		<div class="tabs-config">
			<Dropdown />
		</div>
	</div>
</template>

<script setup lang="ts">
import Dropdown from './Dropdown.vue';
import { watch, computed, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/index';
import { TABS_BLACK_LIST } from '@/config/index';
import { useThemeVars } from 'naive-ui';

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();
const themeVars = useThemeVars();

const getCardColor = computed(() => {
	return themeVars.value.cardColor;
});

const panels = computed(() => globalStore.panels);
const name = computed(() => route.path);

const handleClose = (tab: string) => {
	globalStore.removeTabs(tab, route.path);
};
const handleChange = (tab: string) => {
	router.push(tab);
};

watch(route, to => {
	if (unref(panels).some(v => v.path === to.path)) return;
	if (TABS_BLACK_LIST.some(v => to.path.includes(v))) return;

	const isClose = to.meta.close;
	globalStore.addPanels({
		name: to.meta.title as string,
		path: to.path,
		close: typeof isClose === 'boolean' ? isClose : true,
	});
});
</script>

<style lang="scss" scoped>
.tabs {
	display: flex;
	justify-content: space-between;
	// margin-bottom: 10px;
	.tabs-content {
		flex: 1;
		overflow: hidden;
	}
	.tabs-config {
		padding: 0 10px;
		display: flex;
		align-items: center;
	}
}
.n-tab-pane {
	display: none;
}
</style>
