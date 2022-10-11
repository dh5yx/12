<template>
	<n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新建">
		<n-form :model="formData" :rules="rules" ref="formRef" label-placement="left" :label-width="80">
			<n-form-item label="名称" path="name">
				<n-input placeholder="请输入名称" v-model:value="formData.name" />
			</n-form-item>
			<n-form-item label="地址" path="address">
				<n-input type="textarea" placeholder="请输入地址" v-model:value="formData.address" />
			</n-form-item>
			<n-form-item label="日期" path="date">
				<n-date-picker type="datetime" placeholder="请选择日期" v-model:value="formData.date" />
			</n-form-item>
		</n-form>

		<template #action>
			<n-space>
				<n-button @click="showModal = false">取消</n-button>
				<n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
			</n-space>
		</template>
	</n-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInst } from "naive-ui";
interface FormDataType {
	name?: string;
	address?: String;
	date?: number | null;
}

const emits = defineEmits(["refresh"]);

const rules = {
	name: { required: true, message: "请输入姓名", trigger: "blur" },
	address: { required: true, message: "请输入地址", trigger: "blur" },
	date: {
		type: "number", // 必须要type，否者验证失效
		required: true,
		trigger: ["blur", "change"],
		message: "请选择日期",
	},
};

const formRef = ref<FormInst | null>();
const showModal = ref<boolean>(false);
const formData = reactive<FormDataType>({});
const formBtnLoading = ref<boolean>(false);

function confirmForm() {
	formRef.value?.validate(valid => {
		if (valid) return;
		formBtnLoading.value = true;
		setTimeout(() => {
			formBtnLoading.value = false;
			showModal.value = false;
			emits("refresh");
		}, 1000);
	});
}
function open() {
	showModal.value = true;
}

defineExpose({ open });
</script>

<style scoped></style>
