
/**
 * 实现数组原型方法 findIndex
 * @author Missy
 * @param {(currentValue: *, index: number, array: *[]) => boolean} callback
 * @param {object | undefined} thisArg
 * @returns {number}
 */
function _findIndex(callback, thisArg) {
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
    // 当有一个满足测试函数就立即返回对应的索引
    if (callback.call(thisArg, arr[index], index, arr)) {
      return index;
    }
    index++;
  }
  // 如果没有一个满足条件的话，则返回-1
  return -1;
}
