<template>
	<div>
		<n-card title="模态框" :bordered="false">
			<p>模态框，用于向用户收集或展示信息，Modal 采用 Dialog 预设，扩展拖拽效果 以下是 useModal</p>
			<p>方式，ref方式，也支持，使用方式和其他组件一致，如：modalRef.value.closeModal()</p>
		</n-card>
		<n-card class="mt-3">
			<n-alert title="Modal嵌套Form" type="info"> 使用 useModal 进行弹窗展示和操作，并演示了在Modal内和Form组件，组合使用方法 </n-alert>
			<n-divider />
			<n-button type="primary" @click="showModal">打开Modal嵌套Form例子</n-button>
		</n-card>
		<n-card class="mt-3">
			<n-alert title="Modal嵌套Form" type="info"> 使用 useModal 进行弹窗展示和操作，自定义配置，实现轻量级效果，更多配置，请参考文档 </n-alert>
			<n-divider />
			<n-button type="primary" @click="showModal">轻量级确认</n-button>
		</n-card>
		<n-card class="mt-3">
			<n-alert title="Modal嵌套Form" type="info">
				组件暴露了，setProps 方法，用于修改组件内部 Props，比如标题，等，具体参考UI框架文档，DialogReactive Properties
			</n-alert>
			<n-divider />
			<n-button type="primary" @click="showModal">打开Modal嵌套Form例子</n-button>
		</n-card>
	</div>
</template>

<script setup lang="ts">
function showModal() {}
</script>

<style lang="scss" scoped></style>
