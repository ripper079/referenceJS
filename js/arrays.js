console.log("The file arrays.js was included");

// Create ARRAYS - 2 diferent ways
let fruits = ["Banana", "Apple", "Pear"];
let colors = new Array('Red', 'Yellow', 'Orange');

//Iterate arrays
//Alt 1 with manual index
for (let i = 0; i < fruits.length; i++){
    //console.log("Fruit: " + fruits[i]);
}
//Alt 2 - Foreach with element and key
fruits.forEach((fruit, index) => {
    //console.log(`Index: ${index}, Fruit: ${fruit}`);
});

//Alt 3 - Foreach without index
colors.forEach(element => {
    //console.log("Element is:" + element);
});
//colors.forEach(element => console.log(`Element is= ${element}`));     //Backticks
//colors.forEach(element => console.log("Element is:" +  element));

//Alt generic description
//Alt 3 - Foreach with generic element and key
colors.forEach((element, key) => {
    //console.log("Element is:" + element + ", and Key is: " + key);
});

//Like PHP Associate arrays
const textToValue = {
    "one" : 1,
    "two" : 2,
    "three" : 3
}
console.log("One in number" + textToValue["one"]);      //If key is missing the returns undefined
//Messy to iterate through it
Object.keys(textToValue).forEach(key => {
    let value = textToValue[key];
    console.log(`Key: ${key}, Value: ${value}`);
  });

