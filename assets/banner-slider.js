document.addEventListener('DOMContentLoaded', function() {
  var splide = new Splide('.splide');
  splide.mount();

  if (Shopify.designMode) {
    document.addEventListener('shopify:block:select', function({ detail }) {
      let slide1 = document.getElementById('splide01-slide01');
      let slide2 = document.getElementById('splide01-slide02');
      let slide3 = document.getElementById('splide01-slide03');
      if(slide1 && slide1.firstElementChild && JSON.parse(slide1.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
        splide.go(0);
      } else if(slide2 && slide2.firstElementChild && JSON.parse(slide2.firstElementChild.dataset.shopifyEditorBlock).id === detail.blockId) {
        splide.go(1);
      }
    });
  }  
});