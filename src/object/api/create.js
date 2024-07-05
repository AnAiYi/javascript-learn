/**
 * 实现Object.create()静态方法
 * @author Missy
 * @param {object | null} proto 
 * @param {object | undefined} propertiesObject 
 * @returns {object}
 */
function create(proto, propertiesObject = undefined) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Object prototype may only be an Object or null.");
  }
  if (propertiesObject === null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  function F() {
    F.prototype = proto;
    const obj = new F();
  }
  // TODO 待完善
  // ...
}
