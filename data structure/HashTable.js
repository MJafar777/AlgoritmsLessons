class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    key = key.toString();

    for (let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }

    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }
    if (this.keys().includes(key)) {
      return undefined;
    }
    this.table[index].push([key, value]);

    return this.table;
  }

  get(key) {
    let index = this._hash(key);

    if (!this.table[index]) {
      return undefined;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (key === this.table[index][i][0]) {
        return this.table[index][i][1];
      }
    }
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          arr.push(this.table[i][j][0]);
        }
      }
    }
    return arr;
  }
  value() {
    let arr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          arr.push(this.table[i][j][1]);
        }
      }
    }
    return arr;
  }
  entries() {
    let arr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          arr.push(...arr, [this.table[i][j][0], this.table[i][j][1]]);
        }
      }
    }
    return arr;
  }
}

let myHash = new HashTable();

// console.log(myHash._hash("myHash2"));
myHash.set("myHash1", 223);
myHash.set("myHash2", 224);
myHash.set("myHash3", 225);
myHash.set("myHash3", 2252);

// console.log(myHash.get("myHash2"));

console.log(myHash.set());
