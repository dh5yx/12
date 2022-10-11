<template>
	<n-card :bordered="false" size="small" class="mt-3">
		<div class="table-top mb-4 flex justify-between">
			<div class="left text-xl font-bold">
				<span>{{ title }}</span>
				<slot name="tableTitle"></slot>
			</div>
			<div class="right flex items-center">
				<n-space>
					<n-tooltip trigger="hover">
						<template #trigger>
							<n-switch v-model:value="isStriped" />
						</template>
						<span>表格斑马纹</span>
					</n-tooltip>
					<n-divider vertical />
					<n-tooltip trigger="hover">
						<template #trigger>
							<n-icon size="18" @click="handelDelete">
								<DeleteOutlined />
							</n-icon>
						</template>
						<span>删除</span>
					</n-tooltip>
					<n-divider vertical />
					<n-tooltip trigger="hover">
						<template #trigger>
							<div @click="handelReload">
								<n-icon size="18">
									<ReloadOutlined />
								</n-icon>
							</div>
						</template>
						<span>刷新</span>
					</n-tooltip>
					<n-tooltip trigger="hover">
						<template #trigger>
							<div>
								<n-dropdown @select="densitySelect" trigger="click" :options="densityOptions" v-model:value="tableSize">
									<n-icon size="18">
										<ColumnHeightOutlined />
									</n-icon>
								</n-dropdown>
							</div>
						</template>
						<span>密度</span>
					</n-tooltip>

					<!-- 设置 -->
					<Control v-model:selection="isSelection" v-model:checkColumns="checkColumns" />
				</n-space>
			</div>
		</div>
		<n-data-table
			ref="tableRef"
			:bordered="false"
			:size="tableSize"
			:single-line="false"
			:remote="true"
			:data="data"
			:row-key="(row:any) => row[rowKey]"
			:columns="columnsFilter"
			:striped="isStriped"
			:pagination="pagination"
			:on-update:checked-row-keys="changeRowChecked"
			v-bind="$attrs"
		>
		</n-data-table>
	</n-card>
</template>

<script setup lang="ts">
import Control from "./components/control.vue";
import { onMounted, ref, computed } from "vue";
import { useDialog, useMessage } from "naive-ui";

interface TableProps {
	columns: Array<any>;
	data: Array<any>;
	pagination?: {
		[key: string]: any;
	};
	rowKey?: string;
	request?: Function;
	title?: string;
}

const dialog = useDialog();
const message = useMessage();

const props = withDefaults(defineProps<TableProps>(), {
	columns: () => [],
	data: () => [],
	pagination: () => ({}),
	request: () => {},
	rowKey: "id",
});

const densityOptions = [
	{ type: "menu", label: "紧凑", key: "small" },
	{ type: "menu", label: "默认", key: "medium" },
	{ type: "menu", label: "宽松", key: "large" },
];

const isStriped = ref<boolean>(false);
const tableSize = ref<string>("medium");
const isSelection = ref<boolean>(true);
const selectedROwID = ref<Array<any>>([]);
const checkColumns = ref<Array<any>>([...props.columns]);

const columnsFilter = computed(() => {
	return isSelection.value ? [{ type: "selection" }, ...checkColumns.value] : [...checkColumns.value];
});

//组装表格信息
const pagination = computed(() => {
	// const maxHeight = tableData.length ? `${deviceHeight}px` : "auto";
	return {
		pageSize: 10,
		...props.pagination,
	};
});

// 刷新
function handelReload() {
	props.request();
}
// 删除
function handelDelete() {
	if (!selectedROwID.value.length) return;
	dialog.warning({
		title: "警告",
		content: `你确定删除选中的${selectedROwID.value}？`,
		positiveText: "确定",
		negativeText: "取消",
		onPositiveClick: () => {
			message.success("删除成功");
			props.request();
		},
		onNegativeClick: () => {
			message.error("取消");
		},
	});
	console.log(selectedROwID.value);
}
// 选中行
function changeRowChecked(val: any) {
	selectedROwID.value = val;
}
//密度切换
function densitySelect(e: string) {
	tableSize.value = e;
}

onMounted(() => {
	props.request();
});
</script>

<style lang="scss" scoped></style>
