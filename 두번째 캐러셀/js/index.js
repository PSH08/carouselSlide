const menus = document.getElementsByClassName('carousel-items');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const menu = menus.length
let count = 0;
nextBtn.addEventListener('click', function() {
  moveNextStep()
});
prevBtn.addEventListener('click', function() {
  movePrevStep()
});
function upDate() {
  for(let a of menus) {
    a.classList.remove('carsel-itmes--visible')
    a.classList.add('carsel-items--hidden')
  }
  menus[count].classList.add('carsel-itmes--visible')
}
function moveNextStep() {
  if(count === menu -1) {
    count = 0
  }else {
    count++
  }
  upDate();
}
function movePrevStep() {
  
  if(count === 0) {
    count = menu - 1
  }else {
    count--
  }
  upDate();
}
