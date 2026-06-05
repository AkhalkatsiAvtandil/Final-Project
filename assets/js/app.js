// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
  //   slides[slideIndex].classList.add("displaySlide");
  //   intervalId = setInterval(nextSlide, 5000);
  //   console.log(intervalId);
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  //   clearInterval(intervalId);
  //   slideIndex--;
  // showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// About Me

const timemanagment = document.getElementById("timemanagment");
// let value = document.getElementById("timemanagment").value;

// timemanagment.addEventListener("scroll", (event) => {
//   event.target.value = 0;
// });
// timemanagment.addEventListener("scroll", (event) => {
//   event.target.value = 0.98;
// });
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // timemanagment.value = "0.07";
  // behavior: "smooth";
  const scrollFraction = scrollTop / docHeight;
  const progressValue = scrollFraction * 0.96;
  timemanagment.value = progressValue;
  behavior: "smooth";
});

const html = document.getElementById("html");
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollFraction = scrollTop / docHeight;
  const progressValue = scrollFraction * 0.89;
  html.value = progressValue;
});

const css = document.getElementById("css");
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollFraction = scrollTop / docHeight;
  const progressValue = scrollFraction * 0.87;
  css.value = progressValue;
});

const js = document.getElementById("js");
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollFraction = scrollTop / docHeight;
  const progressValue = scrollFraction * 0.71;
  js.value = progressValue;
});
