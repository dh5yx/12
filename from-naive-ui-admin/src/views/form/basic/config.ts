export const doctorList = [
	{ label: "李医生", value: 1 },
	{ label: "黄医生", value: 2 },
	{ label: "张医生", value: 3 },
];

export const matterList = [
	{ label: "种牙", value: 1 },
	{ label: "补牙", value: 2 },
	{ label: "根管", value: 3 },
];

export const rules = {
	name: {
		required: true,
		message: "请输入预约姓名",
		trigger: "blur",
	},
	remark: {
		required: true,
		message: "请输入预约备注",
		trigger: "blur",
	},
	mobile: {
		required: true,
		message: "请输入预约电话号码",
		trigger: ["input"],
	},
	datetime: {
		required: true,
		type: "number",
		message: "请选择预约时间",
		trigger: ["blur", "change"],
	},
	doctor: {
		required: true,
		type: "number",
		message: "请选择预约医生",
		trigger: "change",
	},
};
