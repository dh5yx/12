<template>
	<div class="login">
		<div class="login-content">
			<img class="login-logo" src="@/assets/images/account-logo.png" alt="" />
			<p class="des">Naive Ui Admin中台前端/设计解决方案</p>
			<n-form class="login-form" ref="formRef" label-placement="left" size="large" :model="formInline" :rules="rules">
				<n-form-item path="username">
					<n-input v-model:value="formInline.username" placeholder="请输入用户名">
						<template #prefix>
							<n-icon size="18" color="#808695">
								<PersonOutline />
							</n-icon>
						</template>
					</n-input>
				</n-form-item>
				<n-form-item path="password">
					<n-input v-model:value="formInline.password" type="password" showPasswordOn="click" placeholder="请输入密码">
						<template #prefix>
							<n-icon size="18" color="#808695">
								<LockClosedOutline />
							</n-icon>
						</template>
					</n-input>
				</n-form-item>
				<n-form-item>
					<div>
						<n-checkbox v-model="autoLogin">自动登录</n-checkbox>
						<a href="javascript:">忘记密码</a>
					</div>
				</n-form-item>
				<n-form-item>
					<n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block> 登录 </n-button>
				</n-form-item>
			</n-form>
			<div class="login-other">
				<n-space size="large">
					<span>其它登录方式</span>
					<n-icon size="24" color="#2d8cf0">
						<LogoGithub />
					</n-icon>
					<n-icon size="24" color="#2d8cf0">
						<LogoFacebook />
					</n-icon>
				</n-space>
				<a href="javascript:" class="reg">注册账号</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { useLoadingBar } from "naive-ui";
import api from "@/api/index";
import type { FormInst } from "naive-ui";

window.$loading = useLoadingBar();

const router = useRouter();
const message = useMessage();

const loading = ref(false);
const autoLogin = ref(true);
const formRef = ref<FormInst>();
const formInline = reactive<LoginForm>({
	username: "admin",
	password: "123456",
});

const rules = {
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const handleSubmit = () => {
	formRef.value?.validate(async (valid: any) => {
		if (valid) return;
		message.loading("登录中...");
		loading.value = true;
		try {
			const { code } = await api.login(formInline);
			message.destroyAll();
			if (code === 200) {
				message.success("登录成功，即将进入系统");
				router.replace("/");
			}
		} finally {
			loading.value = false;
		}
	});
};
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	width: 100vw;
	background: url(@/assets/images/login.svg) no-repeat;
	&-content {
		position: fixed;
		top: 100px;
		left: 0;
		right: 0;
		width: 360px;
		margin: auto;
		padding: 20px;
	}
	&-logo {
		width: 100%;
	}
	&-form {
		margin-top: 20px;
	}
	&-other {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.des {
		color: #808695;
		font-size: 13px;
		text-align: center;
	}
	.reg {
		float: right;
	}
	a {
		font-size: 14px;
		color: #2d8cf0;
		cursor: pointer;
	}
	.n-icon {
		cursor: pointer;
	}
}
</style>
