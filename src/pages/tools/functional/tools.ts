
/**
 * @description 工具页面
 * @author dhx
 * @date 2024-4-1
 */

import { _get } from "./type"

const get: _get<Object> = (obj, key, defaultVal) => {
  if (typeof obj !== 'object') {
    throw new Error('参数类型错误')
  }

  const keys = key.replace(/\[/, '.').replace(/\]/, '').split('.');

  return keys.reduce((o: any, cur) => {
    return (o || {})[cur] || {};
  }, obj) || defaultVal;
}

const formatMoney = (money: number) => {
  let strNum: string = money.toString();
  let len = strNum.length;
  let text = "";

  if (len <= 3) {
    return strNum;
  }

  for (let i = 1; i <= len; i++) {
    text =
      "" +
      (i % 3 === 0 && i != len ? "," : "") +
      strNum[len - i] +
      text;
  }

  return text;
};

/**
 * 返回dom元素的代理，以同步的方式实现事件监听
 * @param el 
 * @returns Object
 * @example while(true) { await a.waitclick; console.log(a.innerText); }
 */
function getWaitElement(el: string): HTMLElement | null {
  const dom: HTMLElement | null = document.getElementById(el);
  let proxy: any = null;

  if (dom instanceof HTMLElement) {
    proxy = new Proxy(dom, {
      get(target, key) {
        if (!(key as string).startsWith("wait")) {
          return Reflect.get(target, key);
        }

        return new Promise(resolve => {
          dom.addEventListener((key as string).replace("wait", ""), (e) => resolve(e.target));
        });
      }
    });
  }
  
  return proxy;
}

/**
 * 时间格式化工具
 * @param date 日期
 * @param format 格式
 * @returns string
 */
function formatDate(date, format) {
  if (!(date instanceof Date)) {
    throw new Error('请传递正确的Date对象')
  }

  const o = {
    "YY": date.getFullYear(),
    "MM": date.getMonth() + 1,
    "DD": date.getDate(),
    "hh": date.getHours(),
    "mm": date.getMinutes(),
    "ss": date.getSeconds(),
  }

  return Object.keys(o).reduce((pre, key) => {
    return pre = pre.replace(key, o[key] < 10 ? "0" + o[key] : o[key]);
  }, format);
}

// 基础工具库
const baseTool = {
  get,
  formatMoney,
  getWaitElement,
  formatDate,
}

export default baseTool;