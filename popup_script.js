document.addEventListener("DOMContentLoaded", function () {
    const store = document.getElementById("store");
    const storeButton = document.getElementById("storeButton");

    storeButton.addEventListener("click", function () {
        // Toggle the store's visibility
        store.classList.toggle("active");
    });
});
