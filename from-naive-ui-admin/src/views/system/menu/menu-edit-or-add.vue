<template>
	<n-drawer v-model:show="isDrawer" width="400px" placement="right">
		<n-drawer-content :title="'新增' + (addType === 'home' ? '顶栏菜单' : '子菜单')" closable>
			<n-form :model="formData" :rules="rules" ref="formRef" label-placement="left" :label-width="100">
				<n-form-item label="类型" path="type">
					<span>{{ formData.type === 1 ? "侧边栏菜单" : "" }}</span>
				</n-form-item>
				<n-form-item label="标题" path="label">
					<n-input placeholder="请输入标题" v-model:value="formData.label" />
				</n-form-item>
				<n-form-item label="副标题" path="subtitle">
					<n-input placeholder="请输入副标题" v-model:value="formData.subtitle" />
				</n-form-item>
				<n-form-item label="路径" path="path">
					<n-input placeholder="请输入路径" v-model:value="formData.path" />
				</n-form-item>
				<n-form-item label="打开方式" path="openType">
					<n-radio-group v-model:value="formData.openType" name="openType">
						<n-space>
							<n-radio :value="1">当前窗口</n-radio>
							<n-radio :value="2">新窗口</n-radio>
						</n-space>
					</n-radio-group>
				</n-form-item>
				<n-form-item label="菜单权限" path="auth">
					<n-input placeholder="请输入权限，多个权限用，分割" v-model:value="formData.auth" />
				</n-form-item>
				<n-form-item label="隐藏侧边栏" path="hidden">
					<n-switch v-model:value="formData.hidden" />
				</n-form-item>
			</n-form>

			<template #footer>
				<n-space>
					<n-button type="primary" @click="formSubmit">提交</n-button>
					<n-button @click="handleReset">重置</n-button>
				</n-space>
			</template>
		</n-drawer-content>
	</n-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from "vue";
import { useMessage } from "naive-ui";

type AddType = "home" | "son";

const message = useMessage();

const formRef = ref();
const addType = ref<AddType>();
const isDrawer = ref(false);
const formData = ref<any>({});
const rules = reactive<any>({
	label: { required: true, message: "请输入标题", trigger: "blur" },
	path: { required: true, message: "请输入路径", trigger: "blur" },
});

function formSubmit() {
	formRef.value.validate((err: any) => {
		if (!err) {
			message.success("添加成功");
			close();
		} else {
			message.error("请填写完整信息");
		}
	});
}
function defaultValueRef() {
	return {
		label: "",
		type: 1,
		subtitle: "",
		openType: 1,
		auth: "",
		path: "",
		hidden: false,
	};
}
function open(type: AddType) {
	isDrawer.value = true;
	addType.value = type;
	handleReset();
}
function close() {
	isDrawer.value = false;
}
function handleReset() {
	nextTick(() => {
		formRef.value.restoreValidation();
	});
	Object.assign(formData.value, defaultValueRef());
}

defineExpose({ open });
</script>
