/*function LiveRegion( Splide ) {
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

document.addEventListener('DOMContentLoaded', function() {
  var splide = new Splide('.splide', { arrows: screen.width >= 768 });
  splide.mount({ LiveRegion } );

  if (Shopify.designMode) {
    document.addEventListener('shopify:block:select', function({ detail }) {
      let slide1 = document.getElementById('splide01-slide01');
      let slide2 = document.getElementById('splide01-slide02');
      let slide3 = document.getElementById('splide01-slide03');
      if(slide1 && slide1.firstElementChild && JSON.parse(slide1.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
        splide.go(0);
      } else if(slide2 && slide2.firstElementChild && JSON.parse(slide2.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
        splide.go(1);
      } else if(slide3 && slide3.firstElementChild && JSON.parse(slide3.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
        console.log(detail);
        splide.go(2);
      }
    });

    document.addEventListener('shopify:section:select', function({ detail }) {
      if(detail.load) {
        splide.destroy();
        splide = new Splide('.splide');
        splide.mount({ LiveRegion });
      }
    })
  }
});*/

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: true,
    breakpoints: {
      0: {
        direction: "horizontal",
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      750: {
        direction: "vertical",
        // pagination: true
      }
    }
  });
})