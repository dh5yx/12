/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 16:28:30
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:08:26
 */

// 环境配置
interface DevConfigType {
	[key: string]: {
		[key: string]: string | number;
	};
}

// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// * Vite
// declare type Recordable<T = any> = Record<string, T>;

// declare interface ViteEnv {
//   VITE_API_URL: string;
//   VITE_PORT: number;
//   VITE_OPEN: boolean;
//   VITE_GLOB_APP_TITLE: string;
//   VITE_DROP_CONSOLE: boolean;
//   VITE_PROXY_URL: string;
//   VITE_BUILD_GZIP: boolean;
//   VITE_REPORT: boolean;
// }

/* 用户列表查询参数 */
declare interface UserSearchParam {
	username?: string;
	gender?: string;
	idCard?: string;
	email?: string;
	createTime?: string;
}

/* 分页请求参数 */
declare interface ReqPage {
	pageNum: number;
	pageSize: number;
}

/* 用户管理模块 */
declare namespace User {
	interface ReqGetUserParams extends ReqPage {
		username: string;
		gender: number;
		idCard: string;
		email: string;
		address: string;
		createTime: string[];
		status: number;
	}
	interface UserInfo {
		id?: string;
		username?: string;
		gender?: string;
		age?: number;
		idCard?: string;
		email?: string;
		address?: string;
		createTime?: string;
		status?: number;
		avatar?: string;
	}
	interface ResStatus {
		userLabel: string;
		userValue: number;
	}
	interface ResGender {
		genderLabel: string;
		genderValue: number;
	}
}

// 打开 drawer(新增、查看、编辑)
declare interface DrawerExpose {
	open: (params?: any) => void;
}

// 表格
declare namespace Table {
	interface Pageable {
		pageNum: number;
		pageSize: number;
		total: number;
	}
	interface TableStateProps {
		tableData: any[];
		pageable: Pageable;
		searchParam: {
			[key: string]: any;
		};
		searchInitParams?: {
			[key: string]: any;
		};
		totalParam?: {
			[key: string]: any;
		};
		icon?: {
			[key: string]: any;
		};
	}
}
declare interface ColumnProps {
	type: TypeProp; // index | selection | expand（特殊类型）
	prop: string; // 单元格数据（非特殊类型必填）
	label: string; // 单元格标题（非特殊类型必填）
	width: number | string; // 列宽
	minWidth: number | string; // 最小列宽
	isShow: boolean; // 是否显示在表格当中
	sortable: boolean; // 是否可排序（静态排序）
	fixed: FixedProp; // 固定列
	tag: boolean; // 是否是标签展示
	image: boolean; // 是否是图片展示
	search: boolean; // 是否为搜索项
	searchType: SearchType; // 搜索项类型
	searchProps: { [key: string]: any }; // 搜索项参数，根据 element 文档来，标签自带属性 > props 属性
	searchInitParam: string | number | boolean | any[]; // 搜索项初始值
	enum: EnumProps[] | (() => Promise<any>); // 枚举类型（渲染值的字典）
	renderHeader: (params: any) => any; // 自定义表头
}

declare interface tabsItemType {
	title: string;
	path: string;
	close?: boolean;
	icon?: string;
}
