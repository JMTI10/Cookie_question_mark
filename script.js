let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let cookiesPerClick = parseInt(localStorage.getItem("cookiesPerClick")) || 1;
let autoClickerActive = JSON.parse(localStorage.getItem("autoClickerActive")) || false;
let autoClickerCost = 50;
let doubleCookiesCost = 100;
let goldenCookieCost = 200;
let speedBoostCost = 300;
let autoClickerInterval;

// Update cookie count display with animation
function updateCookieCount() {
    const counter = document.getElementById("cookieCount");
    counter.textContent = cookies;
    counter.style.transform = "scale(1.2)";
    counter.style.transition = "transform 0.2s";
    setTimeout(() => { counter.style.transform = "scale(1)"; }, 200);
    localStorage.setItem("cookies", cookies);
}

// Click cookie to earn cookies
const cookie = document.getElementById("cookie");
cookie.addEventListener("click", function () {
    cookies += cookiesPerClick;
    updateCookieCount();
    createFallingCookie();
});

// Function to create falling cookies from the top
function createFallingCookie() {
    const fallingCookie = document.createElement("img");
    fallingCookie.src = "images/cookie.png";
    fallingCookie.classList.add("falling-cookie");
    fallingCookie.style.left = `${Math.random() * window.innerWidth}px`;
    fallingCookie.style.top = `-50px`;
    document.body.appendChild(fallingCookie);

    setTimeout(() => { fallingCookie.remove(); }, 3000);
}

// Toggle Store Panel
const storeButton = document.getElementById("storeButton");
const storePanel = document.getElementById("store");

storeButton.addEventListener("click", function () {
    storePanel.classList.toggle("active");
});

// Load saved cookies
updateCookieCount();
