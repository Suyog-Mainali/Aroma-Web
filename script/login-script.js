// script/login-script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents default form submission

            // Retrieves input values
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Fetches users array from localStorage
            let users = JSON.parse(localStorage.getItem('aroma_users')) || [];

            // Finds matching user
            const matchedUser = users.find(user => user.email === email && user.password === password);

            if (matchedUser) {
                // Saves the active user session in local storage
                localStorage.setItem('aroma_active_user', JSON.stringify(matchedUser));
                
                // Redirects to homepage
                window.location.href = "../index.html";
            }
        });
    }
});
