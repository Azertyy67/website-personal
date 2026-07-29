const darkModeToggle = document.getElementById('darkModeToggle');
const header = document.querySelector('header');

// 1. Cek & Pasang Tema Tersimpan saat Halaman Ditinggal/Di-load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.checked = true;
}

// 2. Simpan Pilihan Tema saat Tombol Ditekan
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Simpan Mode Gelap
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Simpan Mode Terang
        }
    });
}

// 3. Animasi Navbar
if (header) {
    header.addEventListener('mousedown', () => header.classList.add('pressed'));
    header.addEventListener('mouseup', () => header.classList.remove('pressed'));
    header.addEventListener('mouseleave', () => header.classList.remove('pressed'));
}

// 4. Animasi Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);