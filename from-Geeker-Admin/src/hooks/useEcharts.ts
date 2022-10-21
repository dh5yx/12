/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 17:10:01
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 11:34:45
 */
import { onBeforeUnmount } from 'vue';
import type { ECharts, EChartsCoreOption } from 'echarts';

export default function useEcharts(myChart: ECharts, options: EChartsCoreOption) {
	myChart.setOption(options);

	function echartsResize() {
		myChart && myChart.resize();
	}

	window.addEventListener('resize', echartsResize);

	onBeforeUnmount(() => {
		window.removeEventListener('resize', echartsResize);
	});
}
