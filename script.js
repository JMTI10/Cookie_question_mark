let cookies = 0;
let upgradeCost = 10;
let cookiesPerClick = 1;

document.getElementById("cookie").addEventListener("click", function() {
    cookies += cookiesPerClick;
    document.getElementById("cookieCount").textContent = cookies;
});

document.getElementById("upgrade").addEventListener("click", function() {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        cookiesPerClick++;
        upgradeCost *= 2;
        document.getElementById("cookieCount").textContent = cookies;
        document.getElementById("upgrade").textContent = `Upgrade (Cost: ${upgradeCost})`;
    }
});
