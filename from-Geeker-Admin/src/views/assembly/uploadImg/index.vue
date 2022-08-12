<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 10:50:38
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:21:11
-->
<template>
	<div class="content-box">
		<span class="text">图片上传 🍇🍇🍇🍓🍓🍓</span>
		<UploadImg v-model="imageUrl" />
		<div>{{ imageUrl }}</div>
	</div>
</template>

<script setup lang="ts">
import UploadImg from "@/components/UploadImg/index.vue";
import { ref } from "vue";

const imageUrl = ref<string>("");
</script>

<style scoped lang="scss"></style>
