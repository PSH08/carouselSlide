const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIdx = 0
let slideLen = slide.length
let count = 1

let slideWidth = 300 
let slideMargin =  30

slides.style.width = (slideWidth + slideMargin) * slideLen - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 330 + 'px'
  // slides.style.left = -count * (slideWidth + slideMargin) + 'px'
  currentIdx = num;
}
nextBtn.addEventListener('click', function() {
  if(currentIdx < slideLen-3) {
    moveSlide(currentIdx + 1)
  } else {
    moveSlide(0)
  }
});
// nextBtn.addEventListener('click', next)

// function next() {
//   if(slideLen === 8) {
//     currentIdx++
//   }else {
//     currentIdx = 0;
//   }
//   moveSlide()
// }
// console.log(slideLen)