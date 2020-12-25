"use strict";
console.log('処理A');
for (let i = 1; i <= 10; i++){
  if(i === 4){
    continue;
  }
  console.log(i);
}

console.log('処理B');
for (let i = 1; i <= 10; i++){
  if(i % 3 === 0){
    continue;
  }
  console.log(i);
}

console.log('処理C');
for (let i = 1; i <= 10; i++){
  if(i === 4){
    break;
  }
  console.log(i);
}