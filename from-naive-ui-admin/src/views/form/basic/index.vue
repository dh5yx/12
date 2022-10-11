<template>
	<div>
		<n-card title="基础表单" :bordered="false">
			表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。
		</n-card>
		<n-card :bordered="false" class="mt-4">
			<n-form ref="formRef" :label-width="100" size="large" :model="formData" :rules="rules" label-placement="left">
				<n-form-item label="预约姓名" path="name">
					<n-input v-model:value="formData.name" placeholder="输入姓名" />
				</n-form-item>
				<n-form-item label="预约号码" path="mobile">
					<n-input placeholder="电话号码" v-model:value="formData.mobile" />
				</n-form-item>
				<n-form-item label="预约时间" path="datetime">
					<n-date-picker type="datetime" v-model:value="formData.datetime" />
				</n-form-item>
				<n-form-item label="预约医生" path="doctor">
					<n-select placeholder="请选择预约医生" :options="doctorList" v-model:value="formData.doctor" />
				</n-form-item>
				<n-form-item label="预约事项" path="matter">
					<n-select placeholder="请选择预约事项" :options="matterList" v-model:value="formData.matter" multiple />
				</n-form-item>
				<n-form-item label="性别" path="sex">
					<n-radio-group v-model:value="formData.sex" name="sex">
						<n-space>
							<n-radio :value="1">男</n-radio>
							<n-radio :value="2">女</n-radio>
						</n-space>
					</n-radio-group>
				</n-form-item>
				<n-form-item label="预约备注" path="remark">
					<n-input v-model:value="formData.remark" type="textarea" placeholder="请输入预约备注" />
				</n-form-item>
				<n-form-item label="图片" path="img">
					<!-- <BasicUpload
					name="files"
					:action="`${uploadUrl}/v1.0/files`"
					:headers="uploadHeaders"
					:data="{ type: 0 }"
					:width="100"
					:height="100"
					@upload-change="uploadChange"
					v-model:value="uploadList"
					helpText="单个文件不超过20MB，最多只能上传10个文件"
				/> -->
				</n-form-item>
				<n-form-item label=" ">
					<n-space>
						<n-button type="primary" @click="formSubmit">提交预约</n-button>
						<n-button @click="resetForm">重置</n-button>
					</n-space>
				</n-form-item>
			</n-form>
		</n-card>
	</div>
</template>

<script setup lang="ts">
import { useMessage } from "naive-ui";
import type { FormInst } from "naive-ui";
import { ref } from "vue";
import { doctorList, matterList, rules } from "./config";

const message = useMessage();

const defaultValueRef = {
	name: "",
	mobile: "",
	remark: "",
	sex: 1,
	matter: null,
	doctor: null,
	datetime: [],
};

let formData = ref({ ...defaultValueRef });
const formRef = ref<FormInst | null>(null);
// const uploadList = ref([]);
// const uploadUrl = ref("");
// const uploadHeaders = ref({});

// const uploadChange = () => {};
const formSubmit = () => {
	formRef.value?.validate((err: any) => {
		if (!err) {
			message.success("验证成功");
		} else {
			message.error("验证失败，请填写完整信息");
		}
	});
};
const resetForm = () => {
	formRef.value?.restoreValidation();
	formData.value = { ...defaultValueRef };
};
</script>

<style scoped></style>
