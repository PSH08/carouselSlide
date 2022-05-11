const carouselSlide = document.querySelector(".slide_list");
const carouselContents = document.querySelectorAll(".slide_item");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

//counter
let counter = 1;
const size = carouselContents[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";