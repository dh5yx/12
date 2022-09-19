<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-05 14:10:10
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:22:20
-->
<template>
	<div class="table-component">
		<div class="search-box">
			<SearchForm :columns="searchColumns" :searchParam="searchParam" :search="search" :reset="reset"></SearchForm>
		</div>
		<div class="handle-box">
			<slot name="handle" :selectedListIds="selectedListIds"></slot>
		</div>
		<div class="table-box">
			<el-table class="table" ref="tableRef" :data="tableData" :border="true" :row-key="getRowKeys" @selection-change="selectionChange">
				<template v-for="item in props.columns" :key="item">
					<el-table-column v-if="item.type == 'selection'" :type="item.type" :label="item.label" :width="item.width" :fixed="item.fixed">
					</el-table-column>
					<el-table-column v-else-if="item.type == 'index'" :type="item.type" :label="item.label" :width="item.width" :fixed="item.fixed">
					</el-table-column>
					<el-table-column v-else :prop="item.prop" :label="item.label" :sortable="item.sortable" :width="item.width" :fixed="item.fixed">
						<template #default="scope">
							<slot :name="item.prop" :row="scope.row">{{ scope.row[item.prop as string] }}</slot>
						</template>
					</el-table-column>
				</template>
			</el-table>
		</div>
		<div class="pagination-box">
			<el-pagination
				:currentPage="pageable.pageNum"
				:page-size="pageable.pageSize"
				:page-sizes="[10, 25, 50, 100]"
				background
				layout="total, sizes, prev, pager, next, jumper"
				:total="pageable.total"
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
			></el-pagination>
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchForm from "@/components/SearchForm/index.vue";
import useTable from "@/hooks/useTable";
import useSelection from "@/hooks/useSelection";
import { ref } from "vue";
import type { ElTable } from "element-plus";

interface ProTableProps {
	api: (param: any) => Promise<any>;
	columns: Partial<ColumnProps>[]; // 列配置项
}

const props = withDefaults(defineProps<ProTableProps>(), {
	columns: () => [],
});

const tableRef = ref<InstanceType<typeof ElTable>>();
const searchColumns = props.columns.filter(v => v.search);

const initParams = searchColumns.reduce((a: any, b: any) => ((a[b.prop] = b.searchInitParam), a), {});
const { searchParam, search, reset, tableData, pageable, handleSizeChange, handleCurrentChange, getTableList } = useTable({
	api: props.api,
	initParams,
});
const { selectionChange, getRowKeys, selectedListIds } = useSelection({ el: tableRef, id: "id" });

defineExpose({ refresh: getTableList });
</script>

<style lang="scss" scoped>
.table-component {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.table-box {
	flex: 1;
	height: 0;
	margin-top: 20px;
	.table {
		height: 100%;
	}
}
</style>
