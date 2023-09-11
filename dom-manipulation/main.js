let numOfClicks = 0;
const $buttonHot = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function handleClick(event) {
  numOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numOfClicks;

  if (numOfClicks < 4) {
    event.target.className = 'hot-button cold';
  } else if (numOfClicks < 7) {
    event.target.className = 'hot-button cool';
  } else if (numOfClicks < 10) {
    event.target.className = 'hot-button tepid';
  } else if (numOfClicks < 13) {
    event.target.className = 'hot-button warm';
  } else if (numOfClicks < 16) {
    event.target.className = 'hot-button hot';
  } else {
    event.target.className = 'hot-button nuclear';
  }
}
$buttonHot.addEventListener('click', handleClick);
