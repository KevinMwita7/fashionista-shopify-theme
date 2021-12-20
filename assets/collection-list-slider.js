document.addEventListener( 'DOMContentLoaded', function() {
    var swiper = new Swiper("#collection-list-slider", {
        /*pagination: {
            el: ".featured-collection-pagination",
            clickable: true
        },*/
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
    if(Shopify.designMode) {
        document.addEventListener("shopify:section:load", function (event) {
            console.log(event.detail    );
        })   
    }
});

console.log("slider");