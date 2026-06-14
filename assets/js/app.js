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

// const timemanagment = document.getElementById("timemanagment");
// // let value = document.getElementById("timemanagment").value;

// // timemanagment.addEventListener("scroll", (event) => {
// //   event.target.value = 0;
// // });
// // timemanagment.addEventListener("scroll", (event) => {
// //   event.target.value = 0.98;
// // });
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
  const progressValue = scrollFraction * 0.9;
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

// TESTAMONIALS

// const testimonialsData = [
//   {
//     image: "assets/img/test1.jpg",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. eligendi ipsum iste consectetur earum rerum voluptas dolor, quos magnam sunt.",
//     name: "J.R.R. Tolkien",
//     title: "CEO",
//   },
//   {
//     image: "assets/img/test2.jpg",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. eligendi ipsum iste consectetur earum rerum voluptas dolor, quos magnam sunt.",
//     name: "Legolas Greenleaf",
//     title: "Manager",
//   },
//   {
//     image: "assets/img/test3.jpg",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. eligendi ipsum iste consectetur earum rerum voluptas dolor, quos magnam sunt.",
//     name: "Ronnie James Dio",
//     title: "Founder of DIO",
//   },
//   {
//     image: "assets/img/test4.jpg",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. eligendi ipsum iste consectetur earum rerum voluptas dolor, quos magnam sunt.",
//     name: "Tony Iommi",
//     title: "lead guitarist of Black Sabbath",
//   },
// ];

// function slider() {
//   const testimonials = document.querySelectorAll(".testimonial");
//   const dots = document.querySelectorAll(".dot");
//   // alltestimonial = document.querySelector(".testimonials");

//   let currentindex = 1;

//   function updateSlides() {
//     testimonials.forEach((testimonial, index) => {
//       if (index === currentindex) {
//         testimonial.classList.add("active");
//       } else {
//         testimonial.classList.remove("active");
//       }
//     });
//     dots.forEach((dot, index) => {
//       if (index === currentIndex) {
//         dot.classList.add("active");
//       } else {
//         dot.classList.remove("active");
//       }
//     });
//   }
//   // const dots = document.querySelectorAll(".dot");
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentindex = index;
//       updateSlides();
//     });
//   });
//   updateSlides();
// }
// slider();

function slider() {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let currentindex = 0;

  function updateSlides() {
    testimonials.forEach((testimonial, index) => {
      if (index === currentindex) {
        testimonial.classList.add("active");
      } else {
        testimonial.classList.remove("active");
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentindex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentindex = index;
      updateSlides();
    });
  });

  updateSlides();
}

slider();

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("active"));
    testimonials.forEach((t) => t.classList.remove("active"));

    dot.classList.add("active");
    testimonials[index].classList.add("active");
  });
});

// Contact Us
const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    website: document.getElementById("website").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      modal.style.display = "block";
      form.reset();
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
});
