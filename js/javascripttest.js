//Output data
/*
//Simple dialog
alert("Hello World"); 

//confirms return true/false is user clicks OK or Cancel
var yesOrNo = confirm("Are you sure programmer");

//Write directly to the HTML document
document.write();

// Dialogue for user input
var inputString = prompt("Hello");
//Cancel -> null
//Ok -> empty string OR string content
*/

//Variable declaration
//const, let & var
//let                           vs                      var
//let is block-scoped.	                                var is function scoped.
//let does not allow to redeclare variables.	        var allows to redeclare variables.
//Hoisting does not occur in let.	                    Hoisting occurs in var.
//let is newer(preferred)                               var is legacy

//JavaScript ***Hoisting*** refers to the process whereby the interpreter appears to move the declaration of functions, 
//variables or classes to the top of their scope, prior to execution of the code.

document.title = "Java script manipulated the title";
let javaScriptAbbreviation = "JS";
//Interpolate Strings
let helloWorldJavaScript = `Hello world to ${javaScriptAbbreviation}`;  //Note backticks
console.log(helloWorldJavaScript);
//Template strings literals that spans multiple lines
console.log(`String
mulitple
lines
`);

// Arrays
let fruits = ["Banana", "Apple", "Pear"];
let colors = new Array('Red', 'Yellow', 'Orange');



for (let i = 0; i < fruits.length; i++){
    console.log("Fruit: " + fruits[i]);
}

colors.forEach(element => {
    console.log("Element is:" + element);
});

//Objects
let person = {
    firstName: `Daniel`,        // Here we use backticks
    lastName: `Oikarainen`,     // Possible to use single and double quotes
    age: 41
};

console.log("First name:" + person.firstName);

//Constructor pattern
function Car(brand, model, year){
    this._brand = brand;
    this._model = model;
    this._year = year;
}

let myVolvo = new Car("Volvo", "V70", 2015);
let myCollectionCars = new Array(
    new Car("Audi", "R8", 2021),
    new Car("Ferrari", "Diablo", 2020),
    new Car("Koenigsegg", "Agera", 2018)
    );
console.log("My car is a: " + myVolvo._brand + " " + myVolvo._model + " year model: " + myVolvo._year);

console.log("My wish collection for cars is...")
myCollectionCars.forEach(oneCar => {
    console.log("A " + oneCar._brand + " " + oneCar._model + " " + " year model: " + oneCar._year)
});

let money = DoubleItUp(100);
console.log("From 100 to:" + money);

// Declara a function
function DoubleItUp(numberToDouble){
    return 2*numberToDouble;
}

// if/else statements
let funEmoji = false;
let ageOfPerson = 60; 
if (funEmoji)
{
    console.log("This is funny 😀");
}
else {
    console.log("This is not funny 😡");
}

if (ageOfPerson < 2){
    console.log("You are a 👶[baby]");
}
else if (ageOfPerson < 18){
    console.log("You are a 👧[teen]");
}
else if (ageOfPerson < 55){
    console.log("You are a 🧔[middle aged]");
}
else {
    console.log("You are a 👴[old age]");
}

//Get the content from DOM
console.log(document.querySelector('#main-paragraph').textContent);
console.log(document.querySelector('#main-paragraph').innerHTML);
//Set the content in the DOM
document.querySelector('#manipulate-paragraph').textContent = "Haha, you are secondary paragraph";

//Three Ways of creating functions

//1. Defining function [Traditional way] - SquareItUp hold a function value
const SquareItUp = function(x){
    return x*x;
}

//2. Declaration notation - DoubleItUp tobe a function
function DoubleItUp(x){
    return 2 * x;
}

//3. Arrow function - less verbose function value
const TenTimesBigger = (x) => {
    return 10 * x;
}


