
// Menu hamburger
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close');

menuBtn.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Thème clair/sombre
document.querySelector('#claire').addEventListener('click', function () {
    const html = document.documentElement;
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
});

document.querySelector('#sombre').addEventListener('click', function () {
    const html = document.documentElement;
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
});

// Charger le thème sauvegardé
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(savedTheme);
});

// Formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message! Nous vous répondrons dans les plus brefs délais.');
    this.reset();
});