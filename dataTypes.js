/**
 * undefined, null, boolean, string, symbol, number, and object 
 * undefined is something that hasnt been defined
 * null means nothing 
 * booleans means true or false 
 * string - text 
 * symbol - primitive data type of javascript
 * number - are numbers; 
 * object - it contains properties
 */
var myName = 'Felipe';
myName = 8;
let ourName = 'freecodecamp';
const pi = 3.14;
/**
 * storing values w the assignment operator
 */

var a;
b = a;
console.log(a);
var b = 2;
console.log(b);
/**
 * initializing var w assignment operator 
 */
var a = 9;
console.log(a)

/**
 * uninitialized var 
 */

var a = 12;
var b = 3;
var c = 'I am a ';
//those values are undefined 

//do not change code below this line
a = a + 1;
b = b + 5;
c = c + 'strings!';

console.log(a, b, c);
/**
 * case sensitivity in var
 */
var studlyCapVar; //camel case first letter lowercase
var properCamelCase;
var titleCaseOver;

//assignments 
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000; 

/**
 * adding numbers
 */
var sum = 10 + 10;
console.log(sum);
/**
 * subtracting numbers
 */
var minus = 10 - 10; 
console.log(minus);
/**
 * multiplication numbers
 */
var product  = 10 * 10; 
console.log(product);

/**
 * 
 * dividing numbers
 */
var quotient = 66 / 3;
console.log(quotient)

/**
 * incrementing numbers 
 * 
 */
var myVar = 87;
myVar = ++myVar;
myVar++;
++myVar;
myVar = myVar + 1;
console.log(myVar);

/**
 * decrementing numbers 
 */

myVar = 11;
myVar--;
--myVar;
console.log(myVar)
/**
 * decimal point 
 * 
 */
var Decimal = 0.09
var Decimal1 = 0.0009
console.log(Decimal, Decimal1);

/**
 * multiply decimals
 */
var product = 5.6 * 2.0 
console.log(product)

/**
 * divide decimals
 */
var quotient = 2.4 / 4.4; 
console.log(quotient)

/**
 * finding a remainder
 * 
 */
var remainder; 
remainder = 11 % 3;
//remainder = 11 % 2; 
console.log(remainder)

/**
 * compound assigment w augmented addition
 */

var a = 3;
var b = 17;
var c = 12;
//only modify code below this line 
a = a + 12;
a += 12;
b = 9 + b;
b += 9;
c = c + 7;
c += 7;

console.log(a, b, c)

/**
 * compound assigment w augmented subtraction 
 */
var a = 11;
var b = 9;
var c = 3;

//only modify code below this line

a -= 6;
b -= 15;
c -= 1; 
console.log(a, b, c);
/**
 * augmented math operations multiplication
 */
var a = 15;
var b = 12;
var c = 4.6;
//only modify code below this line;
a *= 5;
b *= 3;
c *= 10;
console.log(a, b, c)
/***
 * compound assigment w augmented division
 */
var a = 48;
var b = 108;
var c = 33;
//only modify code below this line
a /= 12;
b /= 4;
c /= 11;
console.log(a, b, c)

/**
 * declare the string variable 
 * 
 */

var firstName = 'Felipe';//this is string literal 
var lastName = 'Ruiz';
//only change code below this line
var myFirsrtName = 'Alan';
var myLastName = 'Turing';

/**
 * escaping literal quotes in strings 
 * use the \ to escape character the literal quote in a string
 */
var myStr = 'I am a\'double quoted\'string inside\' \double\ quotes';
console.log(myStr)

/**
 * 
 * escaping sequences in string
 * code output
 * \' single quotes
 * \" double quotes
 * \ backlash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed 
 * 
 * 
 */

var myStr = 'firstline\n\t\\secondline\nthirdline\n';
console.log(myStr)

/**
 * concatenating strings w plus operator
 */
var ourStr = 'I come first ' + 'I come second';

var ourStr1 = 'This is the start. ' + 'This is the end.';

console.log(ourStr , ourStr1)

/**
 * concatenate strings using the += operator.
 * 
 */
