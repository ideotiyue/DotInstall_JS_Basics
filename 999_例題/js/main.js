"use strict";
// 例題1
const signal = "red";
switch (signal){
  case "red":
    console.log("stop!");
    break;
    
    case "yellow":
      console.log("caution");
      break;
      
      case "blue":
      case "green":
        console.log("go!");
        break;
  default:
    console.log('wrong signal!');
}

// 例題2
for (let i = 1; i <= 10 ; i++ ){
  console.log(`hello${i}`)
}

// 例題3
let hp = 100;
while (hp > 0){
  console.log(`${hp}HP left!`);
  hp -= 15;
}

// 例題4
let mp = -15
do {
  console.log(`${mp}MP left!`);
  mp -= 15;
} while (mp > 0)

// 例題5
const score = 65 ;
if (score > 80){
  console.log("gold!");
} else if (score > 60){
  console.log("silver");
} else {
  console.log("copper");
}

// 例題6
score >= 60 ? 
console.log('clear!'):console.log('miss take');

// 例題7
const double = function (a){
  return a * 2;
};
console.log(double(2));

// 例題8
const double3 = (a) => {
  return a * 2;
};
console.log(double3(3));

// 例題9
const double4 = a => a * 2;
console.log(double4(4));