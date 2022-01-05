document.addEventListener("DOMContentLoaded", function() {
  var colorSwatchesParents = document.getElementsByClassName("s-color-swatch-outer-circle");
  var colorSwatches = document.getElementsByClassName("s-color-swatch-outer-circle");
  for(var i = 0; i < colorSwatches.length; ++i) {
      colorSwatches[i].addEventListener("click", function(event) {
        for(var j = 0; j < colorSwatchesParents.length; ++j) {
            colorSwatchesParents[j].classList.remove("s-color-swatch-selected");
        }
        colorSwatchesParents[i].classList.add("s-color-swatch-selected");
      });
  }
})