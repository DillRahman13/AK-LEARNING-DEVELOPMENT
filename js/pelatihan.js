 document.addEventListener("DOMContentLoaded", function() {
            // --- Animasi Scroll ---
            const reveals = document.querySelectorAll(".reveal");
            const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            reveals.forEach(reveal => revealOnScroll.observe(reveal));

           
            const menuToggle = document.getElementById("menuToggle");
            const navLinks = document.getElementById("navLinks");
            
            if (menuToggle && navLinks) {
                const menuIcon = menuToggle.querySelector("i");
                menuToggle.addEventListener("click", function() {
                    navLinks.classList.toggle("active");
                    if (navLinks.classList.contains("active")) {
                        menuIcon.classList.replace("ri-menu-line", "ri-close-line");
                    } else {
                        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
                    }
                });
            }
        });