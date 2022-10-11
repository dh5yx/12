/*
 * @Description: 页面布局的配置
 * @Author: dh
 * @Date: 2022-08-18 10:35:18
 * @LastEditors: dh
 * @LastEditTime: 2022-10-11 11:21:35
 */
const setting = {
	// 主题 ，是否暗黑主题
	isDarkTheme: false,
	// 主题色
	appTheme: "#536dfe",
	// 主题色列表
	appThemeList: [
		"#2d8cf0",
		"#0960bd",
		"#0084f4",
		"#009688",
		"#536dfe",
		"#ff5c93",
		"#ee4f12",
		"#0096c7",
		"#9c27b0",
		"#ff9800",
		"#FF3D68",
		"#00C1D4",
		"#71EFA3",
		"#171010",
		"#78DEC7",
		"#1768AC",
		"#FB9300",
		"#FC5404",
	],
	//导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式
	navMode: "vertical",
	//导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏
	navTheme: "dark",
	// 是否处于移动端模式
	isMobile: false,
	//顶部
	headerSetting: {
		//背景色
		bgColor: "#fff",
		//固定顶部
		fixed: true,
		//显示重载按钮
		showReload: true,
	},
	//页脚
	showFooter: true,
	//多标签
	multiTabsSetting: {
		//背景色
		bgColor: "#fff",
		//是否显示
		show: true,
		//固定多标签
		fixed: true,
	},
	//菜单
	menuSetting: {
		//最小宽度
		minMenuWidth: 64,
		//菜单宽度
		menuWidth: 200,
		//固定菜单
		fixed: true,
		//分割菜单
		mixMenu: false,
		//触发移动端侧边栏的宽度
		mobileWidth: 800,
		// 折叠菜单
		collapsed: false,
	},
	//面包屑
	crumbsSetting: {
		//是否显示
		show: true,
		//显示图标
		showIcon: false,
	},
	//菜单权限模式 FIXED 前端固定路由  BACK 动态获取
	permissionMode: "FIXED",
	//是否开启路由动画
	isPageAnimate: true,
	//路由动画类型
	pageAnimateType: "zoom-fade",
};

export default setting;
