import { __ } from '@wordpress/i18n'
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'
import { useState } from '@wordpress/element';
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
	const { images } = attributes;
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	/**
  * Handles the next slide transition in the image carousel.
  * The function sets the `isTransitioning` state to `true`, waits 300 milliseconds, then updates the `activeIndex` state to the next slide index (wrapping around to the first slide if the current index is the last slide). Finally, it sets `isTransitioning` back to `false` to allow the next transition.
  */
	const nextSlide = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
			setIsTransitioning(false);
		}, 300);
	};

	/**
  * Handles the previous slide transition in the image carousel.
  * 
  * The function sets the `isTransitioning` state to `true`, waits 300 milliseconds, then updates the `activeIndex` state to the previous slide index (wrapping around to the last slide if the current index is 0). Finally, it sets `isTransitioning` back to `false` to allow the next transition.
  */
	const prevSlide = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === 0 ? images.length - 1 : prevIndex - 1
			);
			setIsTransitioning(false);
		}, 300);
	};

	/**
  * Handles the selection of new images for the image carousel.
  * @param {Array<Object>} newImages - An array of image objects selected by the user. Each object should have `id`, `url`, and `alt` properties.
  * @returns {void}
  */
	const onSelectImages = (newImages) => {
		setAttributes({
			images: newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			})),
		});
	};
	return (
		<div className="image-carousel">
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImages}
					allowedTypes={['image']}
					multiple
					gallery
					value={images.map((img) => img.id)}
					render={({ open }) => (
						<Button onClick={open} isPrimary>
							{__('Ajoutez plus de photos', 'testmohamedhabibaloui')}
						</Button>
					)}
				/>
			</MediaUploadCheck>

			<div className="carousel">
				{images.length > 1 && <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
					&lt;
				</button>}
				<div className={`carousel__imgwrapper ${isTransitioning ? 'transitioning' : ''}`}>
					{images.length &&
						<img alt={`Slide ${activeIndex}`} src={images[activeIndex].url} />}
				</div>
				{images.length > 1 &&<button onClick={nextSlide} className="carousel__btn carousel__btn--next">
					&gt;
				</button>}
			</div>
		</div>
	);
}
