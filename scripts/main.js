var navbar, navbarOffset;
if (document.body.clientWidth < 640) {
  navbar = document.querySelector('.title-bar');
} else {
  navbar = document.querySelector('.top-bar');
}
navbarOffset = navbar.getBoundingClientRect().top - navbar.clientHeight;

// make navbar sticky after scroll
document.addEventListener('scroll', function() {
  if (window.pageYOffset > navbarOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
