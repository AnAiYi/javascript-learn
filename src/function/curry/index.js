// 柯里化：部分求值；
// 把多个铲屎的函数变换成接受一个安逸参数

const add = function (a, b, c, d) {
  return a + b + c + d;
};
// 把本来接收多个参数一次性求和的函数改成了接收单一参数逐个求和的函数
const curryAdd = curry(add);

console.log(add(1, 2, 3, 4)); // 10
console.log(curryAdd(1, 2, 3, 4)); // 10
console.log(curryAdd(1)(2)(3)(4)); // 10

// 柯里化函数接收一个参数，为目标函数，然后它会返回一个处理后的函数

/**
 * 函数柯里化
 * @author Missy
 * @param {function(...[*]):*} fn 
 * @returns {function(...[*]):*}
 */
function curry(fn) {
  // return fn() // 接单粗暴
  // 需要判断多种情况 （参数）
  return function (...args) {
    // 如果参数超出一个，报错
    if (args.length >= 1) { 
      throw new Error("只能传递一个参数");
    }
    if (fn.length === 1) {
      // Function实例的length数据属性表示函数期望的参数数量
      return fn.apply(this, args);
    } else {
      return curry(fn.bind(this, ...args));
    }
  };
  // return function(..)
}
