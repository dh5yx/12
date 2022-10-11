declare type RouteItem = {
	meta?: {
		root?: boolean;
		title?: string;
		icon?: string;
		hidden?: boolean;
		activeMenu?: string;
	};
};

declare type TabsItem = {
	name: string;
	path: string;
	close?: boolean;
	icon?: string;
};

declare type LoginForm = {
	username: string;
	password: string;
	autoLogin?: boolean;
};

declare namespace Menu {
	interface MenuItem {
		type?: number;
		label?: string;
		subtitle?: string;
		path?: string;
		openType?: number;
		auth?: boolean;
	}
}

declare interface PaginationType {
	[key?: string]: any;
}
