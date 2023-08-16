// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.tail) return undefined;
//     var current = this.tail;
//     var newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;

//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined;

//     var current = this.head;

//     this.head = current.next;

//     this.length--;

//     return current;
//   }
//   unShift(val) {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode = this.head.next;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     var counter = 0;
//     var current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, value) {
//     var getElm = this.getElm(index);
//     if (getElm) {
//       getElm.val = value;
//     }
//     return this;
//   }
//   insert(index, value) {
//     if (index < 0 || index >= this.length) return false;

//     if ((index = this.length)) {
//       this.push(value);
//       return true;
//     }

//     if ((index = 0)) {
//       this.unShift(value);
//       return true;
//     } else {
//       var newNode = new Node(value);
//       var elm = this.get(index - 1);
//       var temp = elm.next;
//       newNode.next = temp;
//       elm.next = newNode;
//       this.length++;
//       return true;
//     }
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if ((index = this.length - 1)) {
//       return this.pop();
//     }
//     if ((index = 0)) {
//       return this.shift();
//     } else {
//       var previouse = this.get(index - 1);
//       var removeElm = previouse.next;
//       previouse.next = removeElm.next;
//       this.length--;
//       return removeElm;
//     }
//   }
//   revorse(){

//   }
// }

// const list = new SingleLinkedList();
// list.push("jafar");
// list.push("abbos");
// list.push("as");
// list.push("ds");
// list.push("sdf");
// list.push("sdff");
// list.push("lola");

// list.unShift("Jafarbek");
// // list.insert(1, "helehelehele");
// list.remove(1);
// console.log(list.pop());

// console.log(list.shift());
// console.log(list);
// //////////////////////////////////////////////////////////////////////////

// SingleLinkedList

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   add(val) {
//     let node = new Node(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }

//     this.length++;
//   }
//   pop() {
//     if (!this.length) return null;
//     let temp = this.tail;
//     var newTail = temp;
//     while (temp.next) {
//       newTail = temp;
//       temp = temp.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;

//     return temp;
//   }
// }

// let node = new Node("mutant");

// let list1 = new SingleLinkedList("hi guys");
// list1.add("maymun h");
// list1.add("maymun x");
// list1.pop();
// console.log(node, list1);
// //////////////////////////////////////////////////////////////////

// doubleLinkedList

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  unShift(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return node;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let count, current;
    if (index <= middle) {
      count = 0;
      current = this.head;
      while (index != count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.lengthlength - 1;
      current = this.tail;
      while (index != count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    } else return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    removedNode.prev.next = afterNode;
    removedNode.next.prev = beforeNode;

    this.length--;
    return removedNode;
  }
  getMax(val) {
    let node = new Node(val);

    let index = 0;
    let result;
    if (node.length === 0) return node;
    if (val.length == 1) {
      this.head = node;
      this.tail = this.head;
      return tail;
    }
    while (index != node) {
      if (node.value > node.next) {
        result = node.value;
      } else if (node.value < node.next) {
        result = node.next;
      }
      index++;
    }
    return result;

    // 12, 3, 43, 22, 24, 53, 2;
  }
}

let doublyLinkedList = new DoubleLinkedList();
doublyLinkedList.getMax(12);
doublyLinkedList.getMax(3);
doublyLinkedList.getMax(43);
doublyLinkedList.getMax(22);
doublyLinkedList.getMax(24);
doublyLinkedList.getMax(2);
console.log(doublyLinkedList);

// doublyLinkedList.unShift("jafar");
// doublyLinkedList.unShift("ohayoo");

// let list = new doubleLinkedList();

// doublyLinkedList.push("alex");
// doublyLinkedList.push("anna");
// doublyLinkedList.push("vanna");

// doublyLinkedList.get(4);
// doublyLinkedList.set(4, "hello");
// console.log(doublyLinkedList);
// let node = new Node("jafar");
// let node1 = new Node("abbos");
// let node2 = new Node("miron");

// console.log(node, node1, node2);

// console.log(list);
// //////////////////////////////////////////////////////////////////

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    return this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

let stack = new Stack();
stack.push(121);
stack.push(26);
stack.push(22);
stack.push(72);
stack.pop();

class Queues {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(value) {
    this.first.push(value);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

let queues = new Queues();

queues.add(2);
queues.add(12);
queues.add(32);
queues.add(22);
queues.remove();

console.log(queues.peek());
