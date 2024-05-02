const callToAction = document.querySelector('.call-to-action');

callToAction.addEventListener('click', function(event) {
  // Prevent default form submission behavior if the button is inside a form
  event.preventDefault();
  alert('Thank you for your interest in Zero Waste Living! Visit https://en.wikipedia.org/wiki/Zero_waste to learn more.');
});
