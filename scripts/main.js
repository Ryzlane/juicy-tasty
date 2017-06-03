var sliderImgNav=document.querySelectorAll('.slidernav img'),
currentlyActive=document.querySelector('.activeslide'),
slides=document.querySelectorAll('.slide'),
slidingarrow=document.querySelector('.slidingarrow'),
navbar = document.querySelector('.top-bar'),
header = document.querySelector('.headerMain'),
navbarOffset = document.querySelector('header').clientHeight,
figcaptions = document.querySelectorAll('#main figure p'),
frames = document.querySelectorAll('#main figure .frame'),
previewImages = document.querySelectorAll('#main figure img'),
sliderTitleNav = document.querySelectorAll('.slidernav h3'),
documentWidthEm = document.body.clientWidth / parseFloat(window.getComputedStyle(document.body).fontSize),
logo = document.querySelector('.logo'),
right= document.querySelector('.arrowtoright'),
left= document.querySelector('.arrowtoleft'),
p=0,
borderHeight;

// Carousel from values page

function navigate(direction) {
  p+=direction;
  if (direction =-1 && p<0) {
    p=slides.length-1
  }
  if (direction=1 && p>slides.length-1) {
    p=0;
  }
  currentlyActive=document.querySelector('.activeslide');
  currentlyActive.classList.remove('activeslide');
  currentlyActive=slides[p];
  currentlyActive.classList.add('activeslide');
  slidingarrow.style.left= (100*p)+44 + "%";
}

if (right != null) {
  right.addEventListener(
    'click',
    function(){
      navigate(1);
    }
  );
  left.addEventListener(
    'click',
    function(){
      navigate(-1);
    }
  );
}

for (var i =0; i < sliderImgNav.length;i++) {
  sliderImgNav[i].addEventListener(
    'click',
    function() {
      p = parseInt(this.getAttribute('data-gotoslide'));
      currentlyActive = document.querySelector('.activeslide');
      currentlyActive.classList.remove('activeslide');
      slides[this.getAttribute('data-gotoslide')].classList.add('activeslide');
      slidingarrow.style.left= this.getAttribute('data-movearrow') +"%";
    }
  );
}

for (var i =0; i < sliderImgNav.length;i++) {
  sliderTitleNav[i].addEventListener(
    'click',
    function() {
      p=parseInt(this.getAttribute('data-gotoslide'));
      currentlyActive=document.querySelector('.activeslide');
      currentlyActive.classList.remove('activeslide');
      slides[this.getAttribute('data-gotoslide')].classList.add('activeslide');
      slidingarrow.style.left= this.getAttribute('data-movearrow') + "%";
    }
  );
}

// make navbar sticky after scroll
document.addEventListener('scroll', function() {
  // only apply if on landing page
  if (header != null) {
    navbarOffset = header.clientHeight;
    if (window.pageYOffset + 3 > navbarOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
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
  // Position logo img
  if (documentWidthEm > 39.9375) {
    logo.style.left = '0' + previewImages[0].getBoundingClientRect().left + 'px';
  }
}

updateFigures();

window.onresize = function() {
  documentWidthEm = document.body.clientWidth / parseFloat(window.getComputedStyle(document.body).fontSize);
  updateFigures();
}
