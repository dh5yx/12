<template>
	<n-dropdown trigger="hover" :options="options" @select="handleSelect">
		<n-icon size="18" class="icon-cursor">
			<UserOutlined />
		</n-icon>
	</n-dropdown>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const options = [
	{
		label: "个人设置",
		key: "1",
	},
	{
		label: "退出登录",
		key: "2",
	},
];

const handleSelect = (key: string) => {
	switch (key) {
		case "1":
			router.push({ name: "Setting" });
			break;
		case "2":
			router.push({ name: "Login" });
			break;
	}
};
</script>

<style scoped></style>
