<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 16:34:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-08 17:20:40
-->
<template>
	<el-upload
		style="width: 100%"
		:drag="true"
		:multiple="true"
		:show-file-list="true"
		:http-request="handleHttpUpload"
		:before-upload="beforeUpload"
		:on-success="uploadSuccess"
		:on-error="uploadError"
		:accept="accept.join(',')"
	>
		<el-icon class="el-icon--upload"><upload-filled /></el-icon>
		<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
		<template #tip>
			<div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
		</template>
	</el-upload>
</template>

<script lang="ts" setup>
import { ElNotification } from "element-plus";
import { getExt } from "@/utils/fileTools";
import type { UploadRequestOptions } from "element-plus";

interface PropsType {
	uploadApi: (params: any) => Promise<any>;
	accept?: string[];
}

const props = withDefaults(defineProps<PropsType>(), {
	accept: () => ["*"]
});

const handleHttpUpload = async function (e: UploadRequestOptions) {
	const formData = new FormData();
	formData.append("file", e.file);
	props.uploadApi(formData);
};

const beforeUpload = function (file: File) {
	const fileType = getExt(file.name);
	const isAccept = props.accept.includes("." + fileType) || props.accept.includes("*");
	const isLt5M = file.size / 1024 / 1024 < 5;
	if (!isAccept) {
		ElNotification({
			title: "温馨提示",
			message: `上传文件只能是 ${props.accept.join(",")} 格式！`,
			type: "warning"
		});
		return false;
	}

	if (!isLt5M) {
		ElNotification({
			title: "温馨提示",
			message: "上传文件大小不能超过 5MB！",
			type: "warning"
		});
		return false;
	}

	return true;
};

const uploadSuccess = (): void => {
	ElNotification({
		title: "温馨提示",
		message: "上传成功！",
		type: "success"
	});
};

const uploadError = (): void => {
	ElNotification({
		title: "温馨提示",
		message: "图片上传失败，请您重新上传！",
		type: "error"
	});
};
</script>

<style lang="scss" scoped></style>
