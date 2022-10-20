import { h, resolveComponent } from 'vue';
import { NAvatar, NTag } from 'naive-ui';

export const columns = [
	{ title: 'id', key: 'id', width: 100 },
	{ title: '编码', key: 'no', width: 100 },
	{ title: '名称', key: 'name', width: 100 },
	{
		title: '头像',
		key: 'avatar',
		width: 100,
		render(row: any) {
			return h(NAvatar, { size: 48, src: row.avatar });
		},
	},
	{ title: '地址', key: 'address', width: 150 },
	{ title: '开始日期', key: 'beginTime', width: 160 },
	{ title: '结束日期', key: 'endTime', width: 160 },
	{
		title: '状态',
		key: 'status',
		width: 100,
		render(row: any) {
			return h(NTag, { type: row.status ? 'success' : 'error' }, { default: () => (row.status ? '启用' : '禁用') });
		},
	},
	{ title: '创建时间', key: 'date', width: 160 },
	{ title: '停留时间', key: 'time', width: 80 },
	{
		title: '操作',
		key: 'actions',
		width: 120,
		render() {
			return h(
				h(resolveComponent('NSpace')),
				{ size: 'small' },
				{
					default: () => [
						h(h(resolveComponent('NButton')), { size: 'small', text: true }, { default: () => '编辑' }),
						h(h(resolveComponent('NButton')), { size: 'small', text: true, type: 'error' }, { default: () => '删除' }),
					],
				}
			);
		},
	},
];
