"use strict";

/**
 *
 * Let => Variable Keyword
 * name => variable identifier name
 * = => Assignment Operator
 * 'Mg Mg' => value
 * : => end of statement
 *
 */

let num = 20; // Number type
let name = "Mg Mg"; // String Type
let bol = true; // Boolean Type

bol = 5 < 4;

console.log(num, name, bol, typeof num, typeof name, typeof bol);
console.log(bol);

let fullName;

fullName = "Aung Aung";

console.log(fullName);

/**
 *
 * Varialbe Join
 * Naming Convention
 */

// let firstName = 20;
// let lastName = "Aung";
// lastName = true;

// let FName = firstName + lastName;

// console.log(FName);
// console.warn(FName);
// console.error(FName);

// console.clear();

console.time("Time:D");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.log("Hey Now Brown cow!");
console.timeEnd("Time:D");

let FirstName = "Mg Mg"; // pascale case
let first_name = "Mg Mg"; // underscore case
let firstName = "Mg Mg"; // Camel case
let First_Name = "Mg Mg"; // snake case, const variables

/**
 *
 * OOP JavaScript => Object Oriented Programming
 * ECMA 5 => OOP => Prototype
 * Constructor Function
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getAge = function () {
  return this.age;
};

Person.prototype.getName = function () {
  return this.name;
};

let person = new Person("Mg Mg", 20);

// let p2 = new Person("Aung Aung", 30);

// let p3 = new Person("Su Su", 40);

console.log(person);
console.log(person.getAge(), person.getName());

// console.log(p1, p2, p3);
// console.log(p1.getAge(), p2.getAge(), p3.name);

// PROTOTYPE

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.getPros = function () {
  return `Name : ${this.name} & Speed : ${this.speed} M/h`;
};

Car.prototype.getSpeed = function () {
  return `Speed : ${this.speed} M/h`;
};

function Toyota(name, speed) {
  Car.call(this, name, speed);
}

Toyota.prototype = Object.create(Car.prototype);

function Honda(name, speed, model) {
  Car.call(this, name, speed);
  this.model = model;
}

Honda.prototype = Object.create(Car.prototype);

Honda.prototype.getModel = function () {
  return `Model is ${this.model}`;
};

let toyota = new Toyota("Toyato", 1200);
let honda = new Honda("Honda", 1800, 2019);

console.log(toyota, honda);

console.log(toyota.getSpeed());
console.log(honda.getModel());

const carProto = {
  getSpeed() {
    return this.speed;
  },
  getName() {
    return this.name;
  },
};

console.log(carProto);

const car = Object.create(carProto);

car.name = "Suzuki";
car.speed = "1200 M/h";

const bar = Object.create(carProto, {
  name: { value: "Mazada" },
  speed: { value: "1400 M/h" },
});

console.log(car, car.name, car.speed, car.getSpeed(), car.getName());
console.log(bar, bar.getSpeed(), bar.getName());
