/**
 * 使用reduce实现简易版扁平化
 * @author Missy
 * @param {*[]} array 
 * @returns {*[]}
 * @example [1, 2, [3, 4, [5, 6]], 7, 8].flat() // [1, 2, 3, 4, 5, 6, 7, 8]
 */
const _flat = function (array) {
  return array.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? _flat(cur) : cur);
  }, []);
};
const arr = [1, 2, [3, 4, [5, 6]], 7, 8];
arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]
