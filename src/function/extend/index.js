// 在ES6语法出来之前，JavaScript还没有class和extend，英雌我们需要通过function去封装一个构造函数，来实现类，而对于类继承，也需要我们自己去封装实现。
// 对于继承类，无非就是需要在子类上继承到父类的原型属性和原型方法。

// 1.原型链继承
// 实现类
function Colors(color) {
  this.colors = ["red", "blue"];
  if (color) {
    this.colors.push(color);
  }
}

Colors.prototype.getColors = function () {
  return this.colors;
};

// 原型链实现(通过创建一个父类实例，然后绑定到子类的原型链上)
function Color1() {}
Color1.prototype = new Colors();


// 缺点
// 1. 子类在实例化的时候无法给父类构造函数传参
// 2. 子类原型包含的引用类型属性将被所有实例共享

const c1 = new Color1();

//  TODO 待完善
// 2. 构造函数实现
// 3. 寄生式组合继承
