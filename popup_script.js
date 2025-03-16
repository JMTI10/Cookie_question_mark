document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");

    openPopupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});