
// testcases
let number = 756;
// number = 345;
// number = 123;
// number = 555;

let a = Math.trunc(number / 100); // yuzlik
let b = Math.trunc(number - a * 100);
let c = Math.trunc(b / 10); // o'nlik
let d = b - c * 10 //birlik
let result = (c * 100) + (a * 10) + d;

console.log(result)



