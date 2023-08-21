"use strict";
const leftArrow = document.querySelector(".intro__button--1");
const rightArrow = document.querySelector(".intro__button--2");
const image = document.querySelector(".intro__img");

leftArrow.addEventListener("click", () => {
  image.src = "img/Garden-maze-3.jpg";
  if (image.src === "img/Garden-maze-3.jpg") {
    image.src === "img/Garden-maze.jpg";
  }
});

rightArrow.addEventListener("click", () => {
  image.src = "img/Garden-maze.jpg";
});
