<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-08 15:16:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-11 14:21:00
-->
<template>
	<div class="box">
		<div class="header">
			<div class="header-title">{{ title }}</div>
			<img class="header-img" src="../images/dataScreen-title.png" alt="" />
			<div class="header-tip">
				<slot name="tip"></slot>
			</div>
		</div>
		<div class="body">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style lang="scss" scoped>
.box {
	height: 100%;
	display: flex;
	flex-direction: column;
	.header {
		height: 54px;
		color: var(--el-text-color-primary);
		font-weight: 800;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.header-img {
			margin-top: 10px;
		}
		.header-tip {
			align-self: flex-end;
			margin-right: 10px;
			letter-spacing: 2px;
			font-size: 13px;
		}
	}

	.body {
		flex: 1;
		height: 0;
	}
}
</style>
