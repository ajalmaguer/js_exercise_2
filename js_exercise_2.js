// JavaScript Review Lab
//   Working as a team, replace the null values
//    with JavaScript that completes the task.
//
// For each challenge, copy and paste it into
//   a browser's console. Make it work inside
//   the console. Then, put the working version
//   into this file!


/************************
 *  BASICS
 ************************/

/* 1. Declare variables that are examples of the
 five primitive types. For example, assign
 true to booleanValue, since true is a boolean
 value. Show two different ways to make a
 variable undefined! */

var booleanValue    = true;
var numberValue     = 123;
var stringValue     = 'blah blah';
var nullValue       = null;
var undefinedValue  = undefined;
var undefinedValue2

/* 2. In your console, use the typeof operator on
 each of the above variables. For example: */

console.log(typeof booleanValue)
console.log(typeof numberValue)
console.log(typeof stringValue)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof undefinedValue2)

/* 3. Which of the above variables does typeof NOT
 show the expected primitive type? This is
 a bug in JavaScript! It has not been fixed
 since a lot of code online depends on it. */




/* Mia, Albert, and Tony are going to a party.
 Set "attendees" to an array of their names. */

attendees = ["Mia", "Albert", "Tony"];
console.log(attendees)


/* Create the same array in a different way --
 by creating a new Array object. */

attendees2 = new Array("Mia", "Albert", "Tony")
console.log(attendees2)

/* Access the third element in the array. */

console.log("the third element of attendees is: " , attendees[2])

//Write a statement which sorts the array.

console.log("Sort is a method, the result of attendees.sort() is:" , attendees.sort())

/* Write a statement which removes the last
 element of the array. */

attendees.splice(attendees.length-1,1)
console.log("result of splice is:" , attendees)

// Write a statement which shifts a new element
// into the array as element 0 -- "Elaine"

attendees.push('Elaine')
console.log("result of attendees.push() is: ", attendees)


/* console.log the following poem. Do it using
 a single console.log statement! Make sure there
 are four separate lines in the console output.

 Computers are fun,
 Because they are neat.
 Javascript and Ruby,
 They cannot be beat! */

// these are codes for special characters in the console:
// \'  single quote
// \"  double quote
// \\  backslash
// \n  new line
// \r  carriage return
// \t  tab
// \b  backspace
// \f  form feed

console.log("poem")
console.log("Computers are fun, \nBecause they are neat. \nJavascript and Ruby, \nThey cannot be beat!");


// /************************
//  *  WHILE LOOPS
//  ************************/

// /* Fix the below while loop so that the user
//  is continually asked whether he or she is done.
//  Continue looping while the user enters "no".
//  Remember you can place console.log statements
//  inside loops to "see" the values change. */

// note: prompt doesn't work for node.js
// var isDone = null
// while (isDone !== 'no') {
//     isDone = prompt("Are you done?")
// }


/* Modify the solution to the above while loop
 below. Now, continue looping if "no" OR "No"
 is entered. */

// var isDone = null
// while (isDone !== "no") {
//     isDone = prompt("Are you done?")
//     isDone = isDone.toLowerCase()
// }



/* Explain to each other in English what this statement
 does. It should be a simple statement.
 Look up functions such as Math.round() and
 Math.random() if they are new. Try pasting the
 individual parts of this statement into
 your console to better understand it! */

console.log("Math.round and Math.target")
var theTarget = Math.round(100 * Math.random()) + 1;
console.log(theTarget)

/* Number guessing game. While the guess is not
 the target value, continue asking the user
 for a guess and informing whether the guess
 is too low or too high. */

var guess = 0;
var theTarget = Math.round(100 * Math.random()) + 1;

console.log('the target is: ', theTarget)

// var guess = 0;
// var theTarget = Math.round(100 * Math.random()) + 1;

// console.log('the target is: ', theTarget)

// while (guess !== theTarget) {
//     guess = parseInt(prompt("Make a guess!"));

//     console.log("guess = ", guess)
//     console.log("theTarget = ", theTarget)
//     console.log("test = ", guess != theTarget)
//     console.log("type of guess = ", typeof guess)
//     console.log("type of theTarget = ", typeof theTarget)

//     if (guess > theTarget) {
//         alert("Too high!");
//     } else if (guess < theTarget) {
//         alert("Too low!");
//     } else {
//       guess = theTarget
//       console.log("correct")
//     }
// }


