let isLightMode = true;

const $circle = document.querySelector('.circle');
const $body = document.querySelector('body');

function toggleLightMode(event) {
  if (isLightMode) {
    $body.className = 'bg-dark';
    $circle.className = 'circle bulb-dark shadow-dark';
    isLightMode = false;
  } else {
    $body.className = 'bg-light';
    $circle.className = 'circle bulb-light shadow-light';
    isLightMode = true;
  }
}

$circle.addEventListener('click', toggleLightMode);
