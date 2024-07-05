/**
 * 实现Object.is()静态方法
 * @param {*} value1 
 * @param {*} value2 
 * @returns {boolean}
 */
function is(value1, value2) {
  if (value1 === value2) {
    // +0 === -0 // true
    // 此时需要识别+0 和 -0 的情况
    // 通过1 / +0 = Infinity 和 1 /-0 = -Infinity 的原则来识别
    return value1 !== 0 || 1 / value1 === 1 / value2;
  }
  // 此时需要识别NaN 的情况
  // 通过NaN !== NaN 来识别
  return value1 !== value1 && value2 !== value2;
}