var outStr = 'I come first';
ourStr += 'I come second';
console.log(ourStr)

/**
 * 
 * constructing strings w var 
 */
var ourName1 = 'FreeCodeCamp';
var ourStr1 = 'hello, our name is ' + ourName1 + ', how are you?';
//only change code below this line

var myName = 'Felipe';
var myStr = 'My name is ' + myName + 'and I am well';
 
console.log(ourName1, ourStr1, myName, myStr);

/**
 * appending var to string
 */

var anAdjective = 'awesome!';
var ourStr = 'FreeCodeCamp is ';
ourStr += anAdjective;
//only change code below the line 
var someAdjective = 'worthwhile';
var myStr = 'Learning to code is hard and ';
myStr += someAdjective;

console.log(ourStr, myStr);
/**
 * 
 * find the length of a string
 */

var firstNameLength = 0;
var firstName = 'Felipe';

firstNameLength = firstName.length;

//setup
var lastNameLength = 0;
var lastName = 'lovelace';

//only change code below this line
lastNameLength = lastName.length;
console.log(firstNameLength, lastNameLength);

/**
 * bracket notation to find first char in string
 */
//example
var firstLetterOfFirstName = ' ';
var firstName = 'Afrose';

firstLetterOfFirstName = firstName[0];

//setup
var firstLetterOfLastName = ' ';
var lastName = 'Ruiz';

//only change code below this line
firstLetterOfLastName = lastName[1];

console.log(firstLetterOfFirstName, firstLetterOfLastName)

/**
 * string immutability
 */

//Setup
var myStr = 'Jello World';
//only change code below this line
myStr[0] = 'H' // fix me 
//strings are immutable, meaning they cannot be altered once created.
//understand string immutability - they can change just that the individual 
//characters of a string literal cannot be changed.
myStr = 'Hello World';

/**
 * bracket notation to find nth char in string 
 */
//example 
var firstName = 'Felipe';
var secondLetterOfFirstName = firstName[1];
//setup
var lastName = 'Ruiz';
//only change code below here
var thirdLetterOfLastName = lastName[2];
console.log(secondLetterOfFirstName, thirdLetterOfLastName)

/**
 * bracket notation to find the last char in string
 */

//example 
var firstName = 'Felipe';
var lastLetterOfFirstName = firstName[firstName.length - 1];
//setup
var lastName = 'Lovelace';
//only change code below 
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfFirstName, lastLetterOfLastName)

/**
 * bracket notation to find nth to last char in string 
 */
//example 
var fN1 = 'Felipe';
console.log(fN1.length)
var thirdToLastLetterOfFirstName = fN1[fN1.length - 3];
//setup
var lN1 = 'Lovelace';
console.log(lN1.length)
//only change code below
var secondToLastLetterOfLastName = lN1[lN1.length - 2];
console.log(thirdToLastLetterOfFirstName, secondToLastLetterOfLastName);

/**
 * build a Mad Libs style game 
 */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //your code below 
    var result = '';
    //result += (`The + ${myAdjective}\n + ${myNoun}\n + ${myVerb}\n + ' to the warehouse ' + ${myAdverb}\n`);
    result += 'The' + myAdjective + ' ' + myNoun + ' ' + myVerb + 'to the warehouse' + myAdverb;
    //your code above this line'
    return result;
}

//change the words here to test your function 
console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));
console.log(wordBlanks('bike', 'slow', 'flew', 'slowly'));

/**
 * 
 * Store multiple values in an array 
 */

//example
var ourArray = ['Felipe', 58];

//only change code below
var myArray = ['Afrose', 72 , 'Felipe', 58];
console.log(ourArray, myArray)

/**
 * nesting arrays 
 */
//example 
var ourArray = [['the universe', 42], ['everything', 101010]];
//only change below 
var myArray = [['democracyNow', 99.5], ['AARP', 15]];
console.log(ourArray, myArray);
/**
 * access array data w indexes
 */
//example
var ourArray = [50, 60, 70];
var ourData = ourArray[1];// equals 60
//setup
var myArray = [50, 60, 70];
var myData = myArray[2];
console.log(ourData, myData)