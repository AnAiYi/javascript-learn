// 函数节流和函数防抖一样，都是用于优化高频调用函数的。
// 而节流刚好和防抖相反，函数节流是在执行后一段时间内，无法重复执行函数。

function throttle(func, delay) {
  let timer = null; //存储定时器
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}