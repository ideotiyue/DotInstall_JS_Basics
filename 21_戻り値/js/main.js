"use strict";

/*
function sum(a,b,c){ // 個別に計算する場合の関数
 console.log(a + b + c);
}

sum(1,2,3);
sum(4,5,6);
*/

function sum(a,b,c){ 
  return a + b + c;
};

const total = sum(1,2,3) + sum(4,5,6);
console.log(total);
