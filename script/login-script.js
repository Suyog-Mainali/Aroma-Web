// login validation
window.addEventListener("load", function () {
    var loginForm = document.querySelector("form");

    if (loginForm) {
        loginForm.onsubmit = function (e) {
            e.preventDefault();

            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var usersData = localStorage.getItem("aroma_users");
            var users = usersData ? JSON.parse(usersData) : [];

            var matchedUser = null;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    matchedUser = users[i];
                    break;
                }
            }

            if (matchedUser) {
                localStorage.setItem("aroma_active_user", JSON.stringify(matchedUser));
                window.location.href = "../index.html";
            } else {
                alert("Wrong email or password. Please try again.");
            }
        };
    }
    var forgotLink = document.getElementById("forgot-password-link");

    if (forgotLink) {
        forgotLink.addEventListener("click", function (e) {
            e.preventDefault();

            var email = document.getElementById("email").value.trim();
            if (!email) {
                alert("Please enter your email address first.");
                return;
            }

            var usersData = localStorage.getItem("aroma_users");
            var users = usersData ? JSON.parse(usersData) : [];
            var user = users.find(function (u) { return u.email === email; });

            if (user) {
                alert("Your password is: " + user.password);
            } else {
                alert("No account found for that email.");
            }
        });
    }
});
