// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
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
function prevSlide() {}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// About Me

document.addEventListener("DOMContentLoaded", () => {
  const progressSection = document.querySelector(".progressbars");
  const skillRanges = document.querySelectorAll(
    '.progressbars input[type="range"]',
  );

  if (!progressSection) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const rect = progressSection.getBoundingClientRect();
    const sectionTopOffset = rect.top + scrollTop;

    const startActivation = sectionTopOffset - windowHeight;

    const animationDistance = 500;
    let scrollProgress = (scrollTop - startActivation) / animationDistance;

    scrollProgress = Math.max(0, scrollProgress);

    skillRanges.forEach((range) => {
      const maxTarget = parseFloat(range.getAttribute("data-target"));

      if (maxTarget) {
        const calculatedValue = scrollProgress * maxTarget;

        range.value = Math.min(calculatedValue, maxTarget);
      }
    });
  });
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
