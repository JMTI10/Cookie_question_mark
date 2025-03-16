document.addEventListener("DOMContentLoaded", function () {
    const store = document.getElementById("store");
    const storeButton = document.getElementById("storeButton");

    storeButton.addEventListener("click", function () {
        if (store.classList.contains("active")) {
            store.classList.remove("active");
        } else {
            store.classList.add("active");
        }
    });
});
