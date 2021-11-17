//Bài tập 1
//B1.Câu 1
function formatMoney(number) {
  //Input
  const pieces = number.toFixed(2).split("");
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ",");
  }
  return pieces.join("");
}
//Output
let numb1 = 232423400.3999;
let numb2 = 1000000000;
let numb3 = 1234567;
let numb4 = 123398766;
console.log("Bài tập 1, câu 1: ");
console.log("Input: " + numb1 + " //Output: " + formatMoney(numb1));
console.log("Input: " + numb2 + " //Output: " + formatMoney(numb2));
console.log("Input: " + numb3 + " //Output: " + formatMoney(numb3));
console.log("Input: " + numb4 + " //Output: " + formatMoney(numb4));
// Hết B1.câu 1

//B1.Câu 2
//Input
var pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log;
var abbrev = ["K", "M", "B", "T"];

function round(n, precision) {
  var prec = Math.pow(10, precision);
  return Math.round(n * prec) / prec;
}

function formatMoneyAbb(n) {
  var base = floor(log(abs(n)) / log(1000));
  var fix = abbrev[Math.min(3, base - 1)];
  base = abbrev.indexOf(fix) + 1;
  return fix ? round(n / pow(1000, base), 3) + fix : "" + n;
}
//Output
console.log("Bài 1, câu 2:");
console.log(
  "Input: " + 210000000000 + " //Output: " + formatMoneyAbb(210000000000)
);
console.log("Input: " + 330300 + " //Output: " + formatMoneyAbb(330300));
console.log("Input: " + 400400500 + " //Output: " + formatMoneyAbb(400400500));
console.log(
  "Input: " + 129290000000000 + " //Output: " + formatMoneyAbb(129290000000000)
);

// Hết B1.câu 2

//B1.Câu 3
//Input
const str = "oneTwoThreeFourFive";
const str2 = "carCakeCanCoin";
const str3 = "kingKongMoneyVip";
function countName(str) {
  const res = Array.from(str).reduce((acc, char) => {
    return (acc += char.toUpperCase() === char);
  }, 0);
  const numWord = res + 1;
  return numWord;
}
// const res = Array.from(str).reduce((acc, char) => {
//   return (acc += char.toUpperCase() === char);
// }, 0);
// const numWord = res + 1;

//Output
console.log("Bài 1, câu 3: ");
console.log("Input: " + str + " //Output: " + countName(str));
console.log("Input: " + str2 + " //Output: " + countName(str2));
console.log("Input: " + str3 + " //Output: " + countName(str3));

// Hết B1.câu 3

//B1.Câu 4
//Input ở HTML

//Output
function getOutput() {
  outputFile.value = inputFile.value.split(".")[0];
  extension.value = inputFile.value.split(".")[1];
}
// Hết B1.câu 4

// -------------*********------------ //

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
let min = 10;
let max = 300;

//Output
console.log(
  "Bài 2, câu 2: Min: " +
    min +
    " Max: " +
    max +
    ". Kết quả: " +
    randomNumber(min, max)
);
//Hết B2.câu 2

//B2.Câu 3
//Input
arrElement = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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
  "Input: " + arrElement + " //Output: " + randomElement(arrElement, 1)
);

//Hết B2.câu 3

//B2.Câu 4
//Input
let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3]; //=> [4,6]

let missingE = brr.filter((miss) => !arr.includes(miss));

//Output
console.log("Bài 2, câu 3: ");
console.log("Input: " + "Mảng a: " + arr + " Mảng B: " + brr);
console.log("Output: " + missingE);
//Hết B2.câu 4

// -------------*********------------ //

// Bài tập 3
// We have a rectangle garden with 3 row and 5 column, each cell had a bomb or no bomd, ( 0: SAFE, 1: BOMB)
// problem: find all the safe way to go from the left to the right of the garden.
// Input: [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
// Output : [ [0,0,0,0,0] , [0,0,0,0,1]
