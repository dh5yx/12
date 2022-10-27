<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 09:23:14
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 15:41:09
-->
<template>
	<div style="border: 1px solid #ccc">
		<Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
		<Editor
			v-model="valueHtml"
			style="height: 400px; overflow-y: hidden"
			:defaultConfig="editorConfig"
			mode="default"
			@on-created="handleCreated"
		/>
	</div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { onBeforeUnmount, shallowRef, computed } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

interface PropsType {
	modelValue: string;
}

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<PropsType>(), {
	modelValue: '请输入',
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const toolbarConfig = {};
const editorConfig = { placeholder: '请输入内容...' };

const valueHtml = computed({
	get() {
		return props.modelValue;
	},
	set(val: string) {
		emit('update:modelValue', val);
	},
});

const handleCreated = (editor: any) => {
	editorRef.value = editor;
};

onBeforeUnmount(() => {
	const editor = editorRef.value;
	editor && editor.destroy();
});
</script>

<style lang="scss" scoped></style>
