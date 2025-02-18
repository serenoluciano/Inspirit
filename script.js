document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  if (!dropdown.contains(event.target)) {
      dropdownMenu.style.display = 'none';
  }
});

document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
  event.preventDefault();
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

// Código para el menú hamburguesa
document.querySelector('.menu-toggle').addEventListener('click', function() {
  var menu = document.querySelector('header ul');
  menu.classList.toggle('show');
});

let currentSlide = 0;

function moveSlide(direction) {
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

currentSlide += direction;

if (currentSlide < 0) {
  currentSlide = totalSlides - 1;
} else if (currentSlide >= totalSlides) {
  currentSlide = 0;
}

const newTransformValue = -currentSlide * 100;
document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(() => {
moveSlide(1);
}, 100000); // Cambiar de slide cada 5 segundos


