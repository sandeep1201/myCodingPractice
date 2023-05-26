"use strict";

const LinkedList = require("./LinkedList");
const Node = require("./Node");

LinkedList.prototype.isEmpty = function () {
  return this.head == null; //
};

LinkedList.prototype.detectLoop = function (list) {
  let cycle = false; //Set to true or false
  let headNode = list.getHead();
  let headNext = headNode.nextElement;
  //Write your code here
  let currentNode = headNode;
  while (currentNode.nextElement != null) {
    debugger;
    if (
      currentNode.nextElement.data === headNode.data &&
      currentNode.nextElement.data === headNext.data
    ) {
      cycle = true;
    }
    if ((cycle = true)) {
      break;
    }
    currentNode = currentNode.nextElement;
  }

  return cycle;
};
LinkedList.prototype.findMid = function(list) {
    let length = list.length();
    let mid = math.floor(length/2);
    let currentNode = list.getHead();
    let index = 1;

    while(currentNode != null) {
        if(mid == index) {
            return currentNode;
        }
        currentNode = currentNode.nextElement;
    }
}

let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(4);(1);
list.insertAtTail(8);
list.insertAtTail(5);
list.detectLoop(list);
list.printList();
