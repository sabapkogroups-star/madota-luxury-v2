document.addEventListener('DOMContentLoaded', () => {
    // Navbar Glassmorphism Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('bg-black/40', 'backdrop-blur-xl', 'py-5');
            navbar.classList.remove('bg-transparent', 'py-8');
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            navbar.classList.remove('bg-black/40', 'backdrop-blur-xl', 'py-5');
            navbar.classList.add('bg-transparent', 'py-8');
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    /* 
     * GSAP READY ARCHITECTURE
     * The CSS classes 'clip-text-container' and 'reveal-text' are structured 
     * precisely for GSAP integration. To convert CSS animations to GSAP, 
     * remove the 'animate-reveal' classes from HTML and uncomment below:
     *
     * gsap.to('.reveal-text', {
     *     y: '0%',
     *     opacity: 1,
     *     duration: 1.8,
     *     stagger: 0.2,
     *     ease: "power4.out",
     *     delay: 0.5
     * });
     */
});
document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Intersection Observer for Cinematic Reveals
            const revealOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, revealOptions);

            document.querySelectorAll('.scroll-trigger').forEach(trigger => {
                revealObserver.observe(trigger);
            });


            // 2. Smooth Parallax Effect on Scroll
            const section = document.getElementById('brand-statement');
            const parallaxImg = section.querySelector('.parallax-img');

            // Using requestAnimationFrame for buttery smooth performance
            let ticking = false;

            function updateParallax() {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Check if section is in viewport
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    // Calculate scroll progress (0 to 1) relative to section visibility
                    const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    
                    // Map progress to a Y translation percentage (-10% to 10%)
                    const yOffset = (scrollProgress - 0.5) * 20; 
                    
                    parallaxImg.style.transform = `translateY(${yOffset}%) scale(1.15)`;
                }
                ticking = false;
            }

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }, { passive: true });

            // Initial call to set position on load
            updateParallax();
        });
        document.addEventListener("DOMContentLoaded", () => {
            
            /* Intersection Observer for Cinematic Scroll Reveals */
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        // Optional: Unobserve if you only want it to animate once
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-trigger').forEach(trigger => {
                revealObserver.observe(trigger);
            });

            /* Dynamic Mouse Glow Effect for Glass Cards */
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Update CSS variables for the radial gradient center
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer for Cinematic Scroll Reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the revealed class
                entry.target.classList.add('is-revealed');
                
                // Unobserve to run animation only once
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observe all scroll triggers (headers, individual cards)
    const triggerElements = document.querySelectorAll('.scroll-trigger');
    triggerElements.forEach(trigger => {
        revealObserver.observe(trigger);
    });

    // Optional: Subtle Parallax Effect on Cards during Scroll
    // Enhances the 'Apple-level' fluid feel
    const cards = document.querySelectorAll('.portfolio-card');
    let ticking = false;

    function handleScroll() {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Check if card is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                const img = card.querySelector('.card-image');
                // Calculate percentage of card position relative to screen center
                const yPos = (rect.top - (windowHeight / 2)) * 0.05;
                // Apply subtle Y transform on top of the CSS scale
                img.style.transformOrigin = 'center center';
                img.style.transform = `scale(1.05) translateY(${yPos}px)`;
            }
        });
        ticking = false;
    }

    // Only apply scroll listener on non-touch devices for performance
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        }, { passive: true });
        
        // Initial call
        handleScroll();
    }
});
document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Cinematic Scroll Reveal Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const section = document.querySelector('.scroll-trigger');
            if (section) revealObserver.observe(section);

            // 2. Subtle Video Parallax Effect
            const videoWrapper = document.querySelector('.video-wrapper');
            let ticking = false;

            function updateParallax() {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Ensure section is in viewport
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    // Calculate scroll progress relative to the section
                    const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                    
                    // Map progress to Y translation percentage (moves slower than scroll)
                    const yOffset = (scrollProgress - 0.5) * 15; // 15% range
                    
                    videoWrapper.style.transform = `translateY(${yOffset}%)`;
                }
                ticking = false;
            }

            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(updateParallax);
                        ticking = true;
                    }
                }, { passive: true });
                updateParallax();
            }

            // 3. Audio Toggle Logic
            const soundBtn = document.getElementById('sound-toggle');
            const video = document.getElementById('showcase-video');

            soundBtn.addEventListener('click', () => {
                if (video.muted) {
                    video.muted = false;
                    soundBtn.classList.remove('sound-muted');
                } else {
                    video.muted = true;
                    soundBtn.classList.add('sound-muted');
                }
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Initialize Swiper for Cinematic Slider
            const testimonialSwiper = new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
                speed: 1200, // Cinematic transition speed
                grabCursor: true,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2.2,
                        spaceBetween: 60,
                    },
                    1440: {
                        slidesPerView: 2.5,
                        spaceBetween: 80,
                    }
                }
            });

            // 2. Intersection Observer for Scroll Reveals
            const revealOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target); 
                    }
                });
            }, revealOptions);

            document.querySelectorAll('.scroll-trigger').forEach(trigger => {
                revealObserver.observe(trigger);
            });

            // 3. Mouse Glow Effect on Cards
            const cards = document.querySelectorAll('.testimonial-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

        });
        document.addEventListener("DOMContentLoaded", () => {
            
            // Intersection Observer for Cinematic Reveals
            const revealOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            }, revealOptions);

            const section = document.querySelector('.scroll-trigger');
            if (section) {
                revealObserver.observe(section);
            }

            // Form Input Polish (Ensure inputs autofill correctly visually)
            const inputs = document.querySelectorAll('.form-input');
            inputs.forEach(input => {
                // Trigger check on load for cached inputs
                if(input.value.trim() !== '') {
                    input.setAttribute('placeholder', ' '); 
                }
            });
        });
        