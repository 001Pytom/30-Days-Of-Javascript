class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`
    );
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  // override the display info
  displayInfo() {
    console.log(
      "i am the one displaying the info: Dog class.😊i just decided to override."
    );
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
}

const dog = new Dog("tems", 12, "blzck", 4);
const cat = new Cat("teni", 12, "white", 4);
dog.displayInfo();
cat.displayInfo();
