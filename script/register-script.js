
window.addEventListener("load", function () {
    var registerForm = document.querySelector("form");

    if (registerForm) {
        registerForm.onsubmit = function (e) {
            e.preventDefault();

            var fullname = document.getElementById("fullname").value;
            var phone = document.getElementById("phone").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var address = document.getElementById("address").value;
            var dietary = document.getElementById("dietary").value;
            var termsChecked = document.getElementById("terms").checked;

            if (!termsChecked) {
                alert("You must agree to the Terms of Service.");
                return;
            }

            var usersData = localStorage.getItem("aroma_users");
            var users = usersData ? JSON.parse(usersData) : [];

            var emailExists = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    emailExists = true;
                    break;
                }
            }

            if (emailExists) {
                alert("An account with this email already exists!");
                return;
            }
            var fullnameExists = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].fullname === fullname) {
                    fullnameExists = true;
                    break;
                }
            }

            if (fullnameExists) {
                alert("An account with this fullname already exists!");
                return;
            }

            var newUser = {
                fullname: fullname,
                phone: phone,
                email: email,
                password: password,
                address: address,
                dietary: dietary
            };

            users.push(newUser);
            localStorage.setItem("aroma_users", JSON.stringify(users));

            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        };
    }
});
