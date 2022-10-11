<template>
	<n-card title="项目" :bordered="false" size="small" content-style="padding: 0;">
		<div class="flex flex-wrap">
			<n-card size="small" class="cursor-pointer ms:w-1/2 md:w-1/3" v-for="item in list" :key="item.name" hoverable>
				<div class="flex">
					<span>
						<n-icon size="30" :color="item.color">
							<component :is="item.icon"></component>
						</n-icon>
					</span>
					<span class="text-lg ml-4">{{ item.name }}</span>
				</div>
				<div class="flex mt-2 h-10 text-gray-400">{{ item.tip1 }}</div>
				<div class="flex mt-2 h-10 text-gray-400">{{ item.tip2 }}</div>
			</n-card>
		</div>
	</n-card>
</template>

<script setup lang="ts">
import { renderIcon } from "@/utils/index";
import { ref } from "vue";
import type { Component } from "vue";

interface ListItem {
	name: string;
	icon: Component;
	tip1: string;
	tip2: string;
	color?: string;
}
const list = ref<Array<ListItem>>([
	{
		name: "Github",
		icon: renderIcon("GithubOutlined"),
		tip1: "是一个面向开源及私有软件项目的托管平台。",
		tip2: "开源君，2021-07-04",
	},
	{
		name: "Vue",
		icon: renderIcon("LogoVue"),
		tip1: "渐进式 JavaScript 框架",
		tip2: "学不动也要学，2021-07-04",
		color: "#42b983",
	},
	{
		name: "Html5",
		icon: renderIcon("Html5Outlined"),
		tip1: "HTML5是互联网的下一代标准。",
		tip2: "撸码也是一种艺术 2021-04-01",
		color: "#e44c27",
	},
	{
		name: "Angular",
		icon: renderIcon("LogoAngular"),
		tip1: "现代 Web 开发平台，百万粉丝热捧。",
		tip2: "铁粉君 2021-07-04。",
		color: "#dd0031",
	},
	{
		name: "React",
		icon: renderIcon("LogoReact"),
		tip1: "用于构建用户界面的 JavaScript 库。",
		tip2: "技术牛 2021-07-04。",
		color: "#61dafb",
	},
	{
		name: "Js",
		icon: renderIcon("LogoJavascript"),
		tip1: "路是走出来的，而不是空想出来的。",
		tip2: "架构组 2021-07-04",
	},
]);
</script>

<style lang="scss" scoped></style>
