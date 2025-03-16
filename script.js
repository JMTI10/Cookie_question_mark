let cookies = 0;
let cookiesPerClick = 1;
let autoClickerCost = 50;
let doubleCookiesCost = 100;
let autoClickerActive = false;

// Update cookie count display
function updateCookieCount() {
    document.getElementById("cookieCount").textContent = cookies;
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
        setInterval(() => {
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
    }
});