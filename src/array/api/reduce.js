/**
 * 实现数组原型方法 reduce
 * @author Missy
 * @param {(accumulator: number, currentValue: *, index: number, array: *[]) => *} callback 
 * @param {number | undefined} initialValue 
 * @returns {*[]}
 */
function _reduce(callback, initialValue) {
  // 判断this不等于null
  if (this === null) {
    throw new TypeError("this is null or not defined");
  }
  // 判断callback是不是一个函数
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  // 获取数组的长度
  const arr = this;
  const len = arr.length;

  // 在没有初始值的空数组上调用callback将报错
  if (len === 0 && initialValue === undefined) {
    throw new TypeError("reduce of empty array with no initial value");
  }

  let index = 0;
  let accumulator = initialValue;
  // 没传入初始值的时候，取数组第一个值为初始值
  if (initialValue === undefined) {
    accumulator = arr[0];
    index = 1;
  }
  // 遍历数组
  while (index < len) {
    // accumulator += arr[index];
    // 更新accumulator
    accumulator = callback.call(thisArg, accumulator, arr[index], index, arr);
    index++;
  }
  return newArr;
}
const arr = [1, 2, 3, 4, 5];
arr.reduce((prev, cur) => prev + cur); // 15
