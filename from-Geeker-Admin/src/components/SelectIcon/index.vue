<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 10:54:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-08 10:06:50
-->
<template>
	<div class="icon-box">
		<el-input placeholder="请选择图标" @focus="openDialog" readonly ref="inputRef">
			<template #append>
				<el-button :icon="customIcons[modelValue]" />
			</template>
		</el-input>
		<el-dialog v-model="dialogVisible" title="请选择图标" top="50px" width="1280px">
			<div v-for="(item, index) in Icons" :key="index" class="icon-item" @click="selectIcon(item)">
				<component :is="item"></component>
				<span>{{ item.name }}</span>
			</div>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="selectIcon">
import { ref } from "vue";
import * as Icons from "@element-plus/icons-vue";

defineProps<{ modelValue: string }>();

const emit = defineEmits(["update:modelValue"]);
const dialogVisible = ref(false);
const customIcons: { [key: string]: any } = Icons;

const openDialog = (e: any) => {
	e.target.blur();
	dialogVisible.value = true;
};
const selectIcon = (item: any) => {
	dialogVisible.value = false;
	emit("update:modelValue", item.name);
};
</script>

<style scoped lang="scss">
.icon-box {
	width: 100%;

	.el-button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

	:deep(.el-dialog__body) {
		display: flex;
		flex-wrap: wrap;
		height: 700px;
		overflow: auto;

		.icon-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 3.4%;
			margin: 20px 26px;
			cursor: pointer;
			transition: all 0.2s;

			&:hover {
				transform: scale(1.3);
			}

			span {
				line-height: 20px;
				text-align: center;
			}
		}
	}
}
</style>
