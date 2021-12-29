function handleSelectedCollectionChange(event) {
    var selectedCollection = document.getElementById("selected-featured-collection");
    console.log(selectedCollection);
}

document.addEventListener('DOMContentLoaded', function() {
    var selectedCollection = document.getElementById("selected-featured-collection");
    if(selectedCollection) {
        selectedCollection.addEventListener('change', function (event) {
            let els = document.getElementsByClassName('featured-collection');
            for(let i = 0; i < els.length; ++i) {
                if(event.target.value == els[i].dataset.index) {
                    els[i].classList.remove("hidden");
                } else {
                    els[i].classList.add("hidden");
                }
            }
        });
    }
});