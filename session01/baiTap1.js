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
const str3 = "kingKongMoney";
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

//Input
let input = "image.img";
let input1 = "phucloctho.jpg";
let input2 = "tranthienchi.document";

function get(input) {
  //   let output = input.split(".")[0];
  let extension = input.split(".")[1];
  return extension;
}
//Output
console.log("Bài 1, câu 4: ");
console.log("Input: " + input + " //Output: " + get(input));
console.log("Input: " + input1 + " //Output: " + get(input1));
console.log("Input: " + input2 + " //Output: " + get(input2));

// Hết B1.câu 4

// -------------*********------------ //
