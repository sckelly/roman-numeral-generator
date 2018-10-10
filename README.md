# Roman Numeral Generator
A Roman Numeral Generator which converts numbers to Roman Numerals

## Problem Scope
In whatever language you prefer, write a class that implements the following interface (example given in Java):

public  interface  RomanNumeralGenerator  { 
    public  String  generate(int  number);
}

For  example,  see  the  following  sample  inputs  and  outputs: 
* 1  =  “I”
* 5  =  “V”
* 10  =  “X”
* 20  =  “XX”
* 3999  =  “MMMCMXCIX”

Caveat: Only support numbers between 1 and 3999   


## How to run

The app can be run through the npm scripts specified in package.json.

To run app for use: "npm start"

To run Jest test suites use: "npm test"

## Approach and Planning

Upon reading the problem scope and using the 5 values given as Acceptance Criteria, I determined that the solution would need three things:

1. A way for user to interact and input data
2. A means of input sanitisation
3. The Number generation itself

With this in mind, I began by writing tests for the input sanitiser, first ensuring the caveat number boundaries would be met, then any invalid inputs, such as objects, strings and arrays. Once the test were written and failing, I was able to write the input-sanitiser file that can be re-used if I were to extend the number generator in any way.

Once input sanitisation was completed, I began to write tests for the roman numeral generator itself, I decided to test the number boundaries first, and then invalid input. This was simply a case of checking again that input sanitiser was working correctly, and I could then place these checks in an if statement, abstracting the logic from the generator itself. Next I wrote tests for various cases of input to the generator. I tried to be extensive with this as I was eager to be thorough. After writing the tests, I began implementation of the generator itself.

The Generator itself uses an Object map of number values to their roman equivelents. The keys are taken from the map and used in a forEach loop, where the key value is subtracted from the input number and the key's equivelant Roman Numeral is appended to the output string. Each value in the mapping object is checked against the remainder of the input number, and if the input number is less than the key, nothing changes until a value is found that is greater than or equal to.

Once I was sure this worked and that the test cases were passing correctly, I had to implement a way for the user to input values through the console.

To achieve this I used a NPM package called "prompt" which takes user input from the command line, I wrapped the set up in an IFFE so that when the app.js file was run, the input cycle is invoked.


## Difficulties I found and what could I do better

At a point during development, tests kept failing on output strings that would give 'IIIIIIIIII' for 10 and so on, this was due to the ordering of Object.keys(), by not reversing the array of keys, the first value would always be 1, and any number that was input would just return the respective number of "I".

I tried to make the codebase as decoupled as possible, focussing on giving each requirement it's own space in the application codebase. Naturally the application has a lot of input and output strings for errors etc. In retrospect I think it would be smarter to have a messages config file or similair, that would deal with any message handling. However as this is a coding kata, I felt that may be overkill.

