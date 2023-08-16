// mulitple pointer bizga arr ichidagi qandaydir ikkta qiymat
// ustida amal bajarmoqchi bo'lganimizda kerak bo'ladi

// arr -> [1,2,3,4,5,6,4,9,25 ];

// misol uchun ikkta sonning yeg'indisi 0 ga teng bo'lgan qiymatni toping

const myMulti = (arr) => {
  // O(n)^2
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(myMulti([-8, -4, -2, -1, 0, 3, 5, 6, 7, 8]));

const myMutiples = (arr) => {
  // O(n)
  if (arr.length === 0) return undefined;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    }
  }
};
// console.log(myMutiples([-8, -4, -2, -1, 0, 3, 5, 6, 7, 8]));

// masala

const problem = (array) => {
  let first = 0;
  let second = 1;

  while (second <= array.length) {
    if (array[first] === array[second]) {
      second++;
    } else {
      ++first;
      array[first] = array[second];
      second++;
    }
  }
  return first;
};
console.log(problem([-8, -4, -2, -1, 0, 3, 3, 5, 6, 7, 8]));
