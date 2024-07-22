import { __ } from '@wordpress/i18n'
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Placeholder, Button } from '@wordpress/components'


/**
 * Renders a media component that allows the user to upload and display an image.
 *
 * The component provides a placeholder that allows the user to upload an image from the media library.
 * If an image is selected, it is displayed in the component, and a button is provided to remove the image.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attributes - The block attributes, including the image ID, URL, and alt text.
 * @param {Function} props.setAttributes - A function to update the block attributes.
 * @returns {JSX.Element} The rendered media component.
 */
export default function MediaComponent(props) {
	/**
	 * Callback function to handle the selection of an image in the media library.
	 * @param {Object} picture - The selected image object, containing properties like `id`, `url`, and `alt`.
	 * @returns {void}
	 */
	const onSelectImage = picture => {
		props.setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	/**
  * Removes the currently selected image from the block's attributes.
  */
	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}

	return (
		<div >
			{!props.attributes?.pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={props.attributes.pictureID}
						render={({ open }) => (
							<Placeholder
								icon="images-alt"
								label={__('Photo', 'testmohamedhabibaloui')}
								instructions={__('Selectionnez une image', 'testmohamedhabibaloui')}
							>
								<Button
									secondary
									isLarge
									onClick={open}
									icon="upload"
								>
									{__('Import', 'testmohamedhabibaloui')}
								</Button>
							</Placeholder>
						)}
					/>
				</MediaUploadCheck>

			) : (

				<div>
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
					/>
					{props.isSelected && (

						<Button
							onClick={onRemoveImage}
							icon="dismiss"
						>
							{__('Supprimez limage', 'testmohamedhabibaloui')}
						</Button>

					)}
				</div>
			)}
		</div>
	)
}
