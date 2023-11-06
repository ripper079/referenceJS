console.log("The file classed.js was included");

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

const squareTwo = new Rectangle(2,2);

class Person {
    constructor(initialAge) {
      this._age = initialAge; // Private variable with an underscore prefix
    }
  
    // Getter method
    getAge() {
      return this._age;
    }
  
    // Setter method
    setAge(pAge) {
      if (pAge >= 0) {
        this._age = pAge;
      } else {
        console.log("Age cannot be negative.");
      }
    }
  }
  
  
  