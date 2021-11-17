//Bài tập 2

//B2.Câu 1
function factorialNumb(number) {
  let result = 1;
  if (number === 0 || number === 1) {
    return result;
  } else {
    for (var i = number; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}
//Input
let number = [6, 8, 10, 12, 4];
//Output
console.log("Bài 2, câu 1:");
console.log("Input: " + number[0] + " //Output: " + factorialNumb(number[0]));
console.log("Input: " + number[1] + " //Output: " + factorialNumb(number[1]));
console.log("Input: " + number[2] + " //Output: " + factorialNumb(number[2]));
console.log("Input: " + number[3] + " //Output: " + factorialNumb(number[3]));

//Hết B2.câu 1

//B2.Câu 2
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//Input
let min = [1, 10, 30, 100];
let max = [300, 50, 10000, 1000000];

//Output
console.log("Bài 2, câu 2: ");
console.log(
  "Input: Min: " +
    min[0] +
    " Max: " +
    max[0] +
    ". Kết quả: " +
    randomNumber(min[0], max[0])
);
console.log(
  "Input: Min: " +
    min[1] +
    " Max: " +
    max[1] +
    ". Kết quả: " +
    randomNumber(min[1], max[1])
);
console.log(
  "Input: Min: " +
    min[2] +
    " Max: " +
    max[2] +
    ". Kết quả: " +
    randomNumber(min[2], max[2])
);
console.log(
  "Input: Min: " +
    min[3] +
    " Max: " +
    max[3] +
    ". Kết quả: " +
    randomNumber(min[3], max[3])
);
//Hết B2.câu 2

//B2.Câu 3
//Input
arrElement = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
arrElement1 = [22, 33, 55, 103, 104, 2020, 2021, 100000, 1230102];

function randomElement(arr, count) {
  let len = arr.length;
  let lookup = {};
  let tmp = [];

  if (count > len) {
    count = len;
  }
  for (let i = 0; i < count; i++) {
    let index;
    do {
      index = ~~[Math.random() * len];
    } while (index in lookup);
    lookup[index] = null;
    tmp.push(arr[index]);
  }

  return tmp;
}

//Output
console.log("Bài 2, câu 3:");
console.log(
  "Input: " +
    "[" +
    arrElement +
    "]" +
    " //Output: " +
    randomElement(arrElement, 1)
);
console.log(
  "Input: " +
    "[" +
    arrElement1 +
    "]" +
    " //Output: " +
    randomElement(arrElement1, 1)
);

//Hết B2.câu 3

//B2.Câu 4
//Input
let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3]; //=> [4,6]

let arr2 = [10, 2, 5, 3, 5, 3];
let brr2 = [10, 2, 5, 4, 6, 3, 5, 3, 9, 111, 502];

function missingE(arr, brr) {
  let missingE = brr.filter((miss) => !arr.includes(miss));
  return missingE;
}

// let missingE = brr.filter((miss) => !arr.includes(miss));

//Output
console.log("Bài 2, câu 4: ");
console.log("Input: " + "Mảng a: " + arr + " Mảng B: " + brr);
console.log("Output: " + missingE(arr, brr));

console.log("Input: " + "Mảng a: " + arr2 + " Mảng B: " + brr2);
console.log("Output: " + missingE(arr2, brr2));
//Hết B2.câu 4

// -------------*********------------ //
