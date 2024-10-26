let index = 0;
const slides = document.querySelectorAll(".carousel-slide img");

function showSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    const offset = -index * 100; 
    document.querySelector(".carousel-slide").style.transform = `translateX(${offset}%)`;
}


setInterval(showSlide, 3000);
