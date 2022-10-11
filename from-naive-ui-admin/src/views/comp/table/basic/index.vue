<template>
	<div>
		<BasicTable title="表格列表" :request="loadDataTable" :columns="columns" :data="tableData" :pagination="pagination" :max-height="650">
		</BasicTable>
	</div>
</template>

<script lang="ts" setup>
import BasicTable from "@/components/BasicTable/index.vue";
import api from "@/api";
import { ref } from "vue";
import { columns } from "./column";

const tableData = ref([]);
const pagination = ref<PaginationType>({});

async function loadDataTable() {
	const { data, code } = await api.getTableList();
	if (code === 200) {
		tableData.value = data;
		pagination.value.itemCount = 100;
	}
}
</script>

<style lang="scss" scoped></style>
