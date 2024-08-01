document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour afficher une galerie avec animation
    function showGallery(galleryId) {
        const galleries = document.querySelectorAll('.gallery');
        galleries.forEach(gallery => {
            if (gallery.id === galleryId) {
                gallery.classList.add('active'); // Ajoute la classe active pour afficher la galerie
                gallery.classList.add('animate'); // Ajoute la classe animate pour déclencher l'animation
                setTimeout(() => {
                    gallery.classList.remove('animate'); // Retire la classe animate après l'animation
                }, 1000); // Durée de l'animation en millisecondes
            } else {
                gallery.classList.remove('active'); // Cache les autres galeries
            }
        });
    }

    // Affiche par défaut la galerie Picasso
    showGallery('picasso');

    // Ajoutez un écouteur de clic à chaque lien de navigation
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const galleryId = item.getAttribute('onclick').match(/showGallery\('(.+)'\)/)[1];
            showGallery(galleryId);

            // Désactiver tous les items du menu
            navItems.forEach(i => i.classList.remove('active'));
            // Activer l'item cliqué
            item.classList.add('active');
        });
    });
});
