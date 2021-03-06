"use strict";

/*
function sum(a,b,c){ 
  return(a + b + c);
};

const total = sum(1,2,3) + sum(4,5,6);
console.log(total);
*/

/*
// 普通の関数式
const sum = function (a ,b ,c){
  return a + b + c;
};
*/

// アロー関数
const sum = (a, b, c) =>{
 return a + b + c;
}

const total = sum(1,2,3) + sum(4,5,6);
console.log(total);


// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2;
console.log(double(12));
