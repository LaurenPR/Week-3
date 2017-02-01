/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data.
Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

// 1)
var testArray = [
  {"first":1,"second":2,"third":3},
  {"first":5,"second":6,"third":13},
  {"first":5,"second":13,"thrid":200}];

_.each(testArray, function(item) {
  console.log(_.invert(item)); //Note: "invert" simply reversed the key or name of each item in an object, with the item itself. "Name": "Jennifer", therfore becomes "Jennifer":"Name"
});


// 2)

var fizzBuzzFnx = function(ii) {
  if (ii%3 === 0 && ii%5 === 0) { console.log("FizzBuzz");
    }
    else if (ii%3 === 0) { console.log("Fizz");
  }
  else if (ii%5 === 0) { console.log("Buzz");
}
      else {console.log(ii);
      }
};


var one_50_Array = [];//create an empty array with length 50 (I don't know how to do this with _.each)

for (var i = 1; i <= 50; i++) {
   one_50_Array.push(i);
}
// console.log(one_50_Array); //Yup, created an array of numbers from 1-50 for our test


_.each(one_50_Array, fizzBuzzFnx); // works!
