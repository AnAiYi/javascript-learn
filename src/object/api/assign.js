/**
 * 实现Object.assign()静态方法
 * @author Missy
 * @param {object} target 
 * @param  {object[]} sources 
 * @returns {object}
 */
function assign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  for (const obj of sources) {
    if (obj === null) continue;
    // 遍历对象
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = obj[key];
      }
    }
  }
}
const source1 = {
  a: 1,
  b: 2,
};
const source2 = {
  c: 3,
  d: 4,
  a: 5,
};
const target = {};
assign(target, source1, source2); //{ a: 5, b: 2, c: 3, d: 4 }


