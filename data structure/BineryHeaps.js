class myMaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 18, 27, 12, 33];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;

      this.values[idx] = parent;

      idx = parentIdx;
    }
  }
}

let mx = new myMaxBinaryHeaps();

mx.insert(87);
mx.insert(86);
mx.insert(85);
mx.insert(84);
mx.insert(83);

console.log(mx);
