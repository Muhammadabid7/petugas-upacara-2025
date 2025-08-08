// Animasi untuk hero section
anime({
    targets: '.hero-content .logo',
    scale: [0, 1],
    rotate: '0.5turn',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)'
});

anime({
    targets: '.hero-content .title',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad',
    delay: 200
});

anime({
    targets: '.hero-content .subtitle',
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad',
    delay: anime.stagger(150, { start: 400 })
});

// Animasi untuk section title
anime({
    targets: '.section-title',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad'
});

// Animasi scroll-based untuk petugas items menggunakan Intersection Observer
const items = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const direction = item.dataset.direction || 'left';
                const translateXStart = direction === 'left' ? -100 : 100; // Mulai dari lebih jauh: -100px (kiri) atau +100px (kanan)

                anime({
                    targets: item,
                    translateX: [translateXStart, 0], // Hanya translateX, tanpa scale atau rotasi
                    opacity: [0, 1],
                    duration: 800, // Durasi lebih panjang untuk transisi halus
                    easing: 'easeOutCubic',
                    delay: anime.stagger(150, { start: 100 }), // Stagger untuk efek berurutan
                    update: function (anim) {
                        // Efek perubahan warna ikon saat animasi
                        const icon = item.querySelector('i');
                        if (icon) {
                            const progress = anim.progress / 100;
                            icon.style.color = `hsl(${progress * 360}, 100%, 50%)`; // Warna berubah dinamis
                        }
                    }
                });

                item.classList.add('visible');
                observer.unobserve(item);
            }
        });
    },
    { threshold: 0.3 }
);

items.forEach((item) => observer.observe(item));

// Efek paralaks dan opacity pada hero section saat scroll
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // Parallax untuk background
    hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;

    // Efek opacity halus pada hero-content saat scroll keluar
    const opacity = Math.max(1 - scrollPosition / (heroHeight * 0.5), 0);
    heroContent.style.opacity = opacity;

    // Efek scale halus pada logo saat scroll
    const logo = document.querySelector('.logo');
    const scale = Math.max(1 - scrollPosition / (heroHeight * 2), 0.8);
    logo.style.transform = `scale(${scale})`;
});

// Animasi untuk footer saat masuk viewport
const footer = document.querySelector('footer'); // Perbaikan typo dari queryFooter
const footerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anime({
                    targets: footer,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    scale: [0.9, 1],
                    duration: 800,
                    easing: 'easeOutCubic',
                    delay: 200
                });
                footerObserver.unobserve(footer);
            }
        });
    },
    { threshold: 0.2 }
);

footerObserver.observe(footer);