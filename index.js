/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.random();
let randomInteger = Math.floor(randomNumber);
let randomUserID = (Math.floor(randomNumber * 20) + 1) + 1000000000;
/* if you want the number to be between 1000000005 and 1000000020, change it to
(Math.floor(randomNumber * 16) + 5) + 1000000000; (randomNumber * 16 could only
be a max of 15, and adding 5 to that gives 20)*/
