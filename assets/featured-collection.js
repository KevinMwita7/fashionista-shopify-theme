function handleSelectedCollectionChange(event) {
    var selectedCollection = document.getElementById("selected-featured-collection");
    console.log(selectedCollection);
}

document.addEventListener('DOMContentLoaded', function() {
    // handleSelectedCollectionChange();
    var selectedCollection = document.getElementById("selected-featured-collection");
    if(selectedCollection) {
        selectedCollection.addEventListener('change', function (event) {
            let els = document.getElementsByClassName('featured-collection');
            for(let i = 0; i < els.length; ++i) {
                console.log(els[i]);
            }
        });
    }

    /*if(Shopify.designMode) {
        document.addEventListener('shopify:section:load', function(event) {
            var block = JSON.parse(event.target.dataset.shopifyEditorBlock);
            console.log(block);
            if(block.type === "featured_collection") {
                handleSelectedCollectionChange();
            }
        });
    }*/
});