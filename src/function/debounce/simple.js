// 函数防抖的作用就是在事件触发的一段时间里，才会执行函数，如果这段时间内又触发函数，则会重新计时。

// 按道理来说，你给一个事件绑定了函数，那么你触发这个事件，就会调用这个函数，频繁触发，就会频繁调用；
// 存在问题：如果这个函数执行的时间比较长，那么就会造成页面卡顿，影响用户体验。比如ajax请求;
// 解决办法：尽管事件频繁触发，但是我们只执行时间间隔内最后一个触发的事件函数；
// 解决方案：
// 1. debounce 防抖
// 2. throttle 节流
// 在前端开发中会遇到一些频繁的事件触发，比如
// 1. window 的 resize、scroll
// 2. mousedown、mousemove
// 3. keyup、keydown
// 一段时间内 再次触发 重新计时
function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer) // 每次调用时，清楚之前的定时器
    // 重新新建一个定时器
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
  // return function (...args) {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     func.apply(this, args);
  //   }, delay);
  // };
}