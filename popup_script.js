document.addEventListener("DOMContentLoaded", function () {
    const store = document.getElementById("store");
    const storeButton = document.getElementById("storeButton");

    storeButton.addEventListener("click", function () {
        store.classList.toggle("active");
    });
});
