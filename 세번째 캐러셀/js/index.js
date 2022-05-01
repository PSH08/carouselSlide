const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.slider > li');
let count = 0;
let list = slides.length
nextBtn.addEventListener('click', function() {
  nextMove()
})
prevBtn.addEventListener('click', function() {
  prev()
})
function start() {
  for(let a of slides) {
    a.classList.remove('bye')
    a.classList.add('hi')
  }
  for (let i = 0; i < count; i++) {
    slides[i].classList.add('bye')
  }
  slides[count].classList.remove('bye')
}
function nextMove() {
  if(count === list-1) {
    count = 0
  } else {
    count++
  }
  start()
}
console.log(list)