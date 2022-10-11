<template>
	<n-card :bordered="false" content-style="padding-bottom:0">
		<n-form ref="formRef" :model="formData" :rules="rules" label-placement="left" label-width="70px">
			<n-grid :x-gap="10" :y-gap="0" cols="1 s:2 m:3 l:4 xl:5 2xl:5" responsive="screen" :collapsed="gridCollapsed" :collapsed-rows="1">
				<n-grid-item>
					<n-form-item label="姓名" path="name">
						<n-input v-model:value="formData.name" placeholder="请输入姓名"></n-input>
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="手机" path="mobile">
						<n-input v-model:value="formData.mobile" placeholder="请输入手机"></n-input>
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="类型" path="type">
						<n-select v-model:value="formData.type" :options="[]" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="预约时间" path="makeDate">
						<n-date-picker v-model:value="formData.makeDate" type="date" style="width: 100%" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="停留时间" path="makeTime">
						<n-date-picker v-model:value="formData.makeTime" type="date" style="width: 100%" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="状态" path="status">
						<n-select v-model:value="formData.status" :options="[]" style="width: 100%" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="预约项目" path="makeProject">
						<n-select v-model:value="formData.makeProject" :options="[]" style="width: 100%" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item>
					<n-form-item label="来源" path="makeSource">
						<n-select v-model:value="formData.makeSource" :options="[]" style="width: 100%" />
					</n-form-item>
				</n-grid-item>
				<n-grid-item suffix #="{ overflow }">
					<n-form-item label=" " class="flex justify-end">
						<n-space>
							<n-button type="primary" @click="handelSearch">查询</n-button>
							<n-button @click="handelReset">重置</n-button>
							<n-button type="primary" text icon-placement="right" @click="gridCollapsed = !gridCollapsed">
								<template #icon>
									<n-icon size="14" class="unfold-icon" v-if="overflow">
										<DownOutlined />
									</n-icon>
									<n-icon size="14" class="unfold-icon" v-else>
										<UpOutlined />
									</n-icon>
								</template>
								{{ overflow ? "展开" : "收起" }}
							</n-button>
						</n-space>
					</n-form-item>
				</n-grid-item>
			</n-grid>
		</n-form>
	</n-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInst } from "naive-ui";

interface FormDataType {
	name?: string;
	mobile?: string | number;
	type?: string | number;
	makeDate?: number | null;
	makeTime?: number | null;
	status?: string | number;
	makeSource?: string | number;
	makeProject?: string | number;
}

const rules = {
	name: { required: true, message: "请输入姓名", trigger: "blur" },
};

const formRef = ref<FormInst | null>();
const gridCollapsed = ref<boolean>(true);
const formData = ref<FormDataType>({});

function handelSearch() {
	console.log(formData.value);
	formRef.value?.validate(valid => {
		console.log(valid);
	});
}
function handelReset() {
	formRef.value?.restoreValidation();
	formData.value = defaultValue();
}
function defaultValue() {
	return {
		name: "",
		mobile: "",
		type: "",
		makeDate: null,
		makeTime: null,
		status: "",
		makeSource: "",
		makeProject: "",
	};
}
</script>

<style scoped></style>
