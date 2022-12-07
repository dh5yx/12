<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-02 09:13:29
 * @LastEditors: dh
 * @LastEditTime: 2022-11-29 10:40:56
-->
<template>
	<div style="height: 100%; display: flex; flex-direction: column">
		<el-form label-suffix="：" label-width="100px">
			<el-row :gutter="20">
				<el-col :span="6">
					<el-form-item label="用户姓名">
						<el-input v-model="searchParam.username" placeholder="请输入" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="性别">
						<el-select v-model="searchParam.gender" placeholder="请选择" clearable style="width: 100%">
							<el-option v-for="item in UserGender" :key="item.value" :label="item.label" :value="item.value" />
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="身份证号">
						<el-input v-model="searchParam.idCard" placeholder="请输入" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="邮箱">
						<el-input v-model="searchParam.email" placeholder="请输入" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="居住地址">
						<el-input v-model="searchParam.address" placeholder="请输入" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="创建时间">
						<el-date-picker
							v-model="searchParam.createTime"
							type="datetimerange"
							start-placeholder="开始时间"
							end-placeholder="结束时间"
							value-format="YYYY-MM-DD HH:mm:ss"
						/>
					</el-form-item>
				</el-col>
				<el-button icon="search" type="primary" @click="search">搜索</el-button>
				<el-button icon="delete" @click="reset">重置</el-button>
			</el-row>
		</el-form>

		<div class="handle-box">
			<el-button type="primary" icon="circlePlus" @click="openDrawer()" v-if="BUTTONS.add">新增用户</el-button>
			<el-button type="primary" icon="upload" plain @click="batchAdd" v-if="BUTTONS.batchAdd">批量添加用户</el-button>
			<el-button type="primary" icon="download" plain @click="downloadFile" v-if="BUTTONS.export">导出用户数据</el-button>
			<el-button type="danger" icon="delete" :disabled="!selectedListIds.length" @click="batchDelete" v-if="BUTTONS.batchDelete">
				批量删除用户
			</el-button>
		</div>

		<el-table ref="tableRef" class="table" :data="tableData" :border="true" :row-key="getRowKeys" @selection-change="selectionChange">
			<el-table-column type="selection" reserve-selection width="80" />
			<el-table-column prop="username" label="用户姓名" show-overflow-tooltip width="140"></el-table-column>
			<el-table-column prop="gender" label="性别" show-overflow-tooltip width="140" v-slot="scope">
				{{ scope.row.gender == 1 ? '男' : '女' }}
			</el-table-column>
			<el-table-column prop="idCard" label="身份证号" show-overflow-tooltip></el-table-column>
			<el-table-column prop="email" label="邮箱" show-overflow-tooltip width="240"></el-table-column>
			<el-table-column prop="address" label="居住地址" show-overflow-tooltip></el-table-column>
			<el-table-column prop="createTime" label="创建时间" show-overflow-tooltip width="200"></el-table-column>
			<el-table-column prop="status" label="用户状态" width="180" v-slot="scope">
				<el-switch
					:value="scope.row.status"
					:active-text="scope.row.status === 1 ? '启用' : '禁用'"
					:active-value="1"
					:inactive-value="0"
					@change="changeStatus($event as number, scope.row)"
					v-if="BUTTONS.status"
				/>
				<el-tag :type="scope.row.status === 1 ? 'success' : 'danger'" v-else> {{ scope.row.status === 1 ? '启用' : '禁用' }}</el-tag>
			</el-table-column>
			<el-table-column label="操作" fixed="right" width="260" v-slot="scope">
				<el-button type="primary" link icon="view" @click="openDrawer(scope.row)" v-if="BUTTONS.view">查看</el-button>
				<!-- <el-button type="primary" link icon="editPen" @click="openDrawer(scope.row)" v-if="BUTTONS.edit">编辑</el-button> -->
				<el-button type="primary" link icon="refresh" @click="resetPass(scope.row)" v-if="BUTTONS.reset">重置密码</el-button>
				<el-button type="primary" link icon="delete" @click="deleteAccount(scope.row)" v-if="BUTTONS.delete">删除</el-button>
				<span v-if="!BUTTONS.view && !BUTTONS.edit && !BUTTONS.reset && !BUTTONS.delete">--</span>
			</el-table-column>
		</el-table>

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

		<EditDrawer ref="editDrawerRef" @change="getTableList"></EditDrawer>
	</div>
</template>

<script setup lang="ts">
import EditDrawer from '../components/editDrawer.vue';
import api from '@/api/index';
import useHandleData from '@/hooks/useHandleData';
import useSelection from '@/hooks/useSelection';
import useTable from '@/hooks/useTable';
import { reactive, onMounted, computed, ref } from 'vue';
import { UserGender } from '@/dict/index';
import { useAuthStore } from '@/stores/modules/auth';
import type { ElTable } from 'element-plus';

const authStore = useAuthStore();
const tableRef = ref<InstanceType<typeof ElTable>>();
const editDrawerRef = ref<DrawerExpose>();
const BUTTONS = computed(() => authStore.authButtons.useHooks);
const initParams = reactive({
	gender: 1,
});
const { tableData, reset, search, getTableList, searchParam, pageable, handleSizeChange, handleCurrentChange } = useTable({
	api: api.userList,
	initParams,
});
const { getRowKeys, selectionChange, selectedListIds } = useSelection({
	el: tableRef,
	id: 'id',
});

// 分页
// const getTableList = async () => {
// const res = await api.userList(searchParam);
// clearSelection();
// tableData.value = res.data.datalist;
// };

// 打开用户抽屉
const openDrawer = (row?: User.UserInfo) => {
	editDrawerRef.value && editDrawerRef.value.open(row);
};

const batchAdd = () => {};
const downloadFile = () => {};

// 重置密码
const resetPass = async (row: User.UserInfo) => {
	await useHandleData(api.userRestPW, { id: row.id }, `重置【${row.username}】用户密码`);
	await getTableList();
};

// 删除用户
const deleteAccount = async (row: User.UserInfo) => {
	await useHandleData(api.userDelete, { id: [row.id] }, '删除所选用户信息');
	await getTableList();
};

// 批量删除用户
const batchDelete = async () => {
	await useHandleData(api.userDelete, { id: selectedListIds.value }, '删除所选用户信息');
	await getTableList();
};

// 改变状态
const changeStatus = async (val: number, row: User.UserInfo) => {
	await useHandleData(api.changeStatus, { id: row.id, status: val }, `切换【${row.username}】用户状态`);
	await getTableList();
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.table {
	margin-top: 20px;
	flex: 1;
	height: 0;
}
</style>
