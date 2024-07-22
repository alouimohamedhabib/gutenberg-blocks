document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.image-carousel');
console.log(carousels)
    carousels.forEach(carousel => {
        const wrapper = carousel.querySelector('.carousel__imgwrapper');
        const prevBtn = carousel.querySelector('.carousel__btn--prev');
        const nextBtn = carousel.querySelector('.carousel__btn--next');
        const images = Array.from(wrapper.querySelectorAll('img'));
        let currentIndex = 0;

        function showImage(index) {
            wrapper.classList.add('transitioning');
            setTimeout(() => {
                images.forEach((img, i) => {
                    img.style.display = i === index ? 'block' : 'none';
                });
                wrapper.classList.remove('transitioning');
            }, 300);
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Initialize
        showImage(currentIndex);
    });
});
