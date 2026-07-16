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

    var navbar = document.querySelector(".navbar");
    var nav = navbar ? navbar.querySelector("nav") : null;
    
    if (navbar && nav) {
        var toggle = document.createElement("button");
        toggle.className = "nav-toggle";
        toggle.innerText = "☰ Menu";
        
        navbar.appendChild(toggle);
        
        toggle.addEventListener("click", function (e) {
            e.stopPropagation();
            nav.classList.toggle("show");
            if (nav.classList.contains("show")) {
                toggle.innerText = "✕ Close";
            } else {
                toggle.innerText = "☰ Menu";
            }
        });

        var navLinks = nav.querySelectorAll("a");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("show");
                toggle.innerText = "☰ Menu";
            });
        });
        
        document.addEventListener("click", function (event) {
            var isClickInside = nav.contains(event.target) || toggle.contains(event.target);
            if (!isClickInside && nav.classList.contains("show")) {
                nav.classList.remove("show");
                toggle.innerText = "☰ Menu";
            }
        });
    }
});
