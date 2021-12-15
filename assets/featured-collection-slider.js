document.addEventListener( 'DOMContentLoaded', function() {
    let splides = document.getElementsByClassName("splide__slide");

    var splide = new Splide( '.featured-collection-splide', {
        arrows: splides.length > 4,
        rewind: true,
        perPage: screen.width >= 768 ? 4 : 2
    } );
    splide.mount();
});