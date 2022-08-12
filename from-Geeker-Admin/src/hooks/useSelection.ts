/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-03 15:16:54
 * @LastEditors: dh
 * @LastEditTime: 2022-08-08 09:35:21
 */
import { ref, computed } from "vue";

interface configType {
	el: any;
	id?: string;
}

/**
 * @description: 表格多选数据操作
 * @param {string} id 为每条数据唯一标识
 * @return {*}
 */
export default function useSelection({ el, id = "id" }: configType) {
	const selectedList = ref<Array<any>>([]);
	const selectedListIds = computed(() => selectedList.value.map(v => v[id]));

	// row-key 属性 回调
	const getRowKeys = (row: any) => row[id];
	// 多选款改变 回调
	const selectionChange = (rows: any) => {
		return (selectedList.value = rows);
	};
	// 清空选中项目
	const clearSelection = () => el.value!.clearSelection();

	return {
		getRowKeys,
		selectionChange,
		selectedListIds,
		clearSelection
	};
}
