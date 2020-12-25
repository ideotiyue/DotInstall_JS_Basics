"use strict";
console.log('処理A');
for (let i = 1; i <= 10; i++){
  console.log(`Hello${i}回目`);
}

console.log('処理B');
// 条件式を書き忘れると無限ループになる
let hp = 100;
while(hp > 0){
  console.log(`${hp}HP left!`);
  hp -= 15; 
}

console.log('処理C');
let mp = -50;
do {
  console.log(`${mp}MP left!`);
  mp -= 15; 
} while(mp > 0)
