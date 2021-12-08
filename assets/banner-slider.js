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

  document.addEventListener( 'shopify:block:select', function(blockId, sectionId, load) {
    console.log("reloaded: " + load + " blockId: " + blockId);
  });
}