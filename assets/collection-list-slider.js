function initSlider() {
    return new Swiper("#collection-list-slider", {
        pagination: {
            el: ".collection-list-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: "auto",
        /*breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }*/
    });
}

document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = initSlider();

    if(Shopify.designMode) {
        document.addEventListener("shopify:section:load", function (event) {
            swiper = initSlider();
        });

        document.addEventListener("shopify:section:unload", function (event) {
            swiper.destroy();
        });

        document.addEventListener("shopify:block:select", function (event) {
            swiper.slideTo(+event.target.dataset.slideIndex - 1);
            // if(event.detail.load) {}
        });
    }
});