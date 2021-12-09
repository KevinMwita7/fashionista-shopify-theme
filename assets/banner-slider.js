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
    // console.log(detail, `[data-shopify-editor-block]="{"id":"${detail.blockId}","type":"slide"}"`, JSON.stringify({ id: detail.blockId, type: "slide" }));
    let blocks = document.querySelectorAll(`[data-shopify-editor-block]="${JSON.stringify({ id: detail.blockId, type: "slide" })}"`);
    console.log(blocks);
    // console.log(document.querySelectorAll('[data-shopify-editor-block]'));
  });
}