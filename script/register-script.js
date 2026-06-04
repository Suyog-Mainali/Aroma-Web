// script/register-script.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents default form submission

            // Retrieve the values from the form inputs
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const dietary = document.getElementById('dietary').value;
            
            // Performs basic validation check
            if (!fullname || !email || !password) {
                return;
            }

            // Creates a user object
            const newUser = {
                fullname,
                email,
                password,
                phone,
                address,
                dietary
            };

            // Fetches existing users from localStorage or initializes an empty array
            let users = JSON.parse(localStorage.getItem('aroma_users')) || [];

            // Checks if email is already registered
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                return;
            }

            // Adds new user to array and saves to localStorage
            users.push(newUser);
            localStorage.setItem('aroma_users', JSON.stringify(users));

            // Redirects to login
            window.location.href = "login.html";
        });
    }
});
