document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const sideModeToggle = document.querySelector('.side-mode-toggle');

    // Toggle the mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('menu-open');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Toggle light/dark mode and icon
    sideModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = sideModeToggle.querySelector('i');
        if (icon.classList.contains('fa-moon')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
});
