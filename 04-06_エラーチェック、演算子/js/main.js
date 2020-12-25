console.log("hello world from main.js");

// \ の直後の ' は文字列の終端ではなくて単なる文字列と認識される
console.log('it\'s me!');
// \n とすると改行、 \t とするとタブという意味
console.log('hel\nlo wor\tld');

console.log("hello" + "world");

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
// 少数に関してはたまに近似値になる。コンピュータが内部で扱っている二進数が小数をうまく表現できないために起こる。
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3); //10の3乗
