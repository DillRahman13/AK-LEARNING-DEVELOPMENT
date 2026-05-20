// Ambil elemen modal
const modal = document.getElementById("pdfModal");
const iframe = document.getElementById("pdfFrame");

// Fungsi buka preview
function openPreview(pdfUrl) {
    modal.style.display = "block";
    iframe.src = pdfUrl;
    // Kunci scroll body biar ga gerak pas buka modal
    document.body.style.overflow = "hidden";
}

// Fungsi tutup preview
function closePreview() {
    modal.style.display = "none";
    iframe.src = ""; // Bersihkan src biar ga makan memori
    document.body.style.overflow = "auto";
}

// Tutup jika klik area di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        closePreview();
    }
}

