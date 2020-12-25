"use strict";
const x = 2; //グローバルスコープ

function f() {
  const x = 1; //優先されるブロック内のスコープ
  console.log(x);
}
f();
console.log(x);

const y = 100;
console.log(y);
