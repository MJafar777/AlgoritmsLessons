// bu ham frequancy ga o'xshaydi
// u ham ikkta qiymat ichidagi malumotni bir biri bilan solishtiradi

const myAnagram = (first, second) => {
  if (first.length !== second.length) return false;

  let frequancy1 = {};
  let frequancy2 = {};

  for (let val of first) {
    frequancy1[val] = (frequancy1[val] || 0) + 1;
  }
  for (let val of second) {
    frequancy2[val] = (frequancy2[val] || 0) + 1;
  }

  for (let key in frequancy1) {
    if (frequancy1[key] !== frequancy2[key]) {
      return false;
    }
  }

  return true;
};
// console.log(myAnagram("anagrams", "nagaramm")); //false
// console.log(myAnagram("jafar", "rafaj")); // true

const AnagramChalange = (a, b) => {
  if (a.length !== b.length) return false;

  let aa = {};
  let bb = {};

  for (let val of a) {
    aa[val] = (aa[val] || 0) + 1;
  }
  for (let val of b) {
    bb[val] = (bb[val] || 0) + 1;
  }

  for (let key in aa) {
    if (aa[key] !== bb[key]) {
      return false;
    }
  }

  return true;
};
// console.log(AnagramChalange("aaz", "zza")); // false
// console.log(AnagramChalange("qwerty", "qeywrt")); // true
// console.log(AnagramChalange("jafar", "rafaj")); // true
