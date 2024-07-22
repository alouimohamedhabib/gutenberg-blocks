import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { Fragment, useState } from '@wordpress/element'
registerBlockType('create-block/gutenberg-carousel', {
    title: __('Gutenberg Carousel', 'gutenberg-carousel'),
    icon: 'slides',
    category: 'widgets',
    attributes: {
        images: {
            type: 'array',
            default: [],
        },
    },
    edit({ attributes, setAttributes , isSelected}) {
        const { images } = attributes;

        const onSelectImages = (newImages) => {
            setAttributes({ images: newImages.map(image => ({ id: image.id, url: image.url })) });
        };



        const [activeIndex, setActiveIndex] = useState(0);
        const nextSlide = () => {
            setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };
        const prevSlide = () => {
            setActiveIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        return (
            <div className="gutenberg-carousel">
                ----- {isSelected} ))))
                <InspectorControls>
                    <PanelBody title={__('Carousel Settings', 'gutenberg-carousel')}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImages}
                                allowedTypes={['image']}
                                multiple
                                gallery
                                value={images.map(image => image.id)}
                                render={({ open }) => (
                                    <Button onClick={open}>
                                        {__('Select Images', 'gutenberg-carousel')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </PanelBody>
                </InspectorControls>


                <div className="carousel">
                    <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                        &lt;
                    </button>
					<div className="carousel__imgwrapper">
						{images.length &&
                         <img alt={`Slide ${activeIndex}`} src={images[activeIndex].url}/>}
					</div>
					<button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                        &gt;
                    </button>
                </div>
            </div>
        );
    },
    save({ attributes }) {
        const { images } = attributes;

        return (
            <div className="carousel-container">
                {images.length && images.map((image, index) => (
                    <img key={index} src={image.url} alt={__('Carousel Image', 'gutenberg-carousel')} />
                ))}
            </div>
        );
    },
});
