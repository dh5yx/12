<template>
	<div class="user">
		<el-avatar :size="40" :src="avatar" />
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
				<span>{{ authStore.userInfo.userName }}</span>
				<el-icon class="el-icon--right">
					<arrow-down />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item>项目厂库</el-dropdown-item>
					<el-dropdown-item command="user">个人中心</el-dropdown-item>
					<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import avatar from '@/assets/image/img.jpg';
import { useAuthStore } from '@/stores/modules/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleCommand = (command: string) => {
	switch (command) {
		case 'user':
			break;
		case 'loginout':
			authStore.setUserInfo({});
			router.replace('/login');
			break;
	}
};
</script>

<style lang="scss" scoped>
.user {
	margin-left: 20px;
	display: flex;
	align-items: center;
	color: #fff;
	.el-dropdown-link {
		color: #fff;
		font-weight: 600;
		margin-right: 20px;
	}
}
</style>
