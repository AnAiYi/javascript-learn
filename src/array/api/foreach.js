/**
 * 实现数组原型方法 foreach
 * @author Missy
 * @param {(currentValue: *, index: number, array?: *[]) => *} callback
 * @param {object | undefined} thisArg
 * @returns {void}
 */
function _forEach(callback, thisArg) {
  // 判断this不等于null
  // TODO 是否需要判断为一个数组
  // if(!Array.isArray(this)) {
  //   throw new TypeError(this + " is not a array");
  // }
  if (this === null) {
    throw new TypeError("this is null or not defined");
  }
  // 判断callback是不是一个函数
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }

  const arr = this;
  const len = arr.length;

  let index = 0;
  // 遍历数组
  while (index < len) {
    // 使用call调用函数
    callback.call(thisArg, arr[index], index, arr);
    index++;
  }
}

const arr = null;
arr.forEach((item, index) => {
  console.log(item, index);
});
