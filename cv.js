document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) { 
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active'); 
        });

        document.addEventListener('click', function(event) {
            if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active'); 
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
            });
        });
    }

    const images = document.querySelectorAll('.slider-image'); 
    let currentImageIndex = 0; 
    const slideInterval = 4000; 

    if (images.length > 0) {
        if (!images[currentImageIndex].classList.contains('active')) {
            images[currentImageIndex].classList.add('active');
        }

        function showNextImage() {
            images[currentImageIndex].classList.remove('active');

            currentImageIndex = (currentImageIndex + 1) % images.length;

            images[currentImageIndex].classList.add('active');
        }
        setInterval(showNextImage, slideInterval);
    }
});