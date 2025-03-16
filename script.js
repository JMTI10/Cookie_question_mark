let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let cookiesPerClick = parseInt(localStorage.getItem("cookiesPerClick")) || 1;
let autoClickerCost = 50;
let doubleCookiesCost = 100;
let goldenCookieCost = 200;
let speedBoostCost = 300;
let autoClickerActive = false;
let autoClickerInterval;

// Update cookie count display
function updateCookieCount() {
    document.getElementById("cookieCount").textContent = cookies;
    localStorage.setItem("cookies", cookies);
}

// Click cookie to earn cookies
const cookie = document.getElementById("cookie");
cookie.addEventListener("click", function () {
    cookies += cookiesPerClick;
    updateCookieCount();
});

// Upgrade: Auto Clicker
const autoClickerBtn = document.getElementById("autoClicker");
autoClickerBtn.addEventListener("click", function () {
    if (cookies >= autoClickerCost && !autoClickerActive) {
        cookies -= autoClickerCost;
        updateCookieCount();
        autoClickerActive = true;
        autoClickerInterval = setInterval(() => {
            cookies += cookiesPerClick;
            updateCookieCount();
        }, 1000);
    }
});

// Upgrade: Double Cookies per Click
const doubleCookiesBtn = document.getElementById("doubleCookies");
doubleCookiesBtn.addEventListener("click", function () {
    if (cookies >= doubleCookiesCost) {
        cookies -= doubleCookiesCost;
        cookiesPerClick *= 2;
        updateCookieCount();
        localStorage.setItem("cookiesPerClick", cookiesPerClick);
    }
});

// Upgrade: Golden Cookie
const goldenCookieBtn = document.getElementById("goldenCookie");
goldenCookieBtn.addEventListener("click", function () {
    if (cookies >= goldenCookieCost) {
        cookies -= goldenCookieCost;
        updateCookieCount();
        setTimeout(() => {
            cookies += 100;
            updateCookieCount();
        }, 5000);
    }
});

// Upgrade: Speed Boost
const speedBoostBtn = document.getElementById("speedBoost");
speedBoostBtn.addEventListener("click", function () {
    if (cookies >= speedBoostCost) {
        cookies -= speedBoostCost;
        updateCookieCount();
        if (autoClickerActive) {
            clearInterval(autoClickerInterval);
            autoClickerInterval = setInterval(() => {
                cookies += cookiesPerClick;
                updateCookieCount();
            }, 500);
        }
    }
});

// Load saved cookies
updateCookieCount();
