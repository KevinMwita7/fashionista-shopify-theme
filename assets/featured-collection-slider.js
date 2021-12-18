document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = new Swiper("#featured-collection-slider", {
        pagination: {
            el: ".featured-collection-pagination",
            clickable: true
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    });
});