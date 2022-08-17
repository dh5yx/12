<template>
	<div class="header">
		<div class="header-left">
			<Collapse></Collapse>
			<div class="title">后台管理系统</div>
		</div>
		<div class="header-right">
			<Message></Message>
			<User></User>
		</div>
	</div>
</template>

<script setup lang="ts">
import Collapse from './components/collapse/index.vue';
import Message from './components/message/index.vue';
import User from './components/user/index.vue';
</script>

<style lang="scss" scoped>
.header {
	height: 100%;
	display: flex;
	color: #fff;
	font-size: 22px;
	justify-content: space-between;
	.header-left {
		display: flex;
		align-items: center;
		.title {
			margin-left: 30px;
		}
	}
	.header-right {
		display: flex;
		align-items: center;
	}
}
</style>
