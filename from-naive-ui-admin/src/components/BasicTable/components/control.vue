<template>
	<div>
		<n-tooltip trigger="hover">
			<template #trigger>
				<n-popover trigger="click">
					<template #trigger>
						<n-icon size="18">
							<SettingOutlined />
						</n-icon>
					</template>
					<template #header>
						<n-space item-style="display: flex;" align="center">
							<n-checkbox v-model:checked="selection" :on-update:checked="changeSelection"> 复选款 </n-checkbox>
							<n-button size="small" @click="init"> 重置 </n-button>
						</n-space>
					</template>
					<n-checkbox-group v-model:value="checkList" :on-update:value="changeCheckList">
						<n-checkbox v-for="(item, index) in columns" :key="index" :value="item.key" :label="item.title"> </n-checkbox>
					</n-checkbox-group>
					<!-- <template #footer> 上面就是分割线 </template> -->
				</n-popover>
			</template>
			<span>设置</span>
		</n-tooltip>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, unref } from "vue";
interface ControlType {
	selection: boolean;
	checkColumns: Array<any>;
}
const props = defineProps<ControlType>();
const emit = defineEmits(["update:selection", "update:checkColumns"]);

const checkList = ref<Array<any>>([]);
const columns = ref<Array<any>>([]);

function init() {
	checkList.value = columns.value.map(v => v.key);
	emit("update:checkColumns", columns.value);
}
function changeSelection(val: boolean) {
	emit("update:selection", val);
}
function changeCheckList(value: any) {
	checkList.value = value;
	const res = unref(columns).filter(v => checkList.value.includes(v.key));
	emit("update:checkColumns", res);
}

onMounted(() => {
	checkList.value = props.checkColumns.map(v => v.key);
	columns.value = [...props.checkColumns];
	init();
});
</script>

<style scoped></style>
