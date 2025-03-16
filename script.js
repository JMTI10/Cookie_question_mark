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
    document.getElementById("cookieCount").textContent = cookies;
    localStorage.setItem("cookies", cookies);
}

// Click cookie to earn cookies
document.getElementById("cookie").addEventListener("click", function () {
    cookies += cookiesPerClick;
    updateCookieCount();
});

// Auto Clicker Upgrade
document.getElementById("autoClicker").addEventListener("click", function () {
    if (cookies >= autoClickerCost && !autoClickerActive) {
        cookies -= autoClickerCost;
        autoClickerActive = true;
        localStorage.setItem("autoClickerActive", JSON.stringify(autoClickerActive));
        autoClickerInterval = setInterval(() => {
            cookies += cookiesPerClick;
            updateCookieCount();
        }, 1000);
    }
});

// Restore Auto Clicker on page reload
if (autoClickerActive) {
    autoClickerInterval = setInterval(() => {
        cookies += cookiesPerClick;
        updateCookieCount();
    }, 1000);
}

// Double Cookies Upgrade
document.getElementById("doubleCookies").addEventListener("click", function () {
    if (cookies >= doubleCookiesCost) {
        cookies -= doubleCookiesCost;
        cookiesPerClick *= 2;
        localStorage.setItem("cookiesPerClick", cookiesPerClick);
        updateCookieCount();
    }
});

// Load saved cookies & upgrades
updateCookieCount();
