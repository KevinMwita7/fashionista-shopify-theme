var dialogEl = document.getElementById("product-quick-view-dialog");
var dialog = new A11yDialog(dialogEl);

dialog.on('show', function(element, event) {
    fetch("/products/" + event.target.dataset.productHandle)
    .then(function(response) {
        return response.json()
    })
    .then(function(product) {
        console.log(product);
    })
    .catch(function(error) {
        console.log(error);
    });
})

/*dialog.on('show', function() {
    var swiper = new Swiper(".mySwiper", {
        // loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
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
});*/

/**
 * <div class="product-images-gallery">
                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper product-images-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="image1.png" alt="crocs">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>                        
                </div>
                
                <div thumbsSlider="" class="swiper product-images-thumbs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="image1.png" alt="crocs">
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details">
                <h1 id="product-quick-view-dialog-title">Your dialog title</h1>                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
 */