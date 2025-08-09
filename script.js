// Animasi awal untuk hero section dan judul
anime({ targets: '.hero-content .logo', scale: [0.8, 1], opacity: [0, 1], duration: 1200, easing: 'easeOutQuad' });
anime({ targets: '.hero-content .title', translateY: [-20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad', delay: 200 });
anime({ targets: '.hero-content .subtitle', translateY: [20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad', delay: anime.stagger(150, { start: 400 }) });
anime({ targets: '.section-title', translateY: [20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad' });

// Fungsi helper untuk gulir halus menggunakan anime.js
function scrollToTarget(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const targetOffset = targetElement.offsetTop;
        anime({
            targets: 'html, body',
            scrollTop: targetOffset,
            duration: 1500,
            easing: 'easeInOutCubic'
        });
    }
}

// Listener utama yang dijalankan setelah semua elemen halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA MENU NAVIGASI ---
    const menuIcon = document.querySelector('.menu-icon');
    const navPanel = document.querySelector('.nav-panel');
    const closeIcon = document.querySelector('.nav-close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuIcon && navPanel && closeIcon) {
        menuIcon.addEventListener('click', () => navPanel.classList.add('open'));
        closeIcon.addEventListener('click', () => navPanel.classList.remove('open'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSelector = link.getAttribute('href');
            scrollToTarget(targetSelector);
            if (navPanel) {
                navPanel.classList.remove('open');
            }
        });
    });

    // --- LOGIKA TOMBOL GULIR BAWAH ---
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSelector = scrollDownBtn.getAttribute('href');
            scrollToTarget(targetSelector);
        });
    }

    // --- OBSERVER UNTUK ANIMASI KARTU YANG DAPAT DIULANG ---
    const animatedItems = document.querySelectorAll('.animate-on-scroll');
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const item = entry.target;
            if (entry.isIntersecting) {
                // Animate In
                anime.remove(item); // Hapus animasi yang sedang berjalan jika ada
                anime({
                    targets: item,
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 800,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(100)
                });
            } else {
                // Reset (Animate Out)
                anime.remove(item); // Hapus animasi yang sedang berjalan jika ada
                anime({
                    targets: item,
                    translateY: 30,
                    scale: 0.95,
                    opacity: 0,
                    duration: 400, // Durasi reset lebih cepat
                    easing: 'easeInCubic'
                });
            }
        });
    }, { threshold: 0.2 });
    animatedItems.forEach(item => {
        // Atur state awal elemen sebelum diamati
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px) scale(0.95)';
        itemObserver.observe(item);
    });

    // --- OBSERVER UNTUK ANIMASI FOOTER (HANYA SEKALI) ---
    const footer = document.querySelector('footer');
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({ targets: footer, translateY: [20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad', delay: 200 });
                footerObserver.unobserve(footer);
            }
        });
    }, { threshold: 0.2 });
    if (footer) {
        footerObserver.observe(footer);
    }
});

// --- EFEK PARALAKS DAN OPACITY SAAT GULIR ---
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;

    if (hero) {
        const heroHeight = hero.offsetHeight;
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
        if (heroContent) {
            heroContent.style.opacity = Math.max(1 - scrollPosition / (heroHeight * 0.6), 0);
        }
        if (logo) {
            logo.style.transform = `scale(${Math.max(1 - scrollPosition / (heroHeight * 3), 0.9)})`;
        }
    }
});
