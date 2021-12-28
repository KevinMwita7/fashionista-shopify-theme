function handleSelectedCollectionChange(event) {
    var selectedCollection = document.getElementById("selected-featured-collection");
    console.log(selectedCollection);
}

document.addEventListener('DOMContentLoaded', function() {
    handleSelectedCollectionChange();

    if(Shopify.designMode) {
        document.addEventListener('shopify:block:select', function(event) {
            var block = JSON.parse(event.target.dataset.shopifyEditorBlock);
            console.log(block);
            if(block.type === "featured_collection") {
                handleSelectedCollectionChange();
            }
        });
    }
});