/* The following while loop implements a
 "count up" clock. Make it console.log the
 numbers 1, 2, 3, 4, and 5. */

console.log('count from 1 to 5')
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}


/************************
 *  FOR LOOPS
 ************************/

/* Rewrite the "count up" clock as a for loop! */

console.log('count from 1 to 5 using for loop')
for (var i = 1; i < 6; i++) {
    console.log(i);
}

// /* Rewrite the for loop to have no initial conditions. */

console.log('count 1-5 with for loop and no initial conditions')
var i = 1
for (; i<6; i++) {
    console.log(i);
}

console.log("hmm, for loops don't need semicolons")


// /* Rewrite the for loop to have no incrementing statement. */

console.log('for loop w/ no increment setting')

for (var i = 1; i < 6; ) {
    console.log(i);
    i++;
}

//  Rewrite the for loop to have no incrementing or intial
//  statements.

console.log('for loop with no initial or incremental setting')
var i = 1;
for (; i<6; ) {
    console.log(i);
    i++;
}

// /* Note that this is identical to the while loop! */


// /* Let's make a count DOWN clock. We will display
//  5, 4, 3, 2, 1, 0. */

console.log('countdown clock')
var i = 5;
while (i >= 0) {
    console.log(i);
    i--;
}

// /* Now, rewrite the countdown clock as a for loop! */

console.log('countdown clock with for loop')
for (var i=5; i>=0; i--) {
    console.log(i);
}


// /* Using a for loop, print each value of the array
//  to the console. */

console.log('print values of array')

var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=0; i<foods.length; i++) {
    console.log(foods[i]);
}

// /* Using a for loop, print each value of the array
//  to the console, backwards! */

console.log('print food backwards')
var foods = ["Burger", "Fries", "Drink", "Tomato"];

for (i=foods.length-1; i>=0; i--) {
    console.log(foods[i]);
}


console.log('functions ------------')
// /************************
//  *  FUNCTIONS
//  ************************/

// /* Given the following function, call the function with
//  appropriate example values. In a comment, write
//  what the expected output will be. */

console.log("concat strings function")
function concatStrings(str, appendString) {
    return str + appendString;
}

concatStrings('hello ', 'aj');  // output is: "hello aj"
console.log(concatStrings('hello ', 'aj'))

// /* Write a function that takes one number as a parameter,
//  and returns that number plus one. Choose good
//  variable names! Call the function with an appropriate
//  parameter. */

console.log("increment function")
function increment(num) {
    return num + 1;
}

increment(3);  // output is:4


// /* Complete the below function. It accepts a
//  number and returns a string with "a" repeated
//  that many times. For example, calling the
//  function with 3 will return "aaa".
//  Use a for loop to construct the return
//  string. Call the function
//  with example values and write the output as
//  a comment. */

console.log("repeat a string function")
function repeatA(numTimesRepeated) {
    var returnString = "";

    for (var i = 0; i < numTimesRepeated; i++) {
        returnString += "a";
    }

    return returnString;
}

console.log(repeatA(4));   // output is: aaaa



// /* Let's generalize the last function. Now, a
//  second parameter will be passed which is the
//  character (or string) to repeat! Call the function
//  with example values and write the output as
//  a comment. */

console.log("function with two inputs")
function repeatString(numTimesRepeated, stringToRepeat) {
    var returnString = "";

    for (var i = 0; i < numTimesRepeated; i++) {
        returnString += stringToRepeat;
    }

    return returnString;}

console.log(repeatString(5, "z"));  // output is:


// /* Write a function which returns the original array,
//  but reversed! */

console.log("reverse array")
function reverseStrings(arrayOfStrings)
{
    var reversedArray = [];

    for (i=arrayOfStrings.length-1; i >= 0; i--) {
        reversedArray.push(arrayOfStrings[i]);
    }

    return reversedArray;
}

var foods = ["Burger", "Fries", "Drink", "Tomato"];
console.log(reverseStrings(foods));

// /* Note that variables can be assigned functions. */

var someVariable = repeatA;
var anotherVariable = repeatA;

// /* Try running the above two lines in your browser.
//  Now, try calling the functions by using the
//  new variables. (i.e. run the below code!) */

console.log("assigning functions to variables")
console.log(someVariable(3));
console.log(anotherVariable(5));

// /* This is an important fact about JavaScript --
//  functions can be assigned to variables and
//  passed around as arguments to functions! */


// /* CONGRATULATIONS! YOU MADE IT TO THE END! */
