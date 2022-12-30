<template>
	<div>这里是首页页面</div>

	<button @click="send2main">发送</button>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron';

// 发送消息给主进程
function send2main() {
	ipcRenderer.send('msg', '11111');
}

// 接收主进程消息
ipcRenderer.on('msg', (_, data) => {
	console.log('渲染进程收到消息：', data);
});
</script>

<style scoped></style>
