document.addEventListener( 'DOMContentLoaded', function() {
    let splides = document.getElementsByClassName("featured-collection-slide");

    var splide = new Splide( '.featured-collection-splide', {
        arrows: (screen.width >= 768 && splides.length > 4) || (screen.width < 768 && splides.length > 2),
        rewind: true,
        perPage: 5
        /**
        arrows: (screen.width < 750 && splides.length > 2) || (screen.width >= 750 && screen.width < 990 && splides.length > 3) || (screen.width >= 990 && splides.length > 4),
        rewind: true,
        perPage:  screen.width >= 750 && screen.width < 990 && splides.length > 2 ? 3 : screen.width >= 990 && splides.length > 3 ? 4 : 2
         */
    } );
    splide.mount();
});