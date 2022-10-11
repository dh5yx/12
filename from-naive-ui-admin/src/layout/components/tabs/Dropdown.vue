<template>
	<n-dropdown trigger="hover" placement="bottom-start" :options="options" @select="handleSelect">
		<n-icon size="16" color="#515a6e">
			<DownOutlined />
		</n-icon>
	</n-dropdown>
</template>

<script lang="ts" setup>
import useRefresh from "@/hook/useRefresh";
import { useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/index";
import { renderIcon } from "@/utils/index";
import { ReloadOutlined, CloseOutlined, ColumnWidthOutlined, MinusOutlined } from "@vicons/antd";
const refresh = useRefresh();
const route = useRoute();
const globalStore = useGlobalStore();

const options = [
	{
		label: "刷新当前",
		key: "1",
		icon: renderIcon(ReloadOutlined),
	},
	{
		label: `关闭当前`,
		key: "2",
		// disabled: unref(isCurrent) || isDisabled,
		icon: renderIcon(CloseOutlined),
	},
	{
		label: "关闭其他",
		key: "3",
		// disabled: isDisabled,
		icon: renderIcon(ColumnWidthOutlined),
	},
	{
		label: "关闭全部",
		key: "4",
		// disabled: isDisabled,
		icon: renderIcon(MinusOutlined),
	},
];

const handleSelect = (key: any) => {
	switch (key) {
		case "1":
			refresh();
			break;
		case "2":
			globalStore.removeTabs(route.path, route.path);
			break;
		case "3":
			globalStore.removeOtherTabs(route.path);
			break;
		case "4":
			globalStore.removeALlTabs();
			break;
	}
	// message.info(String(key));
};
</script>
