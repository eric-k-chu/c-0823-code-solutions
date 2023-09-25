const $img = document.querySelector('.img-wrapper img');
const $navCircles = document.querySelectorAll('.fa-circle');
const $navRight = document.querySelector('.right');
const $navLeft = document.querySelector('.left');
const $navCircle = document.querySelector('.nav-circle');

const imgContainer = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

let imgIndex = 0;

let imgCarouselID = setInterval(imgCarousel, 3000);

function imgCarousel() {
  setInactive(imgIndex);
  imgIndex++;
  if (imgIndex < imgContainer.length) {
    setActive(imgIndex);
  } else {
    clearInterval(imgCarouselID);
    imgIndex = 0;
    setActive(imgIndex);
    imgCarouselID = setInterval(imgCarousel, 3000);
  }
}

function setActive(index) {
  $img.src = imgContainer[imgIndex];
  $navCircles[index].className = 'fa-sharp fa-solid fa-circle';
}

function setInactive(index) {
  $navCircles[index].className = 'fa-sharp fa-regular fa-circle';
}

$navRight.addEventListener('click', function (event) {
  clearInterval(imgCarouselID);
  setInactive(imgIndex);
  imgIndex++;
  if (imgIndex >= imgContainer.length) {
    imgIndex = 0;
  }
  setActive(imgIndex);
  setTimeout(function () {
    imgCarouselID = setInterval(imgCarousel, 3000);
  }, 3000);
});

$navLeft.addEventListener('click', function (event) {
  clearInterval(imgCarouselID);
  setInactive(imgIndex);
  imgIndex--;
  if (imgIndex <= 0) {
    imgIndex = imgContainer.length - 1;
  }
  setActive(imgIndex);
  setTimeout(function () {
    imgCarouselID = setInterval(imgCarousel, 3000);
  }, 3000);
});

$navCircle.addEventListener('click', function (event) {
  const selected = event.target.closest('button').dataset.id;
  if (selected !== null) {
    clearInterval(imgCarouselID);
    setInactive(imgIndex);
    imgIndex = Number(selected);
    setActive(imgIndex);
    setTimeout(() => {
      imgCarouselID = setInterval(imgCarousel, 3000);
    }, 3000);
  }
});
