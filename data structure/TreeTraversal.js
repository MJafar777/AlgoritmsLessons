class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinerySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (current.value < val) {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  // BFS() {
  //   var node = this.root,
  //     data = [],
  //     queue = [];

  //   queue.push(node);

  //   while (queue.length) {
  //     node = queue.shift();

  //     data.push(node.value);
  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }

  //   return data;
  // }

  BFS() {
    var current = this.root,
      data = [],
      queue = [];
    queue.push(current);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let test = new BinerySearchTree();

test.insert(2);
test.insert(22);
test.insert(42);
test.insert(25);
test.insert(12);
test.insert(28);

// console.log(test.BFS());
// console.log(test.DFSPreOrder());
// console.log(test.DFSInOrder());
// console.log(test.DFSPostOrder());
