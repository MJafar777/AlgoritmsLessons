const BubleSort = (arr) => {
  let swap;

  for (let i = arr.length; i > 0; i--) {
    swap = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }
  return arr;
};
console.log(BubleSort([8, 2, 5, 12, 4, 1, 3, 6]));
