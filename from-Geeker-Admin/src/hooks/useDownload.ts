/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 10:10:27
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:01
 */

import { ElNotification } from 'element-plus';
import { downloadByBlob } from '@/utils/fileTools';

type DownLoadType = (api: (params: any) => Promise<any>, params: any, tempName: string, isNotify?: boolean, fileType?: string) => Promise<any>;

/**
 * @description 接收数据流生成blob，创建链接，下载文件
 * @param {Function} api 导出表格的api方法(必传)
 * @param {String} tempName 导出的文件名(必传)
 * @param {Object} params 导出的参数(默认为空对象)
 * @param {Boolean} isNotify 是否有导出消息提示(默认为 true)
 * @param {String} fileType 导出的文件格式(默认为.xlsx)
 * @return Promise
 * */
export default <DownLoadType>async function useDownload(api, params = {}, tempName, isNotify = true, fileType = 'xlsx') {
	if (isNotify) {
		ElNotification({
			title: '温馨提示',
			message: '如果数据庞大会导致下载缓慢哦，请您耐心等待！',
			type: 'info',
			duration: 3000,
		});
	}
	try {
		const res = await api(params);
		downloadByBlob(res, tempName, fileType);
	} catch (error) {
		console.log(error);
	}
};
