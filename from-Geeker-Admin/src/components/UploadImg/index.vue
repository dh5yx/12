<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 16:34:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:46:48
-->
<template>
	<div>
		<el-upload
			class="avatar-uploader"
			:show-file-list="false"
			:http-request="handleHttpUpload"
			:before-upload="beforeUpload"
			:on-success="uploadSuccess"
			:on-error="uploadError"
			:disabled="disabled"
			accept="image/jpeg,image/jpeg,image/png"
		>
			<img v-if="modelValue" :src="modelValue" class="avatar" />
			<div v-if="modelValue" class="view-icon" @click.stop="imageView">
				<img src="@/assets/images/enlarge_black.svg" alt="enlarge" />
			</div>
			<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
		</el-upload>
		<div class="el-upload__tip">
			<slot></slot>
		</div>
		<el-image-viewer v-if="dialogVisible" @close="imageView" :url-list="[modelValue]" />
	</div>
</template>

<script lang="ts" setup>
import api from '@/api/index';
import { ElNotification } from 'element-plus';
import { ref } from 'vue';
import type { UploadRequestOptions } from 'element-plus';

withDefaults(defineProps<{ modelValue?: string; disabled?: boolean }>(), { modelValue: '', disabled: false });

const emit = defineEmits(['update:modelValue', 'change']);

const dialogVisible = ref<boolean>(false);

const uploadSuccess = () => {
	ElNotification({
		title: '温馨提示',
		message: '图片上传成功！',
		type: 'success',
	});
};

const uploadError = () => {
	ElNotification({
		title: '温馨提示',
		message: '图片上传失败，请您重新上传！',
		type: 'error',
	});
};

const beforeUpload = (file: File) => {
	const isLt3M = file.size / 1024 / 1024 < 3;
	const isImage = ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type);

	if (!isImage) {
		ElNotification({
			title: '温馨提示',
			message: '上传图片必须是JPG/JPEG/PNG 格式！',
			type: 'warning',
		});
		return false;
	}
	if (!isLt3M) {
		ElNotification({
			title: '温馨提示',
			message: '上传图片大小不能超过 3MB！',
			type: 'warning',
		});
		return false;
	}
	return true;
};

const handleHttpUpload = function (e: UploadRequestOptions) {
	const formData: FormData = new FormData();
	formData.append('file', e.file);
	return api.uploadImg(formData).then(res => {
		emit('update:modelValue', res.data.fileUrl);
		emit('change', res.data.fileUrl);
	});
};

const imageView = function () {
	dialogVisible.value = !dialogVisible.value;
};
</script>

<style lang="scss" scoped>
.avatar-uploader {
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.el-icon.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		text-align: center;
	}
	.view-icon {
		position: absolute;
		top: 0;
		right: 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 25px;
		cursor: pointer;
		background: rgb(235 235 235 / 80%);
		border-bottom-left-radius: 10px;
		img {
			width: 17px;
		}
	}
}
:deep(.el-upload) {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
	&:hover {
		border-color: var(--el-color-primary);
	}
}
</style>
