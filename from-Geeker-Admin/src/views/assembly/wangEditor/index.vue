<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 09:23:14
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:00:15
-->
<template>
	<div class="content-box">
		<span class="text">富文本 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content">
			<WangEditor v-model:editorValue="editorValue" />
			<div :innerHTML="editorValue"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import WangEditor from "@/components/WangEditor/index.vue";
import { ref } from "vue";

const editorValue = ref<string>("");
</script>

<style lang="scss" scoped></style>
