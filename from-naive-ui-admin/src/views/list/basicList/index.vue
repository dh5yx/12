<template>
	<div>
		<SearchForm />

		<BasicTable :request="loadDataTable" :columns="columns" :data="tableData" :pagination="pagination" :max-height="560">
			<template #tableTitle>
				<n-button type="primary" @click="handelAdd">
					<template #icon>
						<n-icon>
							<PlusOutlined />
						</n-icon>
					</template>
					新建
				</n-button>
			</template>
		</BasicTable>

		<AddModel ref="addModel" @refresh="loadDataTable" />
	</div>
</template>

<script setup lang="ts">
import api from '@/api';
import SearchForm from '../components/search-form.vue';
import BasicTable from '@/components/BasicTable/index.vue';
import AddModel from '../components/add-model.vue';
import { h, ref, reactive, resolveComponent } from 'vue';
import { NAvatar } from 'naive-ui';

const columns = [
	{ title: 'id', key: 'id', width: 100 },
	{ title: '名称', key: 'name' },
	{
		title: '头像',
		key: 'avatar',
		render(row: any) {
			return h(NAvatar, {
				size: 48,
				src: row.avatar,
			});
		},
	},
	{ title: '地址', key: 'address' },
	{ title: '开始日期', key: 'beginTime' },
	{ title: '结束日期', key: 'endTime' },
	{ title: '创建时间', key: 'date' },
	{
		title: '操作',
		key: 'actions',
		render() {
			return h(
				h(resolveComponent('NSpace')),
				{ size: 'small' },
				{
					default: () => [
						h(h(resolveComponent('NButton')), { size: 'small' }, { default: () => '编辑' }),
						h(h(resolveComponent('NButton')), { size: 'small' }, { default: () => '删除' }),
					],
				}
			);
		},
	},
];

const addModel = ref();
const tableData = ref<Array<typeof columns[0]>>([]);
const pagination = reactive<PaginationType>({});

async function loadDataTable() {
	const { data, code } = await api.getTableList();
	if (code === 200) {
		tableData.value = data;
		pagination.itemCount = 100;
	}
}
function handelAdd() {
	addModel.value.open();
}
</script>

<style scoped></style>
