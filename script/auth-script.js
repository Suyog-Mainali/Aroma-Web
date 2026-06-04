// script/auth-script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Authentication Button
    const authContainer = document.getElementById('auth-container');
    const activeUserStr = localStorage.getItem('aroma_active_user');

    if (authContainer) {
        // We determine the correct path to the pages directory based on current URL
        // If we are in the root (index.html), pages are in 'pages/'
        // If we are in a page (e.g. login.html), pages are in '' or '../pages/'
        const isRoot = !window.location.pathname.includes('/pages/');
        const accountPath = isRoot ? 'pages/account.html' : 'account.html';
        const loginPath = isRoot ? 'pages/login.html' : 'login.html';
        const iconPath = isRoot ? 'assets/user-icon.svg' : '../assets/user-icon.svg';

        if (activeUserStr) {
            const activeUser = JSON.parse(activeUserStr);
            authContainer.innerHTML = `
                <a href="${accountPath}" class="btn btn-primary" id="auth-btn">
                    <img src="${iconPath}" alt="User" class="icon-small" onerror="this.style.display='none'">
                    My Account
                </a>
            `;
        } else {
            authContainer.innerHTML = `
                <a href="${loginPath}" class="btn btn-primary" id="auth-btn">
                    <img src="${iconPath}" alt="User" class="icon-small" onerror="this.style.display='none'">
                    Login & Register
                </a>
            `;
        }
    }

    // 2. Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 3. Move auth container into hamburger menu on mobile
    function handleResize() {
        if (window.innerWidth <= 768) {
            // Move into navMenu
            if (authContainer && authContainer.parentNode !== navMenu) {
                navMenu.appendChild(authContainer);
            }
        } else {
            // Move back to header (before hamburger or at the end)
            const header = document.querySelector('.navbar');
            if (authContainer && authContainer.parentNode !== header) {
                header.appendChild(authContainer);
            }
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
