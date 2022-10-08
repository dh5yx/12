<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 09:28:35
 * @LastEditors: dh
 * @LastEditTime: 2022-09-30 15:49:05
-->
<template>
	<el-dialog v-model="dialogVisible" title="修改密码" width="30%">
		<span>This is a message</span>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="openDialog">Cancel</el-button>
				<el-button type="primary" @click="openDialog">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref<boolean>(false);

const openDialog = function () {
	dialogVisible.value = !dialogVisible.value;
};
const test = () => {};

defineExpose({ openDialog, test });
</script>

<style scoped></style>
