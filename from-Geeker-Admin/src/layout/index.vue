<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 13:45:00
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 16:13:29
-->
<template>
	<el-container>
		<el-aside>
			<Aside></Aside>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
				<Tabs v-if="showTabs"></Tabs>
			</el-header>
			<el-main>
				<section class="main-box">
					<router-view v-slot="{ Component, route }">
						<transition appear name="fade-transform" mode="out-in">
							<keep-alive :include="cacheRouter">
								<component :is="Component" :key="route.path" />
							</keep-alive>
						</transition>
					</router-view>
				</section>
			</el-main>
			<el-footer v-if="showFooter">
				<Footer> </Footer>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Aside from "./Aside/index.vue";
import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
import Tabs from "./Tabs/index.vue";
import api from "@/api/index";
import { AuthStore } from "@/stores/modules/auth";
import { onMounted, computed } from "vue";
import { ConfigStore } from "@/stores/modules/config";
import { routerArray } from "@/router/routes";
import type { RouteRecordRaw, RouteRecordName } from "vue-router";

const authStore = AuthStore();
const configStore = ConfigStore();

const cacheRouter: any[] = [];
const showFooter = computed(() => configStore.showFooter);
const showTabs = computed(() => configStore.showTabs);

const filterKeepAlive = (_route: RouteRecordRaw[], _cache: RouteRecordName[]): void => {
	_route.forEach(item => {
		item.meta?.keepAlive && item.name && _cache.push(item.name);
		item.children && item.children.length !== 0 && filterKeepAlive(item.children, _cache);
	});
};
filterKeepAlive(routerArray, cacheRouter);

onMounted(async () => {
	const res = await api.buttons();
	res.data && authStore.setAuthButtons(res.data);
});
</script>

<style lang="scss" scoped>
.el-container {
	height: 100%;
	min-width: 970px;
	.el-aside {
		width: auto;
	}
	.el-main {
		padding: 10px;
		background: #f0f2f5;
		.main-box {
			box-sizing: border-box;
			height: 100%;
			overflow: auto;
			background: #fff;
			padding: 20px;
			display: flex;
			flex-direction: column;
		}
	}
	.el-header {
		height: auto;
	}
	.el-footer {
		height: auto;
		padding: 0;
	}
}
</style>
