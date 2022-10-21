<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 11:34:16
-->
<script setup lang="ts">
import SetUp from './views/setup.vue';
import SetUp2 from './views/setup2.vue';
</script>

<template>
	<el-config-provider size="small" :z-index="3000">
		<router-link to="/">
			<el-button type="primary">home</el-button>
		</router-link>
		<router-link to="/vuex">
			<el-button type="warning">Vuex</el-button>
		</router-link>
		<router-link to="/axios">
			<el-button type="danger">axios</el-button>
		</router-link>

		<router-view></router-view>
		<SetUp />
		<SetUp2 />
	</el-config-provider>
</template>

<style></style>
