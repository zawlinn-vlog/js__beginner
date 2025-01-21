"use strict";

//
/*
function Person(name, birthDate) {
  this.name = name;
  this.birthDate = birthDate;
}

Person.prototype.getAge = function () {
  return `${this.name} is ${2025 - this.birthDate} year old.`;
};

Person.prototype.getBirthday = function () {
  return `${this.name}'s birth Year is ${this.birthDate}.`;
};

function American(name, birthDate, location = "New Jercy") {
  Person.call(this, name, birthDate);
  this.location = location;
}

American.prototype = Object.create(Person.prototype); // Create Prototype

const p1 = new Person("Zaw Linn", 1997);

const m1 = new American("John Ibrahim", 1991, "New York");

console.log(p1, p1.getAge());

console.log(m1, m1.getAge(), m1.getBirthday());

class Person {
  static job = "Jobless";

  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge() {
    return `${this.name} is ${2025 - this.birthDate} year old.`;
  }

  static getJob() {
    return `${this.job}`;
  }
}

const p1 = new Person("Zaw Linn", 1997);

console.log(p1, p1.getAge());

console.log(Person.getJob());

*/

/**
 *
 * Ready State
 *
 * 0 => request not initialize
 * 1 => server connection establish
 * 2 => request and receive
 * 3 => proecssing Request
 * 4 => request finish and response is ready
 *
 *
 * HTTP Status
 *
 * 200 => OK
 * 403 => Forbidden
 * 404 => Page not Found
 * 500 => Server error
 *
 */

var url = "https://jsonplaceholder.typicode.com/posts";
var xml = new XMLHttpRequest();
xml.onreadystatechange = function () {
  console.log(this);
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);

    var json = JSON.parse(this.responseText);
    console.log(json);
    json.forEach(function (obj, i) {
      var html = "\n\n    <div class=\"col-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"card-title text-primary text-capitalize\">".concat(obj.title, "</div>\n              <p class=\"card-text text-lead\">\n              ").concat(obj.body, "\n              </p>\n            </div>\n            <div class=\"card-body d-flex\">\n              <button class=\"btn btn-primary btn-details ms-auto\">Detail</button>\n            </div>\n          </div>\n        </div>\n    ");
      document.querySelector(".row").insertAdjacentHTML("beforeend", html);
    });
  }
};
xml.open("GET", url);
xml.send();