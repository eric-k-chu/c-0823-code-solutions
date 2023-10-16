const $letters = document.querySelectorAll('span');

let currentIndex = 0;

function handleKeyDown(event) {
  if (currentIndex < $letters.length) {
    if ($letters[currentIndex].textContent === event.key) {
      $letters[currentIndex].className = 'text-green';
      currentIndex++;

      if (currentIndex < $letters.length) {
        $letters[currentIndex].className = 'underline';
      }
    } else {
      $letters[currentIndex].className = 'underline text-red';
    }
  }
}

const $letter = document.querySelector('.container');

$letter.addEventListener('keydown', handleKeyDown);
