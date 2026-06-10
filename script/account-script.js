// account details and logout
window.addEventListener("load", function () {
    var activeUserData = localStorage.getItem("aroma_active_user");

    if (activeUserData) {
        var user = JSON.parse(activeUserData);

        var nameDisplay = document.getElementById("user-name");
        var emailDisplay = document.getElementById("user-email");
        var phoneDisplay = document.getElementById("user-phone");
        var addressDisplay = document.getElementById("user-address");
        var dietDisplay = document.getElementById("user-dietary");

        if (nameDisplay) nameDisplay.innerText = user.fullname;
        if (emailDisplay) emailDisplay.innerText = user.email;
        if (phoneDisplay) phoneDisplay.innerText = user.phone;
        if (addressDisplay) addressDisplay.innerText = user.address;

        if (dietDisplay) {
            var dietValue = user.dietary;
            if (dietValue === "none" || dietValue === "") {
                dietDisplay.innerText = "No specific preference";
            } else {
                dietDisplay.innerText = dietValue.charAt(0).toUpperCase() + dietValue.slice(1);
            }
        }
    } else {
        window.location.href = "login.html";
    }

    var logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.onclick = function () {
            var confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                localStorage.removeItem("aroma_active_user");
                window.location.href = "../index.html";
            }
        };
    }
});
