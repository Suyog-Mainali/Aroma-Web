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
});
