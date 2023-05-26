"use strict";
import { Queue } from("./Queue");
import {DoublyLinkedList} from ("../DoubleLinkedList/DoubleLinkedList");
function findBin(number) {
  let result = [];
  let myQueue = new Queue();
  var s1, s2;
  myQueue.enqueue(1);
  for (var i = 0; i < number; i++) {
    result.push(String(myQueue.dequeue()));
    s1 = result[i] + "0";
    s2 = result[i] + "1";

    myQueue.enqueue(parseInt(s1));
    myQueue.enqueue(parseInt(s2));
  }

  return result;
}

console.log(findBin(5));
