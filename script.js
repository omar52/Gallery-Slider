// accessing required elemnts

// 1 - accessing the imgs
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
console.log(imgArray);
// 2 - accessing image container
let container = document.querySelector(".container");

// 2 - accessing left & right arrow
let leftArrow = document.querySelector(".wrapper .images-holder .left");
let rightArrow = document.querySelector(".wrapper .images-holder .right");
// console.log(leftArrow , rightArrow);

// applying event
let iter = 3;
container.innerHTML = `<img src="/image/0${iter}.jpg"></img>`;

// left arrow event

leftArrow.addEventListener("click", () => {
  iter++;
  console.log(iter);
  if (iter < 6) {
    container.innerHTML = `<img src="/image/0${iter}.jpg"></img>`;
  } else {
    iter = 3;
    container.innerHTML = `<img src="/image/0${iter}.jpg"></img>`;
  }
});
// right arrow event

rightArrow.addEventListener("click", () => {
  iter--;
  console.log(iter);
  if (iter > 0 ) {
    container.innerHTML = `<img src="/image/0${iter}.jpg"></img>`;
  } else {
    iter = 3;
    container.innerHTML = `<img src="/image/0${iter}.jpg"></img>`;
  }
});
