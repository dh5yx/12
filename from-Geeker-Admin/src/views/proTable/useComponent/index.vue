<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-05 14:15:04
 * @LastEditors: dh
 * @LastEditTime: 2022-09-30 15:57:46
-->
<template>
	<div style="height: 100%; display: flex; flex-direction: column">
		<TableView ref="tableView" :columns="columns" :api="api.userList">
			<template #handle="scope">
				<el-button type="primary" icon="circlePlus" @click="openDrawer()" v-if="BUTTONS.add">新增用户</el-button>
				<el-button type="primary" icon="upload" plain @click="batchAdd" v-if="BUTTONS.batchAdd">批量添加用户</el-button>
				<el-button type="primary" icon="download" plain @click="downloadFile" v-if="BUTTONS.export">导出用户数据</el-button>
				<el-button
					type="danger"
					icon="delete"
					:disabled="!scope.selectedListIds.length"
					@click="batchDelete(scope.selectedListIds)"
					v-if="BUTTONS.batchDelete"
				>
					批量删除用户
				</el-button>
			</template>
			<template #gender="scope">
				<span>{{ scope.row.gender == '1' ? '男' : '女' }}</span>
			</template>
			<template #status="scope">
				<!-- 如果插槽的值为 el-switch，第一次加载会默认触发 switch 的 @change 方法，所有在外层包一个盒子，点击触发盒子 click 方法（暂时只能这样解决） -->
				<div v-if="BUTTONS.status" @click="changeStatus(scope.row)">
					<el-switch
						:value="scope.row.status"
						:active-text="scope.row.status === 1 ? '启用' : '禁用'"
						:active-value="1"
						:inactive-value="0"
					/>
				</div>
				<el-tag :type="scope.row.status === 1 ? 'success' : 'danger'" v-else>
					{{ scope.row.status === 1 ? '启用' : '禁用' }}</el-tag
				>
			</template>
			<template #operation="scope">
				<el-button type="primary" link icon="view" @click="openDrawer(scope.row)">查看</el-button>
				<el-button type="primary" link icon="refresh" @click="resetPass(scope.row)">重置密码</el-button>
				<el-button type="primary" link icon="delete" @click="deleteAccount(scope.row)">删除</el-button>
			</template>
		</TableView>

		<EditDrawer ref="editDrawerRef" @change="tableView.refresh()"></EditDrawer>
	</div>
</template>

<script setup lang="ts">
import api from '@/api/index';
import useHandleData from '@/hooks/useHandleData';
import EditDrawer from '../components/editDrawer.vue';
import TableView from '@/components/TableView/index.vue';
import { ref, computed } from 'vue';
import { UserGender } from '@/dict/index';
import { useAuthStore } from '@/stores/modules/auth';

// 表格配置项
const columns: Partial<ColumnProps>[] = [
	{ type: 'selection', width: 80, fixed: 'left' },
	{ type: 'index', label: '序号', width: 80 },
	{ prop: 'username', label: '用户姓名', width: 140, search: true },
	{
		prop: 'gender',
		label: '性别',
		width: 140,
		search: true,
		sortable: true,
		searchType: 'select',
		searchProps: { label: 'genderLabel', value: 'genderValue' },
		enum: UserGender,
		searchInitParam: 1, // 默认值
	},
	{ prop: 'idCard', label: '身份证号', search: true },
	{ prop: 'email', label: '邮箱', width: 240, search: true },
	{ prop: 'address', label: '居住地址', search: true },
	{
		prop: 'createTime',
		label: '创建时间',
		width: 200,
		search: true,
		searchType: 'datetimerange',
	},
	{ prop: 'status', label: '用户状态', sortable: true, width: 180 },
	{ prop: 'operation', label: '操作', width: 260, fixed: 'right' },
];

const tableView = ref();

const authStore = useAuthStore();

const editDrawerRef = ref<InstanceType<typeof EditDrawer> | null>(null);

const BUTTONS = computed(() => authStore.authButtons.useHooks);

// 打开用户抽屉
const openDrawer = (row?: User.UserInfo) => {
	editDrawerRef.value?.open(row);
};

const batchAdd = () => {};
const downloadFile = () => {};

// 改变状态
const changeStatus = async (row: User.UserInfo) => {
	await useHandleData(api.changeStatus, { id: row.id, status: row.status == 1 ? 0 : 1 }, `切换【${row.username}】用户状态`);
	await tableView.value.refresh();
};

// 重置密码
const resetPass = async (row: User.UserInfo) => {
	await useHandleData(api.userRestPW, { id: row.id }, `重置【${row.username}】用户密码`);
	await tableView.value.refresh();
};

// 删除用户
const deleteAccount = async (row: User.UserInfo) => {
	await useHandleData(api.userDelete, { id: [row.id] }, '删除所选用户信息');
	await tableView.value.refresh();
};

// 批量删除用户
const batchDelete = async (ids: string[]) => {
	await useHandleData(api.userDelete, { id: ids }, '删除所选用户信息');
	await tableView.value.refresh();
};
</script>

<style scoped></style>
