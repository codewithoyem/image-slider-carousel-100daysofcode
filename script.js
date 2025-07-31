const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const totalSlides = slides.children.length;
let index = 0;
let autoPlayInterval = null;

function goToSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  goToSlide(index + 1);
}

function prevSlide() {
  goToSlide(index - 1);
}

// Autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

rightArrow.addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
  startAutoPlay();
});

leftArrow.addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
  startAutoPlay();
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    stopAutoPlay();
    goToSlide(Number(e.target.dataset.index));
    startAutoPlay();
  });
});

goToSlide(0);
startAutoPlay();
