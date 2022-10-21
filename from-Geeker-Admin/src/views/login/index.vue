<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:46:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:52
-->
<template>
	<div class="page-login">
		<div class="container">
			<div class="left-img-box">
				<img src="@/assets/images/login_left.png" alt="" />
			</div>
			<div class="right-login-box">
				<div class="web-title">
					<img src="@/assets/images/logo.svg" alt="" />
					<span>Geeker-Admin</span>
				</div>
				<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
					<el-form-item prop="username">
						<el-input placeholder="用户名：admin/user" v-model="loginForm.username">
							<template #prefix>
								<el-icon class="el-input__icon"><User /></el-icon>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input placeholder="密码：12346" v-model="loginForm.password">
							<template #prefix>
								<el-icon class="el-input__icon"><Lock /></el-icon>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-button>重置</el-button>
						<el-button type="primary" @click="login(loginFormRef)">登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import md5 from 'js-md5';
import api from '@/api/index';
import { ref, reactive } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import { useGlobalStore } from '@/stores';
import { useRouter } from 'vue-router';
import type { LoginType } from '@/types/login';
import type { ElForm } from 'element-plus';

const globalStore = useGlobalStore();
const router = useRouter();

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef: any = ref<FormInstance>();
const loginForm = reactive<LoginType.ReqLoginForm>({
	username: 'admin',
	password: '123456',
});
const loginRules = reactive({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const login = function (formEl: FormInstance | undefined) {
	if (!formEl) return;
	formEl.validate(async valid => {
		if (!valid) return;
		const res = await api.login({
			username: loginForm.username,
			password: md5(loginForm.password),
		});
		globalStore.setToken(res.data!.access_token);
		router.push({ name: 'home' });
	});
};
</script>

<style lang="scss" scoped>
.page-login {
	background: url('@/assets/images/login_bg.svg') no-repeat;
	background-size: cover;
	height: 100vh;
	width: 100vw;
	position: relative;
	.container {
		background: rgba($color: #fff, $alpha: 0.7);
		position: fixed;
		top: 35px;
		left: 35px;
		right: 35px;
		bottom: 35px;
		margin: auto;
		border-radius: 15px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.left-img-box {
			width: 800px;
			img {
				width: 100%;
			}
		}
		.right-login-box {
			width: 420px;
			padding: 50px 40px;
			box-shadow: 5px 5px 15px #ccc;
			.web-title {
				margin-bottom: 40px;
				font-size: 30px;
				img {
					width: 40px;
					margin-right: 20px;
					vertical-align: middle;
				}
			}
			.el-form-item {
				margin-bottom: 40px;
			}
		}
	}
}
</style>
