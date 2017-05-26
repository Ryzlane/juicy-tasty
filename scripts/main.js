var sliderImgNav=document.querySelectorAll('.slidernav img'),
currentlyActive=document.querySelector('.activeslide'),
slides=document.querySelectorAll('.slide'),
slidingarrow=document.querySelector('.slidingarrow'),
navbar = document.querySelector('.top-bar'),
navbarOffset = navbar.getBoundingClientRect().top - (navbar.clientHeight),
figcaptions = document.querySelectorAll('#main figure p'),
frames = document.querySelectorAll('#main figure .frame'),
previewImages = document.querySelectorAll('#main figure img'),
borderHeight;

// Carousel from values page
for (var i =0; i < sliderImgNav.length;i++) {
  sliderImgNav[i].addEventListener(
    'click',
    function() {
      var currentlyActive=document.querySelector('.activeslide');
      currentlyActive.classList.remove('activeslide');
      slides[this.getAttribute('data-gotoslide')].classList.add('activeslide');
      slidingarrow.style.left= this.getAttribute('data-movearrow') + "%";
    }
  );
}

// make navbar sticky after scroll
document.addEventListener('scroll', function() {
  if (window.pageYOffset + 11 > navbarOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Display image borders on landing page
function updateFigures() {
  for (i=0; i<figcaptions.length; i++) {
    // Position figcaptions
    figcaptions[i].style.width = '0' + previewImages[i].offsetWidth + 'px';
    borderHeight = previewImages[i].offsetHeight - 30;
    figcaptions[i].style.borderTopWidth = borderHeight + 'px';
    // Set frame dimensions
    frames[i].style.width = '0' + previewImages[i].offsetWidth + 'px';
    frames[i].style.height = '0' + previewImages[i].offsetHeight + 'px';
  }
}

updateFigures();
window.onresize = function() {
  updateFigures();
}
