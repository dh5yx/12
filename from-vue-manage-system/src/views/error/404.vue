<template>
	<div class="err-404">
		<img src="@/assets/image/404.png" alt="" />
		<div>
			<h2>404</h2>
			<p>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</p>
			<router-link to="/">
				<el-button type="primary">返回首页</el-button>
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.err-404 {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		font-size: 50px;
	}
	p {
		line-height: 4;
	}
	img {
		margin-bottom: 40px;
	}
}
</style>
