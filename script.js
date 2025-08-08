// Animasi untuk hero section
anime({
    targets: '.hero-content .logo',
    scale: [0.8, 1], // Skala lebih kecil untuk efek subtil
    opacity: [0, 1],
    duration: 1200, // Durasi lebih lambat
    easing: 'easeOutQuad'
});

anime({
    targets: '.hero-content .title',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: 200
});

anime({
    targets: '.hero-content .subtitle',
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: anime.stagger(150, { start: 400 })
});

// Animasi untuk section title
anime({
    targets: '.section-title',
    translateY: [20, 0], // Ganti scale dengan translateY untuk efek masuk halus
    opacity: [0, 1],
    duration: 1000,
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
                const translateXStart = direction === 'left' ? -50 : 50; // Jarak lebih kecil

                anime({
                    targets: item,
                    translateX: [translateXStart, 0],
                    opacity: [0, 1],
                    duration: 1000, // Durasi lebih lambat untuk efek halus
                    easing: 'easeOutQuad', // Easing lebih lembut
                    delay: anime.stagger(200, { start: 100 }) // Stagger lebih lambat
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

    hero.style.backgroundPositionY = `${scrollPosition * 0.2}px`; // Paralaks lebih subtil
    const opacity = Math.max(1 - scrollPosition / (heroHeight * 0.6), 0);
    heroContent.style.opacity = opacity;

    const logo = document.querySelector('.logo');
    const scale = Math.max(1 - scrollPosition / (heroHeight * 3), 0.9); // Skala lebih kecil
    logo.style.transform = `scale(${scale})`;
});

// Animasi untuk footer saat masuk viewport
const footer = document.querySelector('footer');
const footerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anime({
                    targets: footer,
                    translateY: [20, 0], // Jarak lebih kecil
                    opacity: [0, 1],
                    duration: 1000, // Durasi lebih lambat
                    easing: 'easeOutQuad',
                    delay: 200
                });
                footerObserver.unobserve(footer);
            }
        });
    },
    { threshold: 0.2 }
);

footerObserver.observe(footer);