var navbar, navbarOffset, figcaptions, previewImages, frames, borderHeight;
// Only make it sticky on desktop
navbar = document.querySelector('.top-bar');
navbarOffset = navbar.getBoundingClientRect().top - (navbar.clientHeight);

// make navbar sticky after scroll
document.addEventListener('scroll', function() {
  if (window.pageYOffset + 11 > navbarOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

figcaptions = document.querySelectorAll('#main figure p');
frames = document.querySelectorAll('#main figure .frame');
previewImages = document.querySelectorAll('#main figure img');

updateFigures();
window.onresize = function() {
  updateFigures();
}

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
