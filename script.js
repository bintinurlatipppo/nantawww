document.addEventListener('DOMContentLoaded', () => {
    const cakeContainer = document.querySelector('.cake-container');
    const flame = document.getElementById('flame');
    const greeting = document.getElementById('greeting');
    const message = document.getElementById('message');
    const confettiBtn = document.getElementById('confetti-btn');
    
    let isLit = false;

    // Awal: Lilin masih mati
    flame.classList.remove('lit');

    // --- Fungsi 1: Menyalakan Lilin (Trigger Utama) ---
    cakeContainer.addEventListener('click', () => {
        if (!isLit) {
            // 1. Nyalakan api
            flame.classList.add('lit');
            isLit = true;
            
            // 2. Ubah Ucapan dengan Animasi
            greeting.style.color = '#e63946'; // Berubah warna menjadi merah
            greeting.style.animation = 'scaleIn 0.5s ease-out';
            
            setTimeout(() => {
                greeting.textContent = 'SELAMAT ULANG TAHUN!';
                greeting.style.animation = ''; // Reset animasi
                
                // 3. Tampilkan Pesan dan Tombol
                message.classList.remove('hidden');
                confettiBtn.classList.remove('hidden');
            }, 500);
        } else {
            // Jika sudah nyala, berikan pesan lucu
            alert('Jangan tiup dulu dong! Baca ucapannya dulu. 😝');
        }
    });

    // --- Fungsi 2: Animasi Confetti Lucu ---
    confettiBtn.addEventListener('click', () => {
        createConfetti(100); // Tembakkan 100 confetti
    });

    // Fungsi untuk membuat Confetti
    function createConfetti(count) {
        const colors = ['#a8dadc', '#457b9d', '#1d3557', '#e63946', '#f1faee']; // Kombinasi nuansa biru dan warna ceria lainnya
        const container = document.getElementById('confetti-container');

        for (let i = 0; i < count; i++) {
            const c = document.createElement('div');
            c.classList.add('confetti');
            
            // Posisi awal acak di bagian atas
            c.style.left = `${Math.random() * 100}vw`;
            c.style.top = `${Math.random() * -50}px`;
            
            // Warna acak dari array colors
            const color = colors[Math.floor(Math.random() * colors.length)];
            c.style.setProperty('--color', color);
            
            // Durasi jatuh acak
            c.style.animationDuration = `${2 + Math.random() * 2}s`;
            c.style.animationDelay = `${Math.random() * 0.5}s`;

            container.appendChild(c);

            // Hapus elemen setelah selesai animasi
            setTimeout(() => {
                c.remove();
            }, 4000);
        }
    }

    // Tambahkan keyframe CSS secara dinamis (untuk kemudahan)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scaleIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});
