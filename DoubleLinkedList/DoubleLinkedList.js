const Node = require('./Node'); 

module.exports = class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(data) {
    let tempNode = new Node(data);
    tempNode.nextElement = this.head;
    if (this.isEmpty()) {
      this.tail = null;
      this.head = null;
      return this;
    }
    this.head.prevElement = tempNode;
    this.head = tempNode;
    return this;
  }

  isEmpty() {
    return this.head == null;
  }
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write("<->");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }
  getHead() {
    return this.head;
  }
  insertAtTail(data) {
    let tempNode = new Node(data);
    tempNode.previousElement = this.tail;
    if (this.isEmpty()) {
      this.head = tempNode;
      this.tail = tempNode;
      return this;
    }
    this.tail.nextElement = tempNode;
    this.tail = tempNode;
    return this;
  }
  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;
    if (this.head == null) {
      this.tail = null;
      return this;
    }
    this.head.previousElement = null;
    return this;
  }
};