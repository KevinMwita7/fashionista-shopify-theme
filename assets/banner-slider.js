function LiveRegion( Splide ) {
  let liveRegion;

  function mount() {
    liveRegion = document.createElement( 'div' );
    liveRegion.setAttribute( 'aria-live', 'polite' );
    liveRegion.setAttribute( 'aria-atomic', 'true' );
    liveRegion.classList.add( 'visually-hidden' );

    Splide.root.appendChild( liveRegion );
    Splide.on( 'moved', onMoved );
  }

  function onMoved() {
    liveRegion.textContent = `Slide ${ Splide.index + 1 } of ${ Splide.length }`;
  }

  function destroy() {
    Splide.root.removeChild( liveRegion );
  }

  return {
    mount,
    destroy,
  }
}

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide');
  splide.mount({ LiveRegion });
});

if (Shopify.designMode) {
  document.addEventListener( 'shopify:section:load', function() {
    var splide = new Splide( '.splide');
    splide.mount({ LiveRegion });
  });

  document.addEventListener( 'shopify:block:select', function({ detail }) {
    let slide1 = document.getElementById("splide01-slide01");
    let slide2 = document.getElementById("splide01-slide02");
    let slide3 = document.getElementById("splide01-slide03");
    if(slide1 && slide1.firstElementChild && JSON.parse(slide1.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
      console.log(0);
    } if(slide2 && slide2.firstElementChild && JSON.parse(slide2.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
      console.log(1);
    }
  });
}