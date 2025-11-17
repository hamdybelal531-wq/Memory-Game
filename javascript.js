let cards = document.querySelector(".cards");
let boxcard = document.querySelector(".boxcard");
let front = document.querySelector(".boxcard .front");

let spanrong = document.querySelector(".info .rong span");
let namegame = document.querySelector(".info .name span");
let congrz = document.querySelector(".congrz");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    namegame.innerHTML = prompt("Your name") || "Unknown";
  }, 500);
});

let allclicking = [];

let boxarray = Array.from(cards.children);

let fakearray = [...Array(boxarray.length).keys()];

shuffle(fakearray);

boxarray.forEach((ele, index) => {
  ele.style.order = fakearray[index];

  ele.addEventListener("click", function () {
    flibclick(ele);
  });
});
function shuffle(Array) {
  for (let i = 0; i < Array.length; i++) {
    let random = Math.floor(Math.random() * Array.length);

    [Array[random], Array[i]] = [Array[i], Array[random]];
  }
}

function flibclick(elemnetselect) {
  elemnetselect.classList.add("clicking");

  let thefilb = boxarray.filter((filb) => filb.classList.contains("clicking"));

  if (thefilb.length === 2) {
    stopclicking1();
    checkmathing(thefilb);
  }
}

function stopclicking1() {
  cards.classList.add("stopclicking");

  setTimeout(() => {
    cards.classList.remove("stopclicking");
  }, 1000);
}
function checkmathing(check) {
  if (check[0].dataset.move === check[1].dataset.move) {
    check[0].classList.remove("clicking");
    check[1].classList.remove("clicking");
    check[0].classList.add("matchiing", "stopclicking");
    check[1].classList.add("matchiing", "stopclicking");
    let theMathcing = boxarray.filter((e) => e.classList.contains("matchiing"));
    if (theMathcing.length === 20) {
      congrz.innerHTML = `Congrz Your Tries is ${spanrong.innerHTML} Thanks `;
      congrz.style.display = "block";
    }
  } else {
    setTimeout(() => {
      check[0].classList.remove("clicking");
      check[1].classList.remove("clicking");
    }, 1000);
    spanrong.innerHTML = +spanrong.innerHTML + 1;
  }
}
