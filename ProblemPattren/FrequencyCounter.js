const array = [1, 2, 2, 3, 3, 4, 4, 67, 5, 5, 5, 1, 3, 15, 14, 67];
//////////////////////////////////////////////////////////////////////////////

const myFrequencyCounter = (arr) => {
  if (arr.length === 0) return;
  let freequancy = {};

  for (let val of arr) {
    freequancy[val] = (freequancy[val] || 0) + 1;
  }

  return freequancy;
};
console.log(myFrequencyCounter(array));
//////////////////////////////////////////////////////////////////////////////
const myFree = (arr) => {
  if (arr.length === 0) return;
  let free = {};

  for (let val of arr) {
    free[val] = (free[val] || 0) + 1;
  }
  return free;
};
console.log(myFree(array));
//////////////////////////////////////////////////////////////////////////////
function myFreq(arr) {
  if (arr.length === 0) return;
  let freq = {};
  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return freq;
}
console.log(myFreq(array));
