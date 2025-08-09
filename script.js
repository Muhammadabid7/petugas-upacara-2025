// Animasi awal untuk hero section dan judul
anime({ targets: '.hero-content .logo', scale: [0.8, 1], opacity: [0, 1], duration: 1200, easing: 'easeOutQuad' });
anime({ targets: '.hero-content .title', translateY: [-20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad', delay: 200 });
anime({ targets: '.hero-content .subtitle', translateY: [20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad', delay: anime.stagger(150, { start: 400 }) });
anime({ targets: '.section-title', translateY: [20, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutQuad' });

// Listener utama yang dijalankan setelah semua elemen halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA MENU NAVIGASI (DARI LANGKAH 1) ---
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
            const targetElement = document.querySelector(link.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (navPanel) {
                navPanel.classList.remove('open');
            }
        });
    });

    // --- LOGIKA TOMBOL GULIR BAWAH (DARI LANGKAH 2) ---
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.querySelector(scrollDownBtn.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- OBSERVER UNTUK ANIMASI SAAT GULIR ---
    const animatedItems = document.querySelectorAll('.animate-on-scroll');
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                anime({
                    targets: item,
                    translateY: [30, 0],
                    scale: [0.95, 1],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(100)
                });
                itemObserver.unobserve(item);
            }
        });
    }, { threshold: 0.2 }); // Trigger sedikit lebih awal
    animatedItems.forEach(item => itemObserver.observe(item));

    // --- OBSERVER UNTUK ANIMASI FOOTER ---
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

// --- EFEK PARALAKS DAN OPACITY SAAT GULIR (DARI LANGKAH 2) ---
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const logo = document.querySelector('.logo');
    const scrollPosition = window.scrollY;

    if (hero) {
        const heroHeight = hero.offsetHeight;
        // Efek paralaks pada background
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;

        // Efek opacity pada konten hero
        if (heroContent) {
            heroContent.style.opacity = Math.max(1 - scrollPosition / (heroHeight * 0.6), 0);
        }

        // Efek skala pada logo
        if (logo) {
            logo.style.transform = `scale(${Math.max(1 - scrollPosition / (heroHeight * 3), 0.9)})`;
        }
    }
});
