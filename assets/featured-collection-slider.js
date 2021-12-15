document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.featured-collection-splide', {
        rewind: true,
        perPage: screen.width >= 768 ? 4 : 2
    } );
    splide.mount();
});