
const formInputs = document.querySelectorAll('#waForm input, #waForm textarea');
const btnSubmit = document.getElementById('btnSubmit');


function checkFormValidity() {
    let isValid = true;
    formInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });
    
    btnSubmit.disabled = !isValid;
}


formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// Pengiriman ke WhatsApp
btnSubmit.addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const instansi = document.getElementById('instansi').value;
    const nohp = document.getElementById('nohp').value;
    const email = document.getElementById('email').value;
    const pertanyaan = document.getElementById('pertanyaan').value;

    // Format Pesan
    const pesan = `Halo Konsultan AK Learning, saya ingin bertanya terkait program training.%0A%0A*Data Diri:*%0ANama: ${nama}%0AInstansi/Perusahaan: ${instansi}%0ANo. HP: ${nohp}%0AEmail: ${email}%0A%0A*Pertanyaan:*%0A${pertanyaan}`;

    
    const nomorWA = "6281804240776";
    
    
    const waLink = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(waLink, '_blank');
});