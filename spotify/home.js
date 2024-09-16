let sliderIndex = 0;
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.playlist-info');
const totalSlides = slides.length;

function update() {
    const offset = sliderIndex * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

let nxt = () => {
    sliderIndex = (sliderIndex + 1) % totalSlides;
    update();
    updateTheme(); // Call to update theme colors
};

let prev = () => {
    sliderIndex = (sliderIndex - 1 + totalSlides) % totalSlides;
    update();
    updateTheme(); // Call to update theme colors
};

function updateTheme() {
    const mainContent = document.querySelector(".main-content");
    const slideTheme = slides[sliderIndex].dataset.theme; // Get theme from the current slide

    // Update background according to the theme
    if (slideTheme === 'theme1') {
        mainContent.style.background = "linear-gradient(to right, #000000fb, transparent), linear-gradient(to bottom, #3f00d2f6, transparent)";
    } else if (slideTheme === 'theme2') {
        mainContent.style.background = "linear-gradient(to right, #ff0000fb, transparent), linear-gradient(to bottom, #ff00d2f6, transparent)";
    } else if (slideTheme === 'theme3') {
        mainContent.style.background = "linear-gradient(to right, #00ff00fb, transparent), linear-gradient(to bottom, #00ffd2f6, transparent)";
    }
    // Add more themes if needed
}

document.querySelector('.next').addEventListener("click", nxt);
document.querySelector('.prev').addEventListener("click", prev);

// Initial theme setup
updateTheme();