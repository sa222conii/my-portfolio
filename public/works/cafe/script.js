document.addEventListener('DOMContentLoaded', () => {
    // --- Image Carousel ---
    const carousels = document.querySelectorAll('.image-carousel');
    carousels.forEach(carousel => {
        const imagesData = carousel.dataset.images;
        const altsData = carousel.dataset.alts;
        if (!imagesData || !altsData) return;

        const images = JSON.parse(imagesData).slice(0, 3);
        const alts = JSON.parse(altsData).slice(0, 3);
        let currentIndex = 0;

        carousel.innerHTML = ''; // Clear existing content

        // Create images
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alts[index] || 'Carousel image';
            img.className = 'carousel-image' + (index === 0 ? ' active' : '');
            carousel.appendChild(img);
        });

        const imageElements = carousel.querySelectorAll('.carousel-image');

        // Create nav buttons
        const prevButton = document.createElement('button');
        prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
        prevButton.className = 'carousel-nav prev';
        prevButton.ariaLabel = 'Previous image';
        carousel.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
        nextButton.className = 'carousel-nav next';
        nextButton.ariaLabel = 'Next image';
        carousel.appendChild(nextButton);

        // Create dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
            dot.ariaLabel = `Go to slide ${index + 1}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        carousel.appendChild(dotsContainer);
        const dotElements = dotsContainer.querySelectorAll('.carousel-dot');

        function updateCarousel() {
            imageElements.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
            dotElements.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });

        // Initial display
        updateCarousel();
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('is-visible');
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements that should fade in
    const elementsToAnimate = document.querySelectorAll('.py-24 > .max-w-6xl > *, .py-24 .grid > div, .parallax-section > div');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in-section');
        // Add a staggered delay
        el.style.transitionDelay = `${(index % 5) * 0.1}s`;
        observer.observe(el);
    });
});
