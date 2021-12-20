function initSlider() {
    return new Swiper("#collection-list-slider", {
        observer: true,
observeParents: true,
parallax:true,
        pagination: {
            el: ".collection-list-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
                slidesPerView: 4,
            }
        }
    });
}

document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = initSlider();

    if(Shopify.designMode) {
        document.addEventListener("shopify:section:load", function (event) {
            console.log("section load");
            swiper = initSlider();
        });

        document.addEventListener("shopify:section:unload", function (event) {
            swiper.destroy();
            console.log("section unload");
        })
    }
});