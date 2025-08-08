// Anime.js animation for petugas items
anime({
    targets: '.petugas-item',
    translateY: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 1000,
    easing: 'easeOutQuad'
});

// Hero section title animation
anime({
    targets: '.title',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutElastic'
});

// Subtitle animation
anime({
    targets: '.subtitle',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: 500,
    duration: 1000,
    easing: 'easeOutQuad'
});