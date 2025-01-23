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

const url = "https://jsonplaceholder.typicode.com/posts";

/*
const xml = new XMLHttpRequest();

xml.onreadystatechange = function () {
  console.log(this);

  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);

    const json = JSON.parse(this.responseText);

    console.log(json);

    json.forEach((obj, i) => {
      const html = `

    <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title text-primary text-capitalize">${obj.title}</div>
              <p class="card-text text-lead">
              ${obj.body}
              </p>
            </div>
            <div class="card-body d-flex">
              <button class="btn btn-primary btn-details ms-auto">Detail</button>
            </div>
          </div>
        </div>
    `;

      document.querySelector(".row").insertAdjacentHTML("beforeend", html);
    });
  }
};

xml.open("GET", url);

xml.send();




const xml = new XMLHttpRequest();

xml.onload = function () {
  console.log(this);

  if (this.status == 200 && this.readyState == 4) {
    console.log(this.responseText);
  }
};

xml.open("GET", url);

xml.send();



function loadData() {
  const xml = new XMLHttpRequest();

  return new Promise((res, rej) => {
    xml.onload = function () {
      if (this.status == 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(err);
      }
    };

    xml.open("GET", url);

    xml.send();
  });
}

loadData().then((val) => console.log(val));



async function loadData() {
  const xml = new XMLHttpRequest();

  const getData = new Promise((res, rej) => {
    xml.onload = function () {
      if (this.status == 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(err);
      }
    };
    xml.open("GET", url);

    xml.send();
  });

  const json = await getData;

  return json;
}

loadData().then((val) => console.log(val));




function loadData() {
  return new Promise((res, rej) => {
    fetch(url)
      .then((val) => val.json())
      .then((json) => res(json))
      .catch((err) => rej(err));
  });
}

// loadData().then((val) => console.log(val));

async function init() {
  const finalJson = await loadData();
  console.log(finalJson);
}

init();



let data;

try {
  function loadData() {
    const xml = new XMLHttpRequest();

    xml.onload = function () {
      if (this.status == 200 && this.readyState == 4) {
        data = JSON.parse(this.responseText);

        console.log(data);
      }
    };

    xml.open("GET", url);

    xml.send();
  }

  loadData();
} catch (err) {
  console.log(err);
} finally {
  console.log("Load Data Process is finished!");
}

*/

let data;

function loadData() {
  return new Promise((res, rej) => {
    fetch(url)
      .then((pro) => pro.json())
      .then((val) => res(val))
      .catch((err) => rej(err));
  });
}

async function init() {
  // catch promise value

  data = await loadData();

  console.log(data);
}

init();
