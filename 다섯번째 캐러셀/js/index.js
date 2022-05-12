const slides = document.querySelector('.slides');
const list = document.querySelectorAll('.slides li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let counter = 0;
let slideLen = list.length;
let slideWidth = 600;
slides.style.width = (slideWidth * slideLen)+'px';

function move() {
  slides.style.left = -counter * slideWidth + 'px';
}
function next() {
  if(counter < slideLen - 1) {
    counter++
  } else {
    counter = 1
  }
  console.log(counter)
  move()
}
function prev() {
  if(counter > 0) {
    counter--
  } else {
    counter = slideLen - 1
  }
  console.log(counter)
  move()
}
nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)
function auto() {
  next()
}
setInterval(auto, 2000)
