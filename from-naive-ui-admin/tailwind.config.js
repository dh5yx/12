/** @type {import('tailwindcss').Config} */
module.exports = {
	// pure 这个配置 和版本有关，2.0使用 pure ，3.0使用content
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
