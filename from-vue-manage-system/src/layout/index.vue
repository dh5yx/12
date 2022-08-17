<template>
	<el-container style="height: 100%">
		<el-header>
			<Header />
		</el-header>
		<el-container style="height: 0">
			<el-aside style="width: auto">
				<Aside />
			</el-aside>
			<el-main>
				<Tabs />
				<div class="content-box">
					<div class="main">
						<router-view />
					</div>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
import Aside from './aside/index.vue';
import Tabs from './tabs/index.vue';
</script>

<style lang="scss" scoped>
.el-header {
	background: $primary-deep-color;
}
.el-aside {
	background-color: #324157;
	// height: 100%;
	overflow: hidden;
}
.el-main {
	padding: 0;
	display: flex;
	flex-direction: column;
	background: #f0f0f0;

	.content-box {
		flex: 1;
		height: 0;
		padding: 15px;
		overflow: auto;
	}
	.main {
		background: #fff;
		padding: 15px;
		min-height: 100%;
		box-sizing: border-box;
	}
}
</style>
