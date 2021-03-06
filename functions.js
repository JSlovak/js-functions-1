/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

  function numberToString(n){
    return n.toString();
  }

  console.log(numberToString(15));


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

  function increase(n){
    return n + 1;
  }

  console.log(increase(9));


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

  function decrease (n){
    return n - 1;
  }

  console.log (decrease(9));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

  function add(x,y){
    return x + y;
  }

  console.log(add(5,9));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

  function subtract (x,y){
    return x - y;
  }

  console.log (subtract(14, 7));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

   function multiply (x,y){
    return x * y;
   }

   console.log (multiply(2,3));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

   function divide (x,y){
    return x / y;
   }

   console.log(divide(24,4));

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

  function square (x){
    return x * x;
  }

  console.log (square(5));

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y){
 if (operation === "add") {
    console.log(x + " + " + y + " = " + (x + y));
    return x + y;
  } else if (operation === "subtract") {
    console.log(x + " - " + y + " = " + (x - y));
    return x - y;
  } else if (operation === "multiply") {
    console.log(x + " * " + y + " = " + (x * y));
    return x * y;
  } else if(operation === "divide"){
    console.log(x + " / " + y + " = " + (x / y));
    return  x / y;
  }
}

console.log(calculate ("add", 1,2));
console.log(calculate ("subtract", 1,2));
console.log(calculate ("multiply", 1,2));
console.log(calculate ("divide", 10,2));

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (a, b){
  return a > b;
}

console.log(isGreaterThan(5,3));
console.log(isGreaterThan(5,9));


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a, b){
  return a < b;
}

console.log(isLessThan(5, 9));
console.log(isLessThan(5, 3));

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a, b){
  return a === b;
}

console.log(areEqual(5, "5"));
console.log(areEqual(5, 5));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 function minimum(x, y){
  if (x < y){
    return x;
  } else {
    return y;
  }
 }

 console.log(minimum(4,9));
 console.log(minimum(14,9));

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y){
  if (x > y){
    return x;
  } else {
    return y;
  }
 }

console.log(maximum(14,9));
console.log(maximum(4,9));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
  return n % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){
  return n % 2 === 1 || -1;
}

console.log(isOdd(11));
console.log(isOdd(10));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score, total){
  var testScore = score / total;
  if (testScore >= 0.9){
    return "A";
  } else if (testScore >= 0.8){
    return "B";
  } else if (testScore >= 0.7){
    return "C";
  } else if (testScore >= 0.6){
    return "D";
  } else return "F";
}

console.log(letterGrade(30,30));
console.log(letterGrade(20,30));

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


function incrementReviews(res){
  if (res.reviews === 0){
    return 1;
  } else if (res.reviews >= 1){
    return res.reviews + 1;
  }
}

var zaratez = {
  review: 0
};

var cocina = {
  review: 2
};

console.log(incrementReviews(zaratez));
console.log(incrementReviews(cocina));


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine (word1, word2){
  return word1 + " " + word2;
}

console.log("yes,", "please.");
console.log("BYE,","Felicia!");

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circle = {};
  circle.circumference = 2 * radius * Math.PI;
  circle.area = (radius * radius) * Math.PI;
  return circle;
}

console.log(createCircle(3));
console.log(createCircle(9));

