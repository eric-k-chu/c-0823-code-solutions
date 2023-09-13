const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const obj = {};
  obj.name = $contactForm.elements.name.value;
  obj.email = $contactForm.elements.email.value;
  obj.message = $contactForm.elements.message.value;
  console.log(obj);
  $contactForm.reset();
});
