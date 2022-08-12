<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-03 15:47:15
 * @LastEditors: dh
 * @LastEditTime: 2022-08-08 10:03:43
-->
<template>
	<el-drawer v-model="drawerVisible" :destroy-on-close="true" :title="(isEdit ? '编辑' : '新增') + '用户'" size="600px">
		<el-form ref="formDateRef" :model="formData" :rules="rules" label-width="100px" label-suffix="：">
			<el-form-item label="用户头像" prop="avatar">
				<UploadImg v-model="formData.avatar" @change="() => formDateRef?.validateField('avatar')">
					<span>大小不超过5M</span>
				</UploadImg>
			</el-form-item>
			<el-form-item label="用户姓名" prop="username">
				<el-input v-model="formData.username" placeholder="请填写用户姓名"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="gender">
				<el-select v-model="formData.gender" placeholder="请选择性别" clearable>
					<el-option v-for="item in UserGender" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="身份证号" prop="idCard">
				<el-input v-model="formData.idCard" placeholder="请填写身份证号"></el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="formData.email" placeholder="请填写邮箱"></el-input>
			</el-form-item>
			<el-form-item label="居住地址" prop="address">
				<el-input v-model="formData.address" placeholder="请填写居住地址"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button @click="drawerVisible = false">取消</el-button>
			<el-button type="primary" @click="handleSubmit">确定</el-button>
		</template>
	</el-drawer>
</template>

<script setup lang="ts">
import api from "@/api/index";
import UploadImg from "@/components/UploadImg/index.vue";
import { ref, reactive } from "vue";
import { UserGender } from "@/dict/index";
import { ElMessage } from "element-plus";
import type { FormInstance } from "element-plus";
const emit = defineEmits(["change"]);
const formDateRef = ref<FormInstance>();
const drawerVisible = ref<boolean>(false);
const rules = reactive({
	avatar: [{ required: true, message: "请上传用户头像", trigger: "change" }],
	username: [{ required: true, message: "请填写用户姓名", trigger: "change" }],
	gender: [{ required: true, message: "请选择性别", trigger: "change" }],
	idCard: [{ required: true, message: "请填写身份证号", trigger: "change" }],
	email: [{ required: true, message: "请填写邮箱", trigger: "change" }],
	address: [{ required: true, message: "请填写居住地址", trigger: "change" }]
});
const formData = ref<User.UserInfo>({ username: "" });
const isEdit = ref<boolean>(false);

const open = (data: User.UserInfo | undefined) => {
	formData.value = data ? { ...data } : {};
	isEdit.value = !!data;
	drawerVisible.value = true;
};
const handleSubmit = () => {
	formDateRef.value?.validate(async valid => {
		if (!valid) return;
		const apiInstace = isEdit.value ? api.userEdit : api.userAdd;
		const res = await apiInstace(formData.value);
		ElMessage.success({ message: res.msg });
		emit("change");
		drawerVisible.value = false;
	});
};

defineExpose({ open });
</script>

<style scoped></style>
