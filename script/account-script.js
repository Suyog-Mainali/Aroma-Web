// script/account-script.js

document.addEventListener('DOMContentLoaded', () => {
    // Retrieves active user session from local storage
    const activeUserStr = localStorage.getItem('aroma_active_user');

    if (!activeUserStr) {
        // Redirects to login if no active user exists
        window.location.href = "login.html";
        return;
    }

    const activeUser = JSON.parse(activeUserStr);

    // Populates the HTML elements with user data
    const nameEl = document.getElementById('user-fullname');
    const emailEl = document.getElementById('user-email');
    const phoneEl = document.getElementById('user-phone');
    const addressEl = document.getElementById('user-address');
    const dietaryEl = document.getElementById('user-dietary');

    if (nameEl) nameEl.textContent = activeUser.fullname || 'N/A';
    if (emailEl) emailEl.textContent = activeUser.email || 'N/A';
    if (phoneEl) phoneEl.textContent = activeUser.phone || 'N/A';
    if (addressEl) addressEl.textContent = activeUser.address || 'N/A';
    
    if (dietaryEl) {
        // Formats the dietary preference string
        const dietary = activeUser.dietary;
        dietaryEl.textContent = dietary !== 'none' ? dietary.charAt(0).toUpperCase() + dietary.slice(1) : 'None';
    }

    // Handles logout logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Removes active user from local storage
            localStorage.removeItem('aroma_active_user');
            
            // Redirects to homepage
            window.location.href = "../index.html";
        });
    }
});
