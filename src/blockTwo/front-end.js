/**
 * Handle the carousel client side
 * Initializes image carousels on the page.
 * This function sets up event listeners and controls for each carousel found.
 */
document.addEventListener( 'DOMContentLoaded', function () {
	const carousels = document.querySelectorAll( '.image-carousel' );
	carousels.forEach( ( carousel ) => {
		const wrapper = carousel.querySelector( '.carousel__imgwrapper' );
		const prevBtn = carousel.querySelector( '.carousel__btn--prev' );
		const nextBtn = carousel.querySelector( '.carousel__btn--next' );
		const images = Array.from( wrapper.querySelectorAll( 'img' ) );
		let currentIndex = 0;

		/**
		 * Displays the image at the specified index.
		 * @param {number} index - The index of the image to show.
		 */
		function CarouseHandler( index ) {
			wrapper.classList.add( 'transitioning' );
			setTimeout( () => {
				images.forEach( ( img, i ) => {
					img.style.display = i === index ? 'block' : 'none';
				} );
				wrapper.classList.remove( 'transitioning' );
			}, 300 );
		}

		/**
		 * Moves to the next slide in the carousel.
		 */
		function nextSlide() {
			currentIndex = ( currentIndex + 1 ) % images.length;
			CarouseHandler( currentIndex );
		}

		/**
		 * Moves to the previous slide in the carousel.
		 */
		function prevSlide() {
			currentIndex = ( currentIndex - 1 + images.length ) % images.length;
			CarouseHandler( currentIndex );
		}

		nextBtn.addEventListener( 'click', nextSlide );
		prevBtn.addEventListener( 'click', prevSlide );

		// Engine, start 🚀
		CarouseHandler( currentIndex );
	} );
} );
