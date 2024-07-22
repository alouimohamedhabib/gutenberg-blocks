import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { images } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps } className="image-carousel">
			<div className="carousel">
				{ images.length > 1 && (
					<button className="carousel__btn carousel__btn--prev">
						<span className="dashicons dashicons-arrow-left"></span>
					</button>
				) }
				<div className="carousel__imgwrapper">
					{ images.map( ( image, index ) => (
						<img
							className="carousel__img"
							key={ image.id }
							alt={ `Slide ${ index }` }
							src={ image.url }
							style={ {
								display: index === 0 ? 'block' : 'none',
							} }
						/>
					) ) }
				</div>
				{ images.length > 1 && (
					<button className="carousel__btn carousel__btn--next">
						<span className="dashicons dashicons-arrow-right"></span>
					</button>
				) }
			</div>
		</div>
	);
}
