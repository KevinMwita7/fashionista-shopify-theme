document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = new Swiper("#featured-collection-slider", {
        pagination: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50
            }
        }
    });
});