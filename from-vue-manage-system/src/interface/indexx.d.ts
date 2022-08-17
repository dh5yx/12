// * 登录表单
declare interface LoginForm {
	userName?: string;
	password?: string;
}

// * 用户信息
declare type UserInfo = Omit<LoginForm, ''>;

// * 菜单
declare interface Menu {
	icon?: string;
	index?: string;
	title?: string;
	subs?: Array<Menu>;
}
