/**
 * 实现字符串原型方法 slice
 * @description 截取字符串的一部分
 * @author Missy
 * @param {number} beginIndex 
 * @param {number} endIndex 
 * @returns {string}
 */
function slice(beginIndex, endIndex) {
  const str = this;
  // 处理beginIndex为负数的情况
  // if (beginIndex < 0) {
  //   beginIndex = str.length + beginIndex;
  // }
  // if 结构优化
  beginIndex = beginIndex <0 ? str.length + beginIndex : beginIndex;

  // 处理endIndex为负数或者不传的情况
  // if (endIndex < 0) {
  //   endIndex = str.length + endIndex;
  // }
  // if (!endIndex) {
  //   endIndex = str.length;
  // }
  // if 结构优化
   endIndex = endIndex < 0? str.length + endIndex : endIndex === undefined? str.length : endIndex;

  // 处理beginIndex大于endIndex的情况
  if (beginIndex > endIndex) {
    return "";
  }
  let result = "";
  for (let index = beginIndex; index < endIndex; index++) {
    result += str[index];
  }
}
