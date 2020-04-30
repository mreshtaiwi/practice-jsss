'use strict';
// var today = new Date();
// console.log('today ',today);
// var hourNow = today.getHours();
// console.log('hour now ',hourNow);
var hourNow = prompt('please enter an hour from 0 - 23');
console.log(hourNow);
var greeting='abduelah';//undefind

if (hourNow > 18 && hourNow <= 23) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12 && hourNow <= 18) {
  greeting = 'mar7ba ya jma3a';
} else if (hourNow >= 0 && hourNow <= 12) {
  greeting = 'Good morning!';
} else {
  greeting = 'Something went wrong!';
}

document.write('<h3>' + greeting + '</h3>');

