var navbar, navbarOffset;
if (document.body.clientWidth < 640) {
  navbar = document.querySelector('.top-bar');
} else {
  navbar = document.querySelector('.title-bar');
}
navbarOffset = navbar.getBoundingClientRect().top;

// make navbar sticky after scroll
document.addEventListener('scroll', function() {
  if (navbar.scrollTop > navbarOffset) {
    console.log('stick');
  }
});
