"use strict";

const url = "./assets/js/photo.json";

const next = document.querySelector(".next");

function fetchData() {
  const xml = new XMLHttpRequest();

  return new Promise((res, rej) => {
    xml.onload = function () {
      if (this.status == 200 && this.readyState === 4) {
        res(JSON.parse(this.responseText));
      }
    };

    xml.open("GET", url);
    xml.send();
  });
}

let count = 0,
  data;

function hasData(arr) {
  count++;

  return {
    next: function () {
      return count <= arr.length
        ? { value: arr[count - 1], done: false }
        : { done: true };
    },
  };
}

async function init() {
  data = await fetchData();
}

init();

next.addEventListener("click", function () {
  const dd = hasData(data).next();
  //   console.log(dd.done);

  if (!dd.done) {
    document.querySelector(".card").innerHTML = "";
    const html = `
    <img src="${dd.value.url}" alt="" class="card-img" />
              <div class="card-body">
                <u class="list-group">
                  <li class="list-group-item">Name: Image 0${dd.value.id}</li>
                  <li class="list-group-item">
                    Title:  ${dd.value.title}
                  </li>
                  
                </u>
              </div>
    
    `;

    document.querySelector(".card").insertAdjacentHTML("beforeend", html);
  } else {
    location.reload();
  }
});
