// ===================================
// Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initSmoothScroll();
    initCopyFunctionality();
    initBackToTop();
});

// Utility: Throttle function
function throttle(fn, wait) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Navbar scroll effect - Throttled
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Scroll Reveal Animation - Using IntersectionObserver
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Copy Functionality
function initCopyFunctionality() {
    const copyItems = document.querySelectorAll('.copy-item');

    copyItems.forEach(item => {
        item.addEventListener('click', async () => {
            const value = item.getAttribute('data-value');
            try {
                await navigator.clipboard.writeText(value);

                // Visual feedback
                const hint = item.querySelector('.copy-hint');
                const originalText = hint.innerText;

                hint.innerText = '✅ Copied!';
                item.style.borderColor = 'var(--color-accent)';
                item.style.background = 'var(--color-accent-glow)';

                setTimeout(() => {
                    hint.innerText = originalText;
                    item.style.borderColor = '';
                    item.style.background = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                // Fallback or user alert could go here
                alert('Copy failed. Please copy manually: ' + value);
            }
        });
    });
}

// Project Modal System
function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const openButtons = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open Modal
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal Function
    const closeModal = () => {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => modal.classList.remove('active'));
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close via Button
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close via Overlay
    overlay.addEventListener('click', closeModal);

    // Close via Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, 100));

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
