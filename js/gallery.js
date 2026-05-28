document.addEventListener("DOMContentLoaded", function() {
    
    // ANIMASI SCROLL
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

    
    document.querySelectorAll(".reveal").forEach(reveal => revealOnScroll.observe(reveal));


    // HAMBURGER MENU
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if(menuToggle && navLinks) {
        const icon = menuToggle.querySelector('i');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ri-menu-line', 'ri-close-line');
            } else {
                icon.classList.replace('ri-close-line', 'ri-menu-line');
            }
        });
    }


    // FUNGSI LOAD MORE & SHOW LESS
    const yearGroups = document.querySelectorAll('.year-group');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    
    
    const defaultItems = 3; 

    if (loadMoreBtn && showLessBtn) {
        
        // EVENT LOAD MORE
        loadMoreBtn.addEventListener('click', function() {
           
            for (let i = defaultItems; i < yearGroups.length; i++) {
                if (yearGroups[i]) {
                    yearGroups[i].style.display = 'block';
                    
                    // Trigger ulang animasi reveal agar smooth
                    const newReveals = yearGroups[i].querySelectorAll('.reveal');
                    newReveals.forEach(reveal => {
                        reveal.classList.remove('active'); 
                        revealOnScroll.observe(reveal);
                    });
                }
            }
            
           
            loadMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline-block';
        });

        // EVENT SHOW LESS
        showLessBtn.addEventListener('click', function() {
            
            for (let i = defaultItems; i < yearGroups.length; i++) {
                if (yearGroups[i]) {
                    yearGroups[i].style.display = 'none';
                    
                  
                    const reveals = yearGroups[i].querySelectorAll('.reveal');
                    reveals.forEach(reveal => reveal.classList.remove('active'));
                }
            }

           
            showLessBtn.style.display = 'none';
            loadMoreBtn.style.display = 'inline-block';
            
           
            if (yearGroups[defaultItems - 1]) {
                yearGroups[defaultItems - 1].scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });
    }
});