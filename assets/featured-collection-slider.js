document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = new Swiper("#featured-collection-slider", {
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 5
            }
        }
    });
});