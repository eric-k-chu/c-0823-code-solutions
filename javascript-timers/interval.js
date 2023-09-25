const $header = document.querySelector('.countdown-display');
let count = 4;

const countdownInterval = setInterval(function () {
  $header.textContent = `${count}`;
  count--;
  if (count < 0) {
    clearInterval(countdownInterval);
    $header.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
