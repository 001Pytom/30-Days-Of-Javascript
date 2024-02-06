// constructor functions

const Person = function (firstName, birthYear) {
  // instnace properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   methods, this is a bad practice
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

// instances or house

const person1 = new Person("faatihat", 2000);
const person2 = new Person("matilda", 2002);
const person3 = new Person("jonas", 2004);
const person4 = new Person("abdul", 2006);

// prototypes
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

person1.calcAge();
person2.calcAge();

Person.prototype.species = "Homo Spaiens";
console.log(person1.species);

// the property is on its prtotype

// ......
// inherit classes , like parents to children using constructor methds, the child inheriting things from the parent
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// we can create a method
Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student("mike", 2020, "computer Science");
mike.introduce();
// ......

// coding challnege
// crete a constructor function thatworks on a car and also a method that works for instance of that car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The accelerate function:${this.speed} and the make is ${this.make}`
  );
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The brake function:${this.speed} and the make is ${this.make}`);
};

// create instances
const car1 = new Car("BMW", Number.parseInt("120Km/h"));
const car2 = new Car("Mercedes", Number.parseInt("95Km/h"));

// using the isnatnces on the mthd
car1.accelerate();
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

// i got it right

// Now llets use class declaration
class Personcl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //   you can call your methods here instead of outside the code
  calcAge() {
    console.log(`${this.firstName} has the age of ${2024 - this.birthYear}`);
  }

  //   introducing getters and setters
  // getters
  get age() {
    return 2024 - this.birthYear;
  }
}

const faatihat = new Personcl("faatihat", 2002);
faatihat.calcAge();
const anotherUser = new Personcl("another user", 2000);
anotherUser.calcAge();
// you dont call it like a method, but rather as a property
console.log(faatihat.age);

// ......
// now to continue we can have inheritance or child of the personCl class
class StudentCl extends Personcl {
  constructor(firstName, birthYear, course) {
    // this should al ways come first, as this shows it is inheriting the this property from the parent property
    super(firstName, birthYear);
    this.course = course;
  }

  //   you can call its method in it
  introduce() {
    console.log(`my name is ${this.firstName} and i study ${this.course}`);
  }
}

const marttha = new Student("martha", 2012, "Computer Science");
marttha.introduce();
marttha.age;
// ......

// Another class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // we can have defaulst like
    this.movements = [];
    this.locale = navigator.language;
  }
}

const acc1 = new Account("faatihat", "NAIRA", 1111);
console.log(acc1);
// console.log(navigator.language);
