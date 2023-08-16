// ushbu sliding usuli array ichida bir necha
// indexlarni qirqib olib ular ustida amal bajarishimizga yordam beradi

let arr = [1, 22, 3, 94, 58, 62, 17, 83, 68, 10, 11, 12, 13, 14, 0, 16];

let maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
// console.log(maxSubarraySum(arr, 1));

let maxSum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;

  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const maxYegindi = (arr, n) => {
  let maxV = 0;
  let temp = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxV += arr[i];
  }
  temp = maxV;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    maxV = Math.max(maxV, temp);
  }
  return maxV;
};

// console.log(maxYegindi(arr, 6));
