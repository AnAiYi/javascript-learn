const add = function (a, b, c, d) {
  return a + b + c + d;
};

const partialAdd = partial(add, 1, 2);

console.log(partialAdd(3, 4));

/**
 * 偏函数
 * @author Missy
 * @param {function(...[*]):*} fn 
 * @param  {*} args 
 * @returns {function(...[*]):*}
 */
function partial(fn, ...args) {
  return function (...rest) {
    // return fn(...args, ...rest);
    return fn.call(this, ...args, ...rest);
  };
}