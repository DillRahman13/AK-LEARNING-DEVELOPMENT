// Preview PDF

const modal = document.getElementById("pdfModal");
const iframe = document.getElementById("pdfFrame");

// Fungsi buka preview
function openPreview(pdfUrl) {
    modal.style.display = "block";
    iframe.src = pdfUrl;

    document.body.style.overflow = "hidden";
}

// Fungsi tutup preview
function closePreview() {
    modal.style.display = "none";
    iframe.src = ""; 
    document.body.style.overflow = "auto";
}

// Tutup Preview
window.onclick = function(event) {
    if (event.target == modal) {
        closePreview();
    }
}


// Fungsi hamburger menu

document.addEventListener("DOMContentLoaded", function() {
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
});