<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:01:17
 * @LastEditors: dh
 * @LastEditTime: 2022-11-29 10:40:11
-->
<template>
	<el-dropdown trigger="click" @command="command">
		<span class="el-dropdown-link">
			<img class="avatar" src="@/assets/images/avatar.gif" alt="avatar" />
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item command="userInfo">个人资料</el-dropdown-item>
				<el-dropdown-item command="password">修改密码</el-dropdown-item>
				<el-dropdown-item command="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<PasswordDialog ref="passwordRef" />
	<UserInfoDialog ref="userInfoRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PasswordDialog from './PasswordDialog.vue';
import UserInfoDialog from './UserInfoDialog.vue';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';

const router = useRouter();
// InstanceType 可以获取组件的属性和方法
const passwordRef = ref<InstanceType<typeof PasswordDialog> | null>(null);
const userInfoRef = ref<InstanceType<typeof UserInfoDialog> | null>(null);

const logout = function (): void {
	ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
		// confirmButtonText: "确定",
		// cancelButtonText: "取消",
		type: 'warning',
	}).then(() => {
		router.push({ name: 'login' });
		ElMessage({
			type: 'success',
			message: '退出登录成功！',
		});
	});
};

const command = function (e: string): void {
	switch (e) {
		case 'userInfo':
			userInfoRef.value?.openDialog();
			break;
		case 'password':
			passwordRef.value?.openDialog();
			break;
		case 'logout':
			logout();
			break;
	}
};
</script>

<style lang="scss" scoped>
.avatar {
	border-radius: 50%;
	width: 40px;
	height: 40px;
}
</style>
