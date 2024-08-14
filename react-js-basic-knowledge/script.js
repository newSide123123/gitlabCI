let userName = "name";
//userName = "Bohdan";

const userLastName = 'trifany';
//userLastName = 'robocop';
//const userLastName = 'robo';

const univer = {
    "sociology" : 5,
    "ethic" : 4,
    "philosophy" : 2
}
univer.sociology = 2;
univer.math = 2;
univer.geography = 2;

//console.log(univer);

const myArray = [3, 5, 8];
myArray[8] = 3;

//console.log(myArray);

// Import Export (it should be at the top of the file)
import myFunc from './secondfile.js'

console.log(myFunc('Test'));

import { checkLS, showMessage } from './cookies.js';

if(!checkLS()){
    console.log(showMessage('Problem'));
}

// Functions
function myTestFunction()
{
    console.log("My function test");
}

myTestFunction();
// Arrow functions
var multiplication = (firstValue, secondValue) => firstValue * secondValue;

console.log(multiplication(5,6));

// spread and rest //////////////////////////////

//spread
var person = {
    name : "John",
    surname : "Week"
};

// without spread
console.log(person);

var newPerson = {
    ...person,
    age : 42
};
// WITH spread
console.log(newPerson);

// rest (щось типу params C#)
const num = (...args) => args;

console.log(num(1,2,3,4,5,6,7,8,9,10));


// destructuring
const arr = [33, 44, 55, 66, 77];
const [d1, , d2] = arr;
console.log(d1, d2);

// object destructuring
const {name, age} = newPerson;
console.log(name, age);

// map, filter
