let currentIndexes = {
    slider1: 0,
    slider2: 0
};


function changeSlide(sliderId, direction) {
    const slider = document.querySelector(`#${sliderId} .slider`);
    const images = document.querySelectorAll(`#${sliderId} .slider img`);
    const totalImages = images.length;

    currentIndexes[sliderId] += direction;

    
    if (currentIndexes[sliderId] < 0) {
        currentIndexes[sliderId] = totalImages - 1;
    } else if (currentIndexes[sliderId] >= totalImages) {
        currentIndexes[sliderId] = 0;
    }

    
    const offset = -currentIndexes[sliderId] * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}


let autoSlideInterval1 = setInterval(() => changeSlide('slider1', 1), 3000);
let autoSlideInterval2 = setInterval(() => changeSlide('slider2', 1), 3000);


function redirectToWhatsApp() {
    const phoneNumber = '6281808151558'; 
    const message = 'Halo saya ingin tanya untuk pricelist design '; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
}