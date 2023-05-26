"use strivt";
const Node = require("./Node.js");
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  getHead() {
    return this.head;
  }
  isEmpty() {
    return this.head == null;
  }
  insertAtHead(data) {
    let tempNode = new Node(data);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }
  insertAtTail(data) {
    let tempNode = new Node(data);
    let currentNode = this.head;
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = tempNode;
    return this;
  }
  printList() {
    if (this.isEmpty()) {
      console.log("Empty lsit");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }
  length(list) {
    let length = 0;
    let currentNode = list.getHead();
    if (list.isEmpty()) {
      return length;
    }
    while (currentNode != null) {
      length = length + 1;
      currentNode = currentNode.nextElement;
    }
    return length;
  }
};
