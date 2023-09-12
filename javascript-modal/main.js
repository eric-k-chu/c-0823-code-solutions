const $modalButton = document.querySelector('.modal-button');
const $overlay = document.querySelector('.overlay');
const $noButton = document.querySelector('.no-button');

function handleModalButtonClick(event) {
  $overlay.style.display = 'flex';
}

function handleNoButtonClick(event) {
  $overlay.style.display = 'none';
}

$modalButton.addEventListener('click', handleModalButtonClick);
$noButton.addEventListener('click', handleNoButtonClick);
