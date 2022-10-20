<template>
	<div>
		<n-card :bordered="false" title="角色权限管理"> 页面数据为 Mock 示例数据，非真实数据。 </n-card>
		<BasicTable :request="loadDataTable" :columns="columns" :data="tableData" :pagination="pagination">
			<template #tableTitle>
				<n-button type="primary">
					<template #icon>
						<n-icon>
							<PlusOutlined />
						</n-icon>
					</template>
					添加角色
				</n-button>
			</template>
		</BasicTable>
	</div>
</template>

<script setup lang="ts">
import api from '@/api/index';
import BasicTable from '@/components/BasicTable/index.vue';
import { ref, reactive } from 'vue';
import { h, resolveComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const columns = [
	{ title: 'id', key: 'id' },
	{ title: '角色名称', key: 'name' },
	{ title: '说明', key: 'explain' },
	{
		title: '是否默认角色',
		key: 'isDefault',
		render(row: any) {
			return h(h(resolveComponent('NTag')), { type: row.isDefault ? 'success' : 'error' }, { default: () => (row.isDefault ? '是' : '否') });
		},
	},
	{ title: '创建时间', key: 'create_date' },
	{
		title: '操作',
		key: 'actions',
		render(row: any) {
			return h(
				h(resolveComponent('NSpace')),
				{ size: 'small' },
				{
					default: () => [
						h(h(resolveComponent('NButton')), { size: 'small' }, { default: () => '菜单权限' }),
						h(h(resolveComponent('NButton')), { size: 'small', onclick: handleEdit.bind(null, row) }, { default: () => '编辑' }),
						h(h(resolveComponent('NButton')), { size: 'small' }, { default: () => '删除' }),
					],
				}
			);
		},
	},
];

const tableData = ref<Array<typeof columns[0]>>([]);
const pagination = reactive<PaginationType>({});

function handleEdit(row: any) {
	console.log('点击了编辑', row);
	router.push({ name: 'basic-info', params: { id: row.id } });
}

async function loadDataTable() {
	const { data, code } = await api.getRoleList();
	if (code === 200) {
		tableData.value = data;
		pagination.itemCount = 100;
	}
}
</script>

<style scoped></style>
