/**
 * 实现 Set
 * @author Missy
 * @param {*[]} values 
 * @returns {Set}
 */
class Set {
  constructor(values) {
    this._values = [];
    this.size = 0;
    // 迭代属性
    this[Symbol.iterator] = this.values;

    values.length &&
      values.forEach((v) => {
        this.add(v);
      });
  }

  has(value) {
    return this._values.includes(value);
  }
  add(value) {
    if (!this.has(value)) {
      this._values.push(value);
      this.size++;
    }
    return this;
  }
  delete(value) {
    if (this.has(value)) {
      // this.values.splice(this.values.indexOf(value), 1);
      this._values = this._values.filter((v) => v!== value);
      this.size--;
    }
    return this;
  }

  clear() {
    this._values = [];
    this.size = 0;
  }

  values() {
    return this._createIterator([...this._values]);
  }

  entries() {
    const entries = [];
    // TODO 待完善
    // ...
  }

}
