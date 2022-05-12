const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideLen = slide.length
let counter = 0

let slideWidth = 300 
let slideMargin =  30

slides.style.width = (slideWidth + slideMargin) * slideLen - slideMargin + 'px';

// function moveSlide(num) {
//   slides.style.left = -num * (slideWidth+slideMargin) + 'px'
//   // slides.style.left = -count * (slideWidth + slideMargin) + 'px'
//   currentIdx = num;
// }
// nextBtn.addEventListener('click', function() {
//   if(currentIdx < slideLen-3) {
//     moveSlide(currentIdx + 1)
//   } else {
//     moveSlide(0)
//   }
// });
nextBtn.addEventListener('click', nextClick)
prevBtn.addEventListener('click',prevClick)

function moveSlide() {
  slides.style.left = -counter * (slideWidth + slideMargin) + 'px'
}
function nextClick() {
  if(counter < slideLen-3) {
    counter++
  }else {
    counter = 1
  }
  console.log(counter)
  moveSlide()
}
function prevClick() {
  if(counter > 0) {
    counter--
  }else {
    counter = slideLen-3
  }
  console.log(counter)
  moveSlide()
}
