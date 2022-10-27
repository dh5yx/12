/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-03 15:16:54
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:56:42
 */
import { reactive, toRefs, onMounted } from 'vue';

interface useTableParamsType {
	api: (param: any) => Promise<any>;
	initParams?: { [key: string]: any };
}

export default function useTable({ api, initParams }: useTableParamsType) {
	const state = reactive<Table.TableStateProps>({
		tableData: [],
		pageable: {
			pageSize: 10,
			pageNum: 1,
			total: 0,
		},
		searchParam: {},
	});

	// 重置
	const reset = () => {
		state.searchParam = { ...initParams };
		getTableList();
	};
	// 过滤查询
	const search = () => {
		getTableList();
	};
	// 获取表格数据
	const getTableList = async () => {
		const { pageable, searchParam } = state;
		const { pageNum, pageSize } = pageable;
		const { data: res } = await api({ pageSize, pageNum, ...searchParam });
		const { total } = res;
		state.tableData = res.datalist || res.data;
		state.pageable.total = total;
	};
	// 分页size改变
	const handleSizeChange = (e: number) => {
		state.pageable.pageSize = e;
		getTableList();
	};
	// 分页current改变
	const handleCurrentChange = (e: number) => {
		state.pageable.pageNum = e;
		getTableList();
	};

	onMounted(() => {
		reset();
	});

	return {
		...toRefs(state),
		reset,
		search,
		getTableList,
		handleSizeChange,
		handleCurrentChange,
	};
}
