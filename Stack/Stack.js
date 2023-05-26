"user strict";

module.exports = class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.top;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  push(element) {
    this.items.push(element);
    this.top = element;
  }
  pop() {
    if (this.items.length === 0) {
      return null;
    } else {
      if (this.items.length === 1) {
        this.items.pop();
        this.top = null;
      } else {
        this.items.pop();
        this.top = this.items[this.items.length - 1];
      }
    }
  }
};
