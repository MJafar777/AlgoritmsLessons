class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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

  find(value) {
    let current = this.root;

    let find = false;

    while (current.value && find == true) {
      if (current.value < value) {
        current = current.left;
        return current;
      }
      if (current.value > value) {
        current = current.right;
        return current;
      } else {
        this.find = true;
        return current;
      }
    }
  }
}

let test = new BinarySearchTree();

test.insert(1);
test.insert(12);
test.insert(31);
test.insert(14);
test.insert(51);
test.insert(71);
test.insert(13);
// test.find(71);
console.log(test.find(71));
