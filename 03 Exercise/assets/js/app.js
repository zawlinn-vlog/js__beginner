"use strict";

$(document).ready(function () {
  const form = document.querySelector("form");
  $("#reg").on("click", function (e) {
    /*****/
    e.preventDefault();
    if (!form.checkValidity()) {
      $("form").addClass("was-validated");
      $("select").val() == "" ? $("select ~ .valid-feedback").hide() : "";
    }
  });
});

(function () {
  console.log(this);
})();

// const bio = function () {
//   // console.log(`${this.fullName} is ${this.age} year old!`);
//   return `${this.fullName} is ${this.age} year old!`;
// };

const person = {
  bio() {
    return `${this.fullName} is ${this.age} year old!`;
  },
};
const p1 = {
  fullName: "Zawlinn",
  age: 2025 - 1997,
};

// bio.call(p1);

// const dd = person.bio.call(p1);

setTimeout(() => {
  console.log(person.bio.call(p1));
}, 5000);

let count = 0;

function getData() {
  count++;
  return {
    next: function () {
      return count <= 3 ? { value: count, done: false } : { done: true };
    },
  };
}

console.log(getData().next());
console.log(getData().next());
console.log(getData().next());
console.log(getData().next());

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const dd = gen();

console.log(dd.next());
console.log(dd.next());
console.log(dd.next());
console.log(dd.next());
