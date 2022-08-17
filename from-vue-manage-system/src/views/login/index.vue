<template>
	<div class="page-login">
		<div class="login-box">
			<h2 class="login-title">后台管理系统</h2>
			<el-form ref="loginFOrmRef" class="login-form" :model="formData" :rules="rules">
				<el-form-item prop="userName">
					<el-input size="large" v-model="formData.userName" placeholder="用户名">
						<template #prepend>
							<el-button icon="user"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input size="large" v-model="formData.password" placeholder="密码">
						<template #prepend>
							<el-button icon="search"></el-button>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button size="large" type="primary" style="width: 100%; font-size: 18px" @click="loginBtn">登录</el-button>
				</el-form-item>
				<div class="login-tip">Tips : 用户名和密码随便填。</div>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/modules/auth';
import type { FormInstance } from 'element-plus';

const router = useRouter();
const authStore = useAuthStore();

const loginFOrmRef = ref<FormInstance>();
const formData = reactive<LoginForm>({
	password: '123',
	userName: 'admin',
});
const rules = reactive({
	userName: [{ required: true, message: '请输入用户名', trigger: 'change' }],
	password: [{ required: true, message: '请输入密码', trigger: 'change' }],
});

const loginBtn = () => {
	loginFOrmRef.value &&
		loginFOrmRef.value.validate(valid => {
			if (!valid) return;
			authStore.setUserInfo(formData);
			router.push('/');
		});
};
</script>

<style lang="scss" scoped>
.page-login {
	height: 100%;
	width: 100%;
	background: url('@/assets/image/login-bg.jpg') no-repeat;
	background-size: cover;
	.login-box {
		width: 350px;
		height: 320px;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		background: rgba(255, 255, 255, 0.3);
		.login-title {
			font-size: 20px;
			line-height: 3;
			color: #fff;
			text-align: center;
			border-bottom: 1px solid #fff;
		}
		.login-form {
			padding: 20px;
		}
		.login-tip {
			font-size: 12px;
			color: #fff;
		}
	}
}
</style>
