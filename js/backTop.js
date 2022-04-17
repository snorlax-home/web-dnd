const backToTopButton = document.querySelector('#back-to-top-btn');

window.addEventListener('scroll', scrollFunction);

// This function will show the button when user scroll > 300 pixel and hide the button when user is within 0-300 pixel (vertical axis)
function scrollFunction() {
  // Show Button
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnExit');
      backToTopButton.classList.add('btnEntrance');
      backToTopButton.style.display = 'block';
    }
  }
  // Hide Button
  else {
    if (backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnEntrance');
      backToTopButton.classList.add('btnExit');
      // Add some delay before the button disapper (smoothness)
      setTimeout(function () {
        backToTopButton.style.display = 'none';
      }, 250);
    }
  }
}
// Whenever the button is 'clicked', this function will bring the page back to top
backToTopButton.addEventListener('click', backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
