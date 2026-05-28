document.addEventListener("DOMContentLoaded", function() {
    // Ngambil URL
    let programName = "";
    
    
    if (document.referrer) {
        const url = new URL(document.referrer);
        let pathname = url.pathname;
        
        // Ambil nama file 
        let filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        
        
        if (filename && filename !== "" && filename !== "/") {
            
            filename = filename.replace('.html', '');
            
         
            filename = filename.replace(/[_-]/g, ' ');
            
            
            programName = filename.replace(/\b\w/g, char => char.toUpperCase());
        }
    }

    const programInput = document.getElementById('program');
    
    if (programName) {
        programInput.value = programName;
    } else {
        programInput.value = "Katalog Program Utama"; 
    }

    // Validasi
    const requiredInputs = document.querySelectorAll('#waForm input[required]');
    const btnSubmit = document.getElementById('btnSubmit');

    function checkFormValidity() {
        let isValid = true;
        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });
        
        btnSubmit.disabled = !isValid;
    }

    requiredInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });

    // Kirim ke WA
    btnSubmit.addEventListener('click', function() {
        const nama = document.getElementById('nama').value.trim();
        const instansi = document.getElementById('instansi').value.trim();
        const nohp = document.getElementById('nohp').value.trim();
        const email = document.getElementById('email').value.trim();
        const program = document.getElementById('program').value.trim();
        const pesan = document.getElementById('pesan').value.trim() || "-"; 

        
        const textWA = `Halo Konsultan AK Learning, saya ingin mendaftar program training berikut.%0A%0A*Data Pendaftaran:*%0AProgram: *${program}*%0ANama Lengkap: ${nama}%0AInstansi/Perusahaan: ${instansi}%0ANo. HP/WA: ${nohp}%0AEmail: ${email}%0A%0A*Pesan Tambahan:*%0A${pesan}`;

       
        const nomorWA = "6281804240776";
        
        
        window.open(`https://wa.me/${nomorWA}?text=${textWA}`, '_blank');
    });
});