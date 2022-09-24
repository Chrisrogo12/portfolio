
let items = document.querySelectorAll('li a , #logo');
// obtener todos los elementos del barra navegacion y el logo

items.forEach(element => {
  // añadir el elemento click
  element.addEventListener('click', () => {
    // poner todos los elementos en color blanco
    items.forEach(element => {
      element.setAttribute('class', '');
    });
    // al elemento donde se hizo click se pone el color del tema
    element.setAttribute('class', 'active');
  });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" carousel_active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " carousel_active";
}