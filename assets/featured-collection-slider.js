document.addEventListener( 'DOMContentLoaded', function() {
    let splides = document.getElementsByClassName("featured-collection-slide");

    var splide = new Splide( '.featured-collection-splide', {
        arrows: (screen.width >= 768 && splides.length > 4) || (screen.width < 768 && splides.length > 2),
        rewind: true,
        perPage: screen.width >= 768 && splides.length > 3 ? 4 : 2
    } );
    splide.mount();
});