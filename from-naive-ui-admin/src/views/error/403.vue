<template>
	<div class="page-container flex justify-center flex-col">
		<img src="~@/assets/images/exception/403.svg" alt="" />
		<div class="text-center">
			<h1 class="">抱歉，你无权访问该页面</h1>
			<n-button type="info" @click="goHome">回到首页</n-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome() {
	router.push('/');
}
</script>

<style lang="scss" scoped>
.page-container {
	width: 100%;
	height: 100vh;
	.text-center {
		h1 {
			color: #666;
			padding: 20px 0;
		}
	}

	img {
		width: 350px;
		margin: 0 auto;
	}
}
</style>
