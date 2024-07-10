function _call(thisArg,...args) {
  // 如果没有传thisArg默认为全局
  // 如果thisArg 没有别显式定义，则将其付这位当前环境下的全局对象。在浏览器环境中没如果window对象存在且不为undefined，则使用window，否则，在Node.js环境中使用global
  if (thisArg === undefined) {
    thisArg = window !==  undefined ? window : global;
  }
  // 有可能thisArg传的不是对象(确保一定是对象)
  thisArg = Object(thisArg);

  const fnKey = Symbol();
  // 给thisArg对象添加一个属性，属性名为fnKey，属性值为函数
  thisArg[fnKey] = this;

  // 执行函数
  const result = thisArg[fnKey](...args);
  // 删除thisArg对象中添加的fnKey属性
  delete thisArg[fnKey];

  return result;

}