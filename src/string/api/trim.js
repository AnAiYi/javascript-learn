/**
 * 实现字符串原型方法 trim()
 * @description: 去除字符串两端的空格
 * @author Missy
 * @returns {String}
 */
function trimF() {
  console.log('this',this)
  const str = this;
  return str.replace(/^\s*|\s*$/g, '')
}
