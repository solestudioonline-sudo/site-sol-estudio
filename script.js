document.addEventListener('DOMContentLoaded', () => {
    // Select all elements to be animated using the classes defined in HTML
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .hero-content, .card, .step, .proof-item, .section-intro');

    // Intersection Observer Options
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px" // Standard margin
    };

    // Callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    // Create Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element
    animatedElements.forEach(el => {
        // Ensure initial state by adding the base class if missing
        if (!el.classList.contains('fade-in') && !el.classList.contains('fade-in-up')) {
            el.classList.add('fade-in-up');
        }
        observer.observe(el);
    });

    // Optional: Smooth scroll for anchor links (future-proofing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
