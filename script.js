// Toggle Menu
const toggleMenu = document.querySelector("nav .toggle-menu");
const navUl = document.querySelector("nav ul");

toggleMenu.addEventListener("click", () => {
  navUl.classList.toggle("displayed");
  if (navUl.classList.contains("displayed")) {
    toggleMenu.className = "fa-solid fa-circle-xmark toggle-menu";
  } else {
    toggleMenu.className = "fas fa-bars toggle-menu";
  }
});

// Landing Page Slider
const slides = document.querySelectorAll(".slides img");
const prevSlideBtn = document.querySelector(".slider #prev-slide-btn");
const nextSlideBtn = document.querySelector(".slider #next-slide-btn");
const sliderBullets = document.querySelectorAll(".slider .bullets li");
let slideIndex = 0;
let intervalId = null;

function initializeSlider() {
  if (slides.length > 0) {
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 3500);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
    index = slideIndex;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
    index = slideIndex;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displayed");
  });
  slides[index].classList.add("displayed");
  sliderBullets[index].classList.add("active");
}

function removeActiveClass() {
  sliderBullets.forEach((li) => li.classList.remove("active"));
}

sliderBullets.forEach((li, i) => {
  li.addEventListener("click", (e) => {
    removeActiveClass();
    clearInterval(intervalId);
    showSlide(i);
  });
});

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  removeActiveClass();
  showSlide(slideIndex);
}

function nextSlide() {
  removeActiveClass();
  slideIndex++;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", initializeSlider);
prevSlideBtn.addEventListener("click", prevSlide);
nextSlideBtn.addEventListener("click", nextSlide);

// Portfolio Section
const filterMenu = document.querySelector(".portfolio-filter");
const filterMenuItems = document.querySelectorAll(".portfolio-filter li");
const portfolioMenuArticles = document.querySelectorAll(
  ".portfolio-menu article"
);

function handleFilter() {
  filterMenuItems.forEach((li) => li.classList.remove("active"));
  this.classList.add("active");

  portfolioMenuArticles.forEach((article) => {
    article.style.opacity = "0";
    article.style.visibility = "hidden";
    article.style.position = "absolute";
    article.style.height = "0";
    article.style.margin = "0";
    article.style.padding = "0";
  });
  const articles =
    this.dataset.filter === ".all"
      ? portfolioMenuArticles
      : document.querySelectorAll(this.dataset.filter);
  articles.forEach((article) => {
    article.style.opacity = "1";
    article.style.visibility = "visible";
    article.style.position = "relative";
    article.style.height = "auto"; // Restore height
    article.style.margin = ""; // Restore margin
    article.style.padding = ""; // Restore padding
  });
}

filterMenuItems.forEach((li) => {
  li.addEventListener("click", handleFilter);
});
