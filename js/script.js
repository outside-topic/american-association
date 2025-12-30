document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Hover for Desktop
    if (window.innerWidth >= 992) {
        document.querySelectorAll('.navbar .dropdown, .navbar .dropdown-submenu').forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                const menu = this.querySelector('.dropdown-menu');
                if (menu) menu.classList.add('show');
            });
            element.addEventListener('mouseleave', function() {
                const menu = this.querySelector('.dropdown-menu');
                if (menu) menu.classList.remove('show');
            });
        });
    }

    // Submenu Toggle for Mobile
    document.querySelectorAll('.dropdown-submenu > .dropdown-toggle').forEach(function(element) {
        element.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();
                const nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('dropdown-menu')) {
                    nextEl.classList.toggle('show');
                }
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Swiper Initialization
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                animateHeroContent();
            },
            slideChangeTransitionStart: function () {
                resetHeroAnimation();
            },
            slideChangeTransitionEnd: function () {
                animateHeroContent();
            }
        }
    });

    // Testimonial Swiper
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    function animateHeroContent() {
        const activeSlide = document.querySelector('.swiper-slide-active');
        const title = activeSlide.querySelector('.hero-title');
        const subtitle = activeSlide.querySelector('.hero-subtitle');
        const buttons = activeSlide.querySelector('.hero-buttons');

        const tl = gsap.timeline();
        tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(subtitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .to(buttons, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }

    function resetHeroAnimation() {
        gsap.set('.hero-title, .hero-subtitle, .hero-buttons', { opacity: 0, y: 30 });
    }

    // Scroll Animations
    gsap.from('.about-preview .section-tag, .about-preview .section-title, .about-preview .section-desc, .about-preview .check-list li, .about-preview .btn', {
        scrollTrigger: {
            trigger: '.about-preview',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from('.about-preview .image-stack', {
        scrollTrigger: {
            trigger: '.about-preview',
            start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out"
    });



    gsap.from('.cta-section .container *', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // New Sections Animations
    gsap.from('.leadership-section .leadership-image-wrapper', {
        scrollTrigger: {
            trigger: '.leadership-section',
            start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from('.leadership-section .col-lg-6:last-child *', {
        scrollTrigger: {
            trigger: '.leadership-section',
            start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Testimonials and FAQ Animations
    gsap.from('.testimonials-section .container *', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from('#faqAccordion .accordion-item', {
        scrollTrigger: {
            trigger: '#faqAccordion',
            start: 'top 90%',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out"
    });

});
