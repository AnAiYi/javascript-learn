/**
 * 实现数组原型方法 find
 * @author Missy
 * @param {(currentValue: *, index: number, array: *[]) => boolean} callback
 * @param {object | undefined} thisArg
 * @returns {*}
 */
function _find(callback, thisArg) {
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

  let index = 0;
  // 遍历数组
  while (index < len) {
    // 当有一个满足测试函数就立即返回
    if (callback.call(thisArg, arr[index], index, arr)) {
      return arr[index];
    }
    index++;
  }
  // 如果没有一个满足条件的话，则返回undefined
  return undefined;
}

const arr = [1, 2, 3, 4, 5];
arr.find((item) => item > 2); // 3
