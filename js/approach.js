 document.addEventListener("DOMContentLoaded", function() {
            const reveals = document.querySelectorAll(".reveal");
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });

            // Menu Hamburger 
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            if(menuToggle && navLinks) {
                const icon = menuToggle.querySelector('i');
                menuToggle.addEventListener('click', () => {
                    const isActive = navLinks.classList.toggle('active');
                    menuToggle.setAttribute('aria-expanded', isActive);
                    
                    if (isActive) {
                        icon.classList.replace('ri-menu-line', 'ri-close-line');
                    } else {
                        icon.classList.replace('ri-close-line', 'ri-menu-line');
                    }
                });
            }
        });