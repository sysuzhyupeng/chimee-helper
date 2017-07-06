
/**
 * chimee-helper v0.1.0
 * (c) 2017 toxic-johann
 * Released under MIT
 */

import { addTransMethod, appendCSS, caf, debounce, decodeUTF8, formatDate, formatTime, getLocalStorage, inBrowser, makeArray, raf, runRejectableQueue, runStoppableQueue, setAttrGetterAndSetter, setFrozenAttr, setLocalStorage, strRepeat, throttle, transObjectAttrIntoArray } from 'toxic-utils';
import * as toxicUtils from 'toxic-utils';
import { isFunction } from 'toxic-predicate-functions';
import * as toxicPredicateFunctions from 'toxic-predicate-functions';
import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _Promise from 'babel-runtime/core-js/promise';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Array$from from 'babel-runtime/core-js/array/from';

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser$1 = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// **********************  对象操作  ************************
/**
 * 转变一个类数组对象为数组
 */


/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */

// ********************** class operation ***************************
// class MixinBuilder {
//   constructor (superclass) {
//     this.superclass = superclass || class {};
//   }

//   with (...mixins) {
//     return mixins.reduce((c, mixin) => mixin(c), this.superclass);
//   }
// }
// export const mix = (superclass) => {
//   return new MixinBuilder(superclass);
// };
/**
 * run a queue one by one.If include function reject or return false it will stop
 * @param  {Array} queue the queue which we want to run one by one
 * @return {Promise}    tell us whether a queue run finished
 */

/**
 * run a queue one by one.If include function return false it will stop
 * @param  {Array} queue the queue which we want to run one by one
 * @return {boolean} tell the user if the queue run finished
 */

/**
 * set an attribute to an object which is frozen.
 * Means you can't remove it, iterate it or rewrite it.
 * @param {!primitive} obj
 * @param {string} key
 * @param {Anything} value
 */

/**
 * set attr on an Object. We will bind getter and setter on it if you provide to us
 * @param {!primitive} obj
 * @param {string} key
 * @param {Function} options.get
 * @param {Function} options.set
 * @param {String} prefix the origin data's prefix. We do not plan to save it by closure.
 */


// decodeUTF8




/**
 * 函数节流（控制函数执行频率）
 * @param  {Function} func 要节流控制的函数，必填
 * @return {Number}   wait 等待时长
 * @return {Object}   options {
 *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
 *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
 *                    }
 * @return {Object}   cxt 上下文对象
 * @return {Function}
 */


// requestAnimationFrame


// cancelAnimationFrame


// 根据要求的位数，将9格式化为 09\009\0009...


// video 时间格式化


/**
 * 给obj对象扩展上trans方法，用以实现methodName对应的属性方法包装为静态函数且保持上下文的功能
 * @param  {Object} obj 目标对象
 */


/**
 * 追加样式代码到head的style标签，不存在则创建
 * @param {String} cssText 样式文本
 * @return {HTMLElement}
 */


/**
 * 格式化日期对象为：年-月-日 时:分:秒.毫秒
 * @param {Date} date Date日期对象
 * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
 * @return {String}
 */


/**
 * 读取本地存储的值（不支持localStorage则降级到cookie）
 * @param {String} key 目标数据key
 * @return {String}
 */

/**
 * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
 * @param {String} key
 * @param {String} val
 * @return {String}
 */

export { inBrowser, makeArray, transObjectAttrIntoArray, runRejectableQueue, runStoppableQueue, setFrozenAttr, setAttrGetterAndSetter, decodeUTF8, debounce, throttle, raf, caf, strRepeat, formatTime, addTransMethod, appendCSS, formatDate, getLocalStorage, setLocalStorage };

export * from 'toxic-utils';
export * from 'toxic-predicate-functions';
