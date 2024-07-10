// ECMAScript6 提供了Promise对象，用来监听一个异步操作的完成与失败

/** 实现promisify
 * @author Missy
 * @param {function(...[*]):*} original 
 * @returns {function(...[*]=):Promise<unknown>}
 */
function promisify(original) {
  // 返回一个函数
  return function (...args) {
    // 函数返回一个promise
    return new Promise((resolve, reject) => {
      // 调用函数
      original.call(this, ...args, (err, data) => {
        // if (err) {
        //   reject(err);
        // } else {
        //   resolve(data);
        // }
        // 优化后
        err ? reject(err) : resolve(data);
      });
    });
  };
}

// 正常使用fs.readFile
fs.readFile("./data.json", (err, data) => {
  if (err) throw err;
});

// 使用promisify
const readFile = promisify(fs.readFile); // 会得到一个函数
readFile("./data.json")
  .then((data) => {
    // do something
  })
  .catch((err) => {
    throw err;
    // handle error
  });
