const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
let intervalId; // For autoplay

function goToSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    updateDots();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAutoplay() {
    intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
    clearInterval(intervalId);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

createDots();
// startAutoplay(); // Uncomment this line to enable autoplay