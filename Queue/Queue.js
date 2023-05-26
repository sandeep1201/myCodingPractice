import {DoubleLinkedList} from ("../DoubleLinkedList/DoubleLinkedList");

export class Queue {
  constructor() {
    this.items = new DoubleLinkedList();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items.getHead();
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    return this.items.insertTail(element);
  }

  dequeue() {
    return this.items.removeHead();
  }
};
