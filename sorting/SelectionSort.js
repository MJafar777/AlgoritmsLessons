const SelectionSort = (arr) => {
  let lovest;
  for (let i = 0; i < arr.length; i++) {
    lovest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lovest]) {
        lovest = j;
      }
    }

    if (i !== lovest) {
      let temp = arr[i];
      arr[i] = arr[lovest];
      arr[lovest] = temp;
    }
  }
  return arr;
};
// console.log(SelectionSort([8, 2, 5, 12, 4, 1, 3, 6]));
