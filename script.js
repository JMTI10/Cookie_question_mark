let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let cookiesPerClick = parseInt(localStorage.getItem("cookiesPerClick")) || 1;
let autoClickerActive = JSON.parse(localStorage.getItem("autoClickerActive")) || false;
let autoClickerCost = 50;
let doubleCookiesCost = 100;
let goldenCookieCost = 500;
let speedBoostCost = 1000;
let megaClickerCost = 2000;
let goldenRainCost = 5000;
let ultraSpeedBoostCost = 10000;
let autoClickerInterval;
let gamePaused = false;

// Update cookie count display
function updateCookieCount() {
    document.getElementById("cookieCount").textContent = cookies;
    localStorage.setItem("cookies", cookies);
}

// Function to create falling cookies from the top
function createFallingCookie() {
    if (gamePaused) return;
    
    const fallingCookie = document.createElement("img");
    fallingCookie.src = "images/cookie.png";
    fallingCookie.classList.add("falling-cookie");
    fallingCookie.style.left = `${Math.random() * window.innerWidth}px`;
    fallingCookie.style.top = `-50px`;
    document.body.appendChild(fallingCookie);

    setTimeout(() => {
        fallingCookie.remove();
    }, 3000);
}

// Click cookie to earn cookies
document.getElementById("cookie").addEventListener("click", function () {
    if (!gamePaused) {
        cookies += cookiesPerClick;
        updateCookieCount();
        createFallingCookie();
    }
});

// Auto Clicker Upgrade
document.getElementById("autoClicker").addEventListener("click", function () {
    if (cookies >= autoClickerCost && !autoClickerActive) {
        cookies -= autoClickerCost;
        autoClickerActive = true;
        localStorage.setItem("autoClickerActive", JSON.stringify(autoClickerActive));
        autoClickerInterval = setInterval(() => {
            if (!gamePaused) {
                cookies += cookiesPerClick;
                updateCookieCount();
                createFallingCookie();
            }
        }, 1000);
    }
});

// Double Cookies Upgrade
document.getElementById("doubleCookies").addEventListener("click", function () {
    if (cookies >= doubleCookiesCost) {
        cookies -= doubleCookiesCost;
        cookiesPerClick *= 2;
        localStorage.setItem("cookiesPerClick", cookiesPerClick);
        updateCookieCount();
    }
});

// Golden Cookie Upgrade
document.getElementById("goldenCookie").addEventListener("click", function () {
    if (cookies >= goldenCookieCost) {
        cookies -= goldenCookieCost;
        updateCookieCount();

        let originalCookiesPerClick = cookiesPerClick;
        cookiesPerClick *= 2;

        for (let i = 0; i < 20; i++) {
            setTimeout(createFallingCookie, i * 100);
        }

        setTimeout(() => {
            cookiesPerClick = originalCookiesPerClick;
        }, 10000);
    }
});

// Speed Boost Upgrade
document.getElementById("speedBoost").addEventListener("click", function () {
    if (cookies >= speedBoostCost) {
        cookies -= speedBoostCost;
        updateCookieCount();

        if (autoClickerActive) {
            clearInterval(autoClickerInterval);
            autoClickerInterval = setInterval(() => {
                if (!gamePaused) {
                    cookies += cookiesPerClick;
                    updateCookieCount();
                    createFallingCookie();
                }
            }, 500);
        }
    }
});

// Mega Clicker Upgrade
document.getElementById("megaClicker").addEventListener("click", function () {
    if (cookies >= megaClickerCost) {
        cookies -= megaClickerCost;
        cookiesPerClick += 10;
        updateCookieCount();
    }
});

// Golden Rain Upgrade
document.getElementById("goldenRain").addEventListener("click", function () {
    if (cookies >= goldenRainCost) {
        cookies -= goldenRainCost;
        updateCookieCount();

        for (let i = 0; i < 50; i++) {
            setTimeout(createFallingCookie, i * 50);
        }
    }
});

// Ultra Speed Boost Upgrade
document.getElementById("ultraSpeedBoost").addEventListener("click", function () {
    if (cookies >= ultraSpeedBoostCost) {
        cookies -= ultraSpeedBoostCost;
        updateCookieCount();

        if (autoClickerActive) {
            clearInterval(autoClickerInterval);
            autoClickerInterval = setInterval(() => {
                if (!gamePaused) {
                    cookies += cookiesPerClick;
                    updateCookieCount();
                    createFallingCookie();
                }
            }, 250);
        }
    }
});

// Pause Button
document.getElementById("pauseButton").addEventListener("click", function () {
    gamePaused = !gamePaused;
    this.textContent = gamePaused ? "Resume" : "Pause";
});

// Reset Button
document.getElementById("resetButton").addEventListener("click", function () {
    cookies = 0;
    cookiesPerClick = 1;
    autoClickerActive = false;
    gamePaused = false;

    localStorage.removeItem("cookies");
    localStorage.removeItem("cookiesPerClick");
    localStorage.removeItem("autoClickerActive");

    clearInterval(autoClickerInterval);
    updateCookieCount();
});

// Load saved cookies & upgrades
updateCookieCount();
