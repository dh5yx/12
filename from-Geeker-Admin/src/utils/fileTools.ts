/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 10:30:14
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 11:35:47
 */

/**
 * @description: 根据 blob文件流 下载
 * @param {data} 文件流
 * @param {fileName} 文件名字
 * @param {type} 文件类型
 * @return {*}
 */
export function downloadByBlob(data: Blob, fileName: string, type: string) {
	const blob = new Blob([data]);
	const url = window.URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = fileName + "." + type;
	link.click();
	window.URL.revokeObjectURL(url);
}

/**
 * @description: 获取 file文件 后缀 , 存在 则返回后缀 ，不存在 则返回入参
 * @param {filename} filename
 * @return {*}
 */
export function getExt(filename: string) {
	const type = filename.split(".").pop();
	return type ? type.toLowerCase() : filename;
}
