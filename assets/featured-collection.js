function handleSelectedCollectionChange(event) {
    var selectedCollection = document.getElementById("selected-featured-collection");
    console.log(selectedCollection);
}

document.addEventListener('DOMContentLoaded', function() {
    handleSelectedCollectionChange();

    if(Shopify.designMode) {
        document.addEventListener('shopify:section:load', handleSelectedCollectionChange);
    }
});