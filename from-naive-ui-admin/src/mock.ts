import Mock from 'mockjs';

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
	let newsList = [];
	for (let i = 0; i < 20; i++) {
		let newNewsObject = {
			title: Random.ctitle(), // Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
			content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
			createdTime: Random.date(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
		};
		newsList.push(newNewsObject);
	}
	return newsList;
};
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData); // 后面讲这个api的使用细节

Mock.mock('/api/login', () => ({
	code: 200,
	data: Random.string('upper', 32, 32),
	message: 'ok',
	type: 'success',
}));

Mock.mock('/dashboard/console', () => ({
	code: 200,
	data: {
		visits: {
			title: '访问量',
			number: Random.float(10000, 99999, 2, 2),
			rise: Random.float(10, 99, 2, 2),
			decline: Random.float(10, 99, 2, 2),
			amount: Random.float(9999, 99999, 3, 2),
		},
		saleroom: {
			title: '销售额',
			number: Random.float(10000, 99999, 2, 2),
			amount: Random.float(9999, 99999, 2, 2),
			degree: Random.float(10, 99, 2, 2),
		},
		orderLarge: {
			title: '订单量',
			number: Random.float(10000, 99999, 2, 2),
			rise: Random.float(10, 99, 2, 2),
			decline: Random.float(10, 99, 2, 2),
			amount: Random.float(9999, 99999, 2, 2),
		},
		volume: {
			title: '成交额度',
			number: Random.float(10000, 99999, 2, 2),
			rise: Random.float(10, 99, 2, 2),
			decline: Random.float(10, 99, 2, 2),
			amount: Random.float(9999, 99999, 2, 2),
		},
	},
	message: 'ok',
	type: 'success',
}));

Mock.mock('/menu/list', () => ({
	code: 200,
	data: [
		{
			label: 'Dashboard',
			key: 'dashboard',
			type: 1,
			subtitle: 'dashboard',
			openType: 1,
			auth: 'dashboard',
			path: '/dashboard',
			children: [
				{
					label: '主控台',
					key: 'console',
					type: 1,
					subtitle: 'console',
					openType: 1,
					auth: 'console',
					path: '/dashboard/console',
				},
				{
					label: '工作台',
					key: 'workplace',
					type: 1,
					subtitle: 'workplace',
					openType: 1,
					auth: 'workplace',
					path: '/dashboard/workplace',
				},
			],
		},
		{
			label: '表单管理',
			key: 'form',
			type: 1,
			subtitle: 'form',
			openType: 1,
			auth: 'form',
			path: '/form',
			children: [
				{
					label: '基础表单',
					key: 'basic-form',
					type: 1,
					subtitle: 'basic-form',
					openType: 1,
					auth: 'basic-form',
					path: '/form/basic-form',
				},
				{
					label: '分步表单',
					key: 'step-form',
					type: 1,
					subtitle: 'step-form',
					openType: 1,
					auth: 'step-form',
					path: '/form/step-form',
				},
				{
					label: '表单详情',
					key: 'detail',
					type: 1,
					subtitle: 'detail',
					openType: 1,
					auth: 'detail',
					path: '/form/detail',
				},
			],
		},
	],
	message: 'ok',
	type: 'success',
}));

function doCustomTimes(times: number, callback: any) {
	let i = -1;
	while (++i < times) {
		callback(i);
	}
}
function getMenuKeys() {
	const keys = ['dashboard', 'console', 'workplace', 'basic-form', 'step-form', 'detail'];
	const newKeys: any = [];
	doCustomTimes(parseInt(Math.random() * 6 + ''), () => {
		const key = keys[Math.floor(Math.random() * keys.length)];
		newKeys.push(key);
	});
	return Array.from(new Set(newKeys));
}
Mock.mock('/role/list', {
	code: 200,
	'data|10': [
		{
			id: '@integer(10,100)',
			name: '@cname()',
			explain: '@cname()',
			isDefault: '@boolean()',
			menu_keys: getMenuKeys(),
			create_date: `@date('yyyy-MM-dd hh:mm:ss')`,
			'status|1': ['normal', 'enable', 'disable'],
		},
	],
	message: 'ok',
	type: 'success',
});
Mock.mock('/table/list', {
	code: 200,
	'data|10': [
		{
			id: '@integer(10,100)',
			beginTime: '@datetime',
			endTime: '@datetime',
			address: '@city()',
			name: '@cname()',
			avatar: '@image("400x400", @color(), color(),first())',
			date: `@date('yyyy-MM-dd')`,
			time: `@time('HH:mm')`,
			'no|100000-10000000': 100000,
			'status|1': [true, false],
		},
	],
	message: 'ok',
	type: 'success',
});
