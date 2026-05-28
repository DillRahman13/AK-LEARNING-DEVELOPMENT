 const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const icon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            
            // Aksesibilitas ARIA
            menuToggle.setAttribute('aria-expanded', isActive);
            
            if (isActive) {
                icon.classList.replace('ri-menu-line', 'ri-close-line');
            } else {
                icon.classList.replace('ri-close-line', 'ri-menu-line');
            }
        });