let currentSlide = 0;
let slides;

window.addEventListener("load", () => {
  slides = document.querySelectorAll('.slide');
  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
