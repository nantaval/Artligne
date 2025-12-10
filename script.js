// Menu hamburger
// Sélection des éléments
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close');
const navLinks = document.querySelectorAll('.navigation a');

// Fonction pour ouvrir le menu
function ouvrirMenu() {
    nav.classList.add('active');
    // Masquer le burger, afficher la croix
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

// Fonction pour fermer le menu
function fermerMenu() {
    nav.classList.remove('active');
    // Afficher le burger, masquer la croix
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

// Événements
menuBtn.addEventListener('click', ouvrirMenu);
closeBtn.addEventListener('click', fermerMenu);

// Fermer le menu en cliquant sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', fermerMenu);
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
