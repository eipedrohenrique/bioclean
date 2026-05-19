const menuMobile = document.getElementById('menu-mobile');
const nav = document.querySelector('nav');

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});