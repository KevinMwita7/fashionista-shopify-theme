function initSlider() {
    return new Swiper("#collection-list-slider", {
        pagination: {
            el: ".collection-list-pagination",
            clickable: true
        },
        spaceBetween: 20,
        slidesPerView: "auto"
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
            var block = JSON.parse(event.target.dataset.shopifyEditorBlock);
            if(block.type === "collection_list_slide") {
                swiper.slideTo(+event.target.dataset.slideIndex - 1);
            }
        });
    }
});