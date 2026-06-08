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
  const progressValue = scrollFraction * 0.95;
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

// My Projects

const allBtn = document.getElementById("allbtn");
const htmlBtn = document.getElementById("htmlbtn");
const cssBtn = document.getElementById("cssbtn");
const jsBtn = document.getElementById("jsbtn");
const allProjects = document.getElementById("allprojects");
const htmlProject = document.getElementById("htmlproject");
const cssProject = document.getElementById("cssproject");
const jsProject = document.getElementById("jsproject");

// allBtn.addEventListener("click", (event) => {
//   if (allProjects.style.display === "block") {
//     allProjects.style.display = "none";
//   } else {
//     allProjects.style.display = "block";
//   }
// });

// htmlBtn.addEventListener("click", (event) => {
//   if (htmlProject.style.display === "block") {
//     htmlProject.style.display = "none";
//     cssProject.style.display = "none";
//     jsProject.style.display = "none";
//   } else {
//     htmlProject.style.display = "block";
//     cssProject.style.display = "none";
//     jsProject.style.display = "none";
//   }
// });
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");

    const selectedCategory = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (
        selectedCategory === "all" ||
        card.getAttribute("data-category") === selectedCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
