
/**
 * 实现数组原型方法 some
 * @author Missy
 * @param {(currentValue: *, index: number, array: *[]) => boolean} callback
 * @param {object | undefined} thisArg
 * @returns {boolean}
 */
function _some(callback,thisArg) {
  // 判断this不等于null
  if (this === null) {
    throw new TypeError("this is null or not defined");
  }
  // 判断callback是不是一个函数
  if (typeof callback!== "function") {
    throw new TypeError(callback + " is not a function");
    
  }
  // 获取数组的长度
  const arr = this;
  const len = arr.length;

  let index = 0;
  // 遍历数组
  while (index < len) {
    // 只要一个元素没有通过测试，即返回true
    if(!callback.call(thisArg, arr[index], index, arr)) {
      return true;
    }
    index++;
  }
  // 遍历结束还没有通过测试，即返回false
  return false;

  
}

const arr = [1, 2, 3, 4, 5];
arr.some((item) => item > 2); // true