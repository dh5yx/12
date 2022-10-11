<template>
	<div>
		<n-card :bordered="false" title="菜单权限管理"> 页面数据为 Mock 示例数据，非真实数据。 </n-card>
		<n-grid class="mt-4" cols="1 s:1 m:3 l:3" responsive="screen" :x-gap="12">
			<n-gi span="1">
				<n-card :bordered="false">
					<template #header>
						<n-space>
							<n-dropdown trigger="hover" @select="selectAddMenu" :options="addMenuOptions">
								<n-button type="info" ghost icon-placement="right">
									添加菜单
									<template #icon>
										<div class="flex items-center">
											<n-icon size="14">
												<DownOutlined />
											</n-icon>
										</div>
									</template>
								</n-button>
							</n-dropdown>
							<n-button type="primary" ghost @click="handelOpenNode">
								全部{{ !expandedKeys.length ? "展开" : "收起" }}
								<template #icon>
									<n-icon size="14">
										<AlignLeftOutlined />
									</n-icon>
								</template>
							</n-button>
						</n-space>
					</template>
					<n-input v-model:value="treeKeyWords" placeholder="搜索" />
					<n-tree
						class="py-4"
						:data="treeData"
						checkable
						block-line
						block-node
						:pattern="treeKeyWords"
						:expandedKeys="expandedKeys"
						@update:selected-keys="onSelectedTree"
						@update:expanded-keys="onExpandedKeys"
					/>
				</n-card>
			</n-gi>
			<n-gi span="2">
				<n-card :bordered="false" size="small">
					<template #header>
						<n-space>
							<n-icon size="18">
								<FormOutlined />
							</n-icon>
							<span>编辑菜单：{{ menuName }}</span>
						</n-space>
					</template>
					<n-alert type="warning" closable> 从菜单列表选择一项后，进行编辑 </n-alert>
					<n-form v-if="formData" ref="formRef" :model="formData" :rules="rules" label-placement="left" label-width="100px" class="py-4">
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
						<n-form-item path="auth" style="margin-left: 100px">
							<n-space>
								<n-button type="primary" @click="formSubmit">保存修改</n-button>
								<n-button @click="handleReset">重置</n-button>
								<n-button @click="handleDel">删除</n-button>
							</n-space>
						</n-form-item>
					</n-form>
				</n-card>
			</n-gi>
		</n-grid>

		<MenuEditOrAdd ref="menuEditOrAddRef" />
	</div>
</template>

<script setup lang="ts">
import MenuEditOrAdd from "./menu-edit-or-add.vue";
import api from "@/api/index";
import { onMounted, ref, reactive, shallowRef, computed } from "vue";
import { useMessage, useDialog } from "naive-ui";

const message = useMessage();
const dialog = useDialog();

const menuEditOrAddRef = ref();
const treeKeyWords = ref("");
const treeData = ref<Array<any>>([]);
const formData = ref<Menu.MenuItem | null>(null);
const rules = reactive({});
const selectedMenu = shallowRef<Menu.MenuItem | null>(null);
const expandedKeys = ref<Array<string>>([]);
const addMenuOptions = ref([
	{
		label: "添加顶级菜单",
		key: "home",
		disabled: false,
	},
	{
		label: "添加子菜单",
		key: "son",
		disabled: computed(() => !selectedMenu.value),
	},
]);

const menuName = computed(() => {
	return selectedMenu.value ? selectedMenu.value.label : "";
});

const onSelectedTree = (a: any, b: any) => {
	formData.value = b.length ? { ...b[0] } : null;
	selectedMenu.value = b.length ? { ...b[0] } : null;
};
const onExpandedKeys = (keys: any) => {
	expandedKeys.value = keys;
};
const formSubmit = () => {
	console.log(formData.value);
};
const handleReset = () => {
	formData.value = { ...selectedMenu.value };
};
const handelOpenNode = () => {
	expandedKeys.value = expandedKeys.value.length ? [] : treeData.value.map(v => v.key);
};
const selectAddMenu = (key: string) => {
	menuEditOrAddRef.value.open(key);
};
const handleDel = () => {
	dialog.info({
		title: "提示",
		content: `您确定想删除此权限吗?`,
		positiveText: "确定",
		negativeText: "取消",
		onPositiveClick: () => {
			message.success("删除成功");
		},
		onNegativeClick: () => {
			message.error("已取消");
		},
	});
};

onMounted(async () => {
	const { data, code } = await api.getMenuList();
	if (code === 200) {
		treeData.value = data;
	}
});
</script>

<style scoped></style>
