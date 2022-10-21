<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-05 15:18:23
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:21:55
-->
<template>
	<el-form :model="searchParam" label-suffix="：" label-width="100px">
		<el-row :gutter="20">
			<el-col :span="6" v-for="item in columns" :key="item.prop">
				<el-form-item :label="item.label" :prop="item.prop">
					<SearchFormItem :item="item" :searchParam="searchParam" />
				</el-form-item>
			</el-col>
			<el-button type="primary" icon="search" @click="search">搜索</el-button>
			<el-button icon="delete" @click="reset">重置</el-button>
		</el-row>
	</el-form>
</template>

<script setup lang="ts">
import SearchFormItem from './components/SearchFormItem.vue';

interface SearchFormPropsType {
	columns: Partial<ColumnProps>[];
	searchParam: object;
	search?: (params: any) => void; // 搜索方法
	reset?: (params: any) => void; // 重置方法
}

withDefaults(defineProps<SearchFormPropsType>(), {
	columns: () => [],
	searchParam: () => ({}),
});
</script>

<style lang="scss" scoped></style>
