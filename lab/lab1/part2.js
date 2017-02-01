/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */

var justOne = function(x) {
  return (1);
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */

var isEven = function(x) {
  return (x%2 === 0);
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(x) {
  y = justOne(x);
  return (isEven(y));
};

console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(bool) {
  return (!bool);
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num1) {
  y = isEven(num1);
  return (not(y));
};

console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */

var filterOutLessThan10 = function(list) {
  var newArray2 = [];
  for (i = 0; i<list.length;i++){
    if (list[i] >=10){
      newArray2.push(list[i]);
    }
  }
  return (newArray2);
};


var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test);


/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array4, func) {
  var oddOnly = [];
  for (var i = 0; i < array4.length; i++) {
    if (func(array4[i]) === true){
      oddOnly.push(array4[i]);
    }
  }
  console.log(oddOnly);
  return (oddOnly);
};

var test2 = filter([4, 11], isOdd).length === 1 && filter([4, 11], isOdd)[0] === 11;
console.log('filter success:', test2);


// console.log('filter success:', filter([4, 11, 8, 15], filter) === [11, 15]); //This is returning [11, 15] so I'm not surs why I am not getting a true

// console.log('filter success _.each method:', _.each([4, 11, 8, 15], isOdd) === [11, 15]); //This is returning [11, 15] so I'm not surs why I am not getting a true
