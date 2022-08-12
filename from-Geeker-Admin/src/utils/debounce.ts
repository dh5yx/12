/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 16:07:03
 * @LastEditors: dh
 * @LastEditTime: 2022-07-26 17:09:12
 */
export function debounce(func: Function, wait: number, immediate?: Boolean) {
  let timeout: null | number;
  return function (...args: any) {
    // 保留调用时的 this 上下文
    let context = this;
    // 每次事件被触发时，都去清除之前的旧定时器
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = window.setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = window.setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

export function throttle(fn, delay) {
  // last 为上一次触发回调的时间
  let last = 0;
  // 将 throttle 处理结果当作函数返回
  return function () {
    // 保留调用时的 this 上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;
    // 记录本次触发回调的时间
    let now = +new Date();

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last >= delay) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
      last = now;
      fn.apply(context, args);
    }
  };
}
