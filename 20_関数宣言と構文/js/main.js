"use strict";

function showAd(message = 'Ad'){ //仮引数。初期値を渡すことも可能
  console.log('------');
  console.log(`--${message}--`);
  console.log('------');
}

showAd('header Ad');//実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAd('Ad');
console.log('Steve is great!');
console.log('Richard is great!');
showAd();
console.log('Machilda is great!');
console.log('Maria is great!');
showAd('footer Ad');