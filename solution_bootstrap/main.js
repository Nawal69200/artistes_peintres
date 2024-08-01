document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour afficher une galerie avec animation
    function showGallery(galleryId) {
        const galleries = document.querySelectorAll('.gallery');
        galleries.forEach(gallery => {
            if (gallery.id === galleryId) {
                gallery.classList.remove('hidden');
                gallery.classList.add('active', 'animate');
                setTimeout(() => {
                    gallery.classList.remove('animate');
                }, 1000);
            } else {
                gallery.classList.add('hidden');
                gallery.classList.remove('active', 'animate'); // Assurez-vous de retirer 'animate' également ici
            }
        });
    }

    // Affiche par défaut la galerie Picasso
    showGallery('picasso');

    // Ajoute un écouteur de clic à chaque lien de navigation ayant data-gallery défini
    const navLinks = document.querySelectorAll('.nav-link[data-gallery]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const galleryId = link.dataset.gallery;
            showGallery(galleryId);

            // Désactive tous les liens de navigation
            navLinks.forEach(l => l.classList.remove('active'));
            // Active le lien cliqué
            link.classList.add('active');
        });
    });
});
