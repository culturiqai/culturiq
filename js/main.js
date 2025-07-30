// JS for fade-in animations on scroll

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const targets = document.querySelectorAll('.fade-in-up');
    targets.forEach(target => {
        observer.observe(target);
    });

    const animateOnLoadTargets = document.querySelectorAll('.animate-on-load');
    animateOnLoadTargets.forEach(target => {
        target.classList.add('is-visible');
    });
}); 