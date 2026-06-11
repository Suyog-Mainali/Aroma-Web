// check if user is logged in
window.addEventListener("load", function () {
    var authContainer = document.getElementById("auth-buttons");
    var activeUserData = localStorage.getItem("aroma_active_user");
    var isHomePage = !window.location.pathname.includes("/pages/");

    if (authContainer) {
        if (activeUserData) {
            var accountLink = isHomePage ? "pages/account.html" : "account.html";
            authContainer.innerHTML = '<a href="' + accountLink + '" class="btn btn-orange" id="auth-btn">My Account</a>';
        } else {
            var loginLink = isHomePage ? "pages/login.html" : "login.html";
            authContainer.innerHTML = '<a href="' + loginLink + '" class="btn btn-orange" id="auth-btn">Login &amp; Register</a>';
        }
    }
});
