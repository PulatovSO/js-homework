
// testcases
let number = 756;
// number = 128;
// number = 462;
// number = 946;

let a = Math.trunc(number / 100); // yuzlik
let b = Math.trunc(number - a * 100);
let c = Math.trunc(b / 10); // o'nlik
let d = b - c * 10 //birlik
let result = (d * 100) + (c * 10) + a;

console.log(result)
