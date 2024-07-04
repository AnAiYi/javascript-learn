/**
 * 实现数组原型方法 map
 * @author Missy
 * @param {(currentValue: *, index: number, array: *[]) => *} callback 
 * @param {object | undefined} thisArg 
 * @returns {*[]}
 */
function _map(callback, thisArg) {
  // 判断this不等于null
  if (this === null) {
    throw new TypeError("this is null or not defined");
  }
  // 判断callback是不是一个函数
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;
  const len = arr.length;
  // 初始化返回数组
  let newArr = [];
  
  let index = 0;
  // 遍历数组
  while (index < len) {
    // 将返回值保存到newArr
    newArr[index] = callback.call(thisArg, arr[index], index, arr);
    index++;
  }
  // 返回新数组
  return newArr;
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item + 1);
