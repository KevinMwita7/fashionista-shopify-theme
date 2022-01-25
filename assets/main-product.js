var swiper = new Swiper(".mySwiper", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    slidesPerView: 6,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",        
    }
});

var swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});