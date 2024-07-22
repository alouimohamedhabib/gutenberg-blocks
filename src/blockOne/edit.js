import { __ } from '@wordpress/i18n';
import { Fragment, useState, useEffect } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	SelectControl,
	TextControl,
	Icon,
	CheckboxControl,
} from '@wordpress/components';

import './editor.scss';
import ArrayFrom from './utils/ArrayFrom';
import iconOptions from './utils/iconOptions';
import IconsPositions from './utils/IconsPositions';
import ButtonPlaceholderContent from './utils/ButtonPlaceholderContent';
import MediaComponent from './components/MediaComponent';

/**
 *
 * Renders the edit component for the "Block One" block.
 * This component is responsible for rendering the block editor interface, including the block controls and inspector controls.
 *
 * @param {Object}   props               - The component props.
 * @param {Object}   props.attributes    - The block attributes.
 * @param {Function} props.setAttributes - Function to update the block attributes.
 * @return {JSX.Element} The edit component.
 */
export default function Edit( props ) {
	const blockProps = useBlockProps();
	const [ nbrButtonToRender, setnbrButtonToRender ] = useState();

	const { attributes, setAttributes } = props;
	const {
		title,
		description,
		titleColor,
		titleSize,
		descriptionColor,
		descriptionSize,
		buttons,
	} = attributes;

	const {
		iconPlaceholder,
		labelPlaceholder,
		linkPlaceholder,
		typePlaceholder,
		showIcon,
	} = ButtonPlaceholderContent;

	useEffect( () => {
		if ( buttons ) {
			onChangeButtonNumber( buttons.length );
		}
	}, [] ); // Explicitly empty deps to avoid re-executing the effect each time user change the buttons number

	// callbacks

	/**
	 * Handles changes to the title size.
	 *
	 * Updates the `titleSize` block attribute with the new value.
	 *
	 * @param {number} titleSize - The new title size.
	 
	 * @return {void}
	 */
	const onChangeTitleSize = ( titleSize ) => {
		setAttributes( { titleSize } );
	};
	/**
	 * Handles the change in the number of buttons to render.
	 * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
	 * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
	 *
	 * @param {number} btnNumber - The new number of buttons to render.
	 
	 * @return {void}
	 */
	/**
	 * Handles changes to the number of buttons to render.
	 *
	 * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
	 * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
	 *
	 * @param {number} btnNumber - The new number of buttons to render.
	 
	 * @return {void}
	 */
	const onChangeButtonNumber = ( btnNumber ) => {
		// truncate buttons array
		let tmpButtonsContent = [];
		if ( buttons.length > 0 ) {
			tmpButtonsContent = [ ...buttons.slice( 0, btnNumber ) ];
		}
		ArrayFrom( btnNumber ).forEach( ( _, index ) => {
			if (
				! tmpButtonsContent[ index ] ||
				tmpButtonsContent[ index ]?.label === ''
			) {
				tmpButtonsContent.push( {
					label: labelPlaceholder,
					link: linkPlaceholder,
					icon: iconPlaceholder,
					iconPosition: iconPlaceholder,
					showIcon,
					type: typePlaceholder,
				} );
			}
			return {};
		} );
		setAttributes( {
			buttons: [ ...tmpButtonsContent ],
		} );
		setnbrButtonToRender( btnNumber );
	};
	/**
	 * Handles changes to the properties of a specific button.
	 * @param {number} index     - The index of the button to update.
	 * @param {Object} buttonObj - The new button object with updated properties.
	  
	 * @return {void}
	 */
	const onChangeButtonProps = ( index, buttonObj ) => {
		console.log( buttonObj );
		const tmpButtons = buttons.map( ( button, btnIndex ) =>
			btnIndex === index ? ( button = { ...buttonObj } ) : button
		);
		setAttributes( {
			buttons: [ ...tmpButtons ],
		} );
	};
	/**
	 * Handles changes to the description size.
	 * @param {string} descriptionSize - The new description size value.
	 
	 * @return {void}
	 */
	const onChangeDescriptionSize = ( descriptionSize ) => {
		setAttributes( { descriptionSize } );
	};
	const onChangeTitleColor = ( titleColor ) =>
		props.setAttributes( { titleColor } );
	const onChangeDescriptionColor = ( descriptionColor ) =>
		props.setAttributes( { descriptionColor } );
	return (
		<Fragment>
			{ /* ********************************************************************* Inspector  */ }
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Les couleurs 🎨', 'testmohamedhabibaloui' ) }
					colorSettings={ [
						{
							value: titleColor,
							onChange: onChangeTitleColor,
							label: __(
								'Couleur de text ',
								'testmohamedhabibaloui'
							),
						},
						{
							value: descriptionColor,
							onChange: onChangeDescriptionColor,
							label: __(
								'Couleur de la description ',
								'testmohamedhabibaloui'
							),
						},
					] }
				/>

				<PanelBody
					title={ __( 'Taille du text', 'testmohamedhabibaloui' ) }
				>
					{ titleSize && (
						<SelectControl
							label={ __(
								'Taille de title',
								'testmohamedhabibaloui'
							) }
							value={ titleSize }
							options={ [
								{
									label: __(
										'Petit',
										'testmohamedhabibaloui'
									),
									value: '12px',
								},
								{
									label: __(
										'Moyenne',
										'testmohamedhabibaloui'
									),
									value: '16px',
								},
								{
									label: __(
										'Large',
										'testmohamedhabibaloui'
									),
									value: '24px',
								},
								{
									label: __(
										'Extra large',
										'testmohamedhabibaloui'
									),
									value: '32px',
								},
							] }
							onChange={ onChangeTitleSize }
						/>
					) }
					{ descriptionSize && (
						<SelectControl
							label={ __(
								'Taille de la description',
								'testmohamedhabibaloui'
							) }
							value={ descriptionSize }
							options={ [
								{ label: 'Small', value: '12px' },
								{ label: 'Medium', value: '16px' },
								{ label: 'Large', value: '24px' },
								{ label: 'Extra Large', value: '32px' },
							] }
							onChange={ onChangeDescriptionSize }
						/>
					) }
				</PanelBody>

				<PanelBody
					title={ __(
						'Les boutons labelés',
						'testmohamedhabibaloui'
					) }
				>
					<SelectControl
						label={ __(
							'Combien de bouton à afficher',
							'testmohamedhabibaloui'
						) }
						value={ nbrButtonToRender }
						options={ [
							{ label: 'Pas de bouton', value: '0' },
							{ label: 'Un seul bouton', value: '1' },
							{ label: 'Deux boutons', value: '2' },
						] }
						onChange={ ( val ) => onChangeButtonNumber( val ) }
					/>

					{ nbrButtonToRender > 0 ? (
						ArrayFrom( nbrButtonToRender ).map( ( _, index ) => (
							<>
								<TextControl
									label={
										<>
											{ __(
												'Label du bouton',
												'testmohamedhabibaloui'
											) }{ ' ' }
											{ index + 1 }
										</>
									}
									value={ buttons[ index ]?.label }
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											label: val,
										} )
									}
								/>
								<TextControl
									label={
										<>
											{ __(
												'Lien du bouton',
												'testmohamedhabibaloui'
											) }{ ' ' }
											<b>{ index + 1 }</b>
										</>
									}
									value={ buttons[ index ]?.link }
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											link: val,
										} )
									}
								/>
								{ /* Maybe a better using SelectControl here 💡 */ }
								<CheckboxControl
									label={ __(
										'Bouton primaire',
										'testmohamedhabibaloui'
									) }
									checked={
										buttons[ index ].type === 'primary'
											? true
											: false
									}
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											type: val ? 'primary' : 'secondary',
										} )
									}
								/>
								<SelectControl
									label={
										<>
											{ __(
												'Selectionner une icone',
												'testmohamedhabibaloui'
											) }{ ' ' }
											<b>{ index + 1 }</b>
										</>
									}
									value={ buttons[ index ]?.icon }
									options={ iconOptions }
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											icon: val,
										} )
									}
								/>

								<CheckboxControl
									label={ __(
										"Afficher l'icone",
										'testmohamedhabibaloui'
									) }
									checked={
										buttons[ index ].showIcon ?? true
									}
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											showIcon: val,
										} )
									}
								/>

								<SelectControl
									label={
										<>
											{ __(
												"La position de l'icone",
												'testmohamedhabibaloui'
											) }{ ' ' }
											<b>{ index + 1 }</b>
										</>
									}
									value={ buttons[ index ]?.iconPosition }
									options={ IconsPositions }
									onChange={ ( val ) =>
										onChangeButtonProps( index, {
											...buttons[ index ],
											iconPosition: val,
										} )
									}
								/>
								<div className="splitter"> </div>
							</>
						) )
					) : (
						<></>
					) }
				</PanelBody>
			</InspectorControls>
			{ /* ********************************************************************* Block rendering  */ }
			<div { ...blockProps }>
				<div className="aloui-grid-container">
					<div className="gird-item">
						{ /* The title input */ }
						<RichText
							style={ {
								color: titleColor,
								fontSize: titleSize ?? 12,
							} }
							tagName="h2"
							placeholder={ __(
								'Un text ici…',
								'testmohamedhabibaloui'
							) }
							value={ title }
							className="title"
							onChange={ ( title ) =>
								props.setAttributes( { title } )
							}
						/>
						<RichText
							style={ {
								color: descriptionColor,
								fontSize: descriptionSize ?? 12,
							} }
							tagName="p"
							placeholder={ __(
								'Description..',
								'testmohamedhabibaloui'
							) }
							value={ description }
							className="description"
							onChange={ ( description ) =>
								props.setAttributes( { description } )
							}
						/>
						{ nbrButtonToRender > 0 &&
							ArrayFrom( nbrButtonToRender ).map(
								( _, index ) => (
									<Button
										key={ index }
										className={ `button ${
											buttons[ index ]?.iconPosition ===
											'right'
												? 'reverse'
												: ''
										}` }
										isPrimary={
											buttons[ index ]?.type === 'primary'
												? true
												: false
										}
										onClick={ () =>
											( window.location.href =
												buttons[ index ].link )
										}
									>
										{ buttons[ index ].showIcon && (
											<Icon
												icon={ buttons[ index ]?.icon }
												className="button--icon"
											/>
										) }
										{ buttons[ index ]?.label
											? buttons[ index ]?.label
											: __(
													'Label du bouton …',
													'testmohamedhabibaloui'
											  ) }
									</Button>
								)
							) }
					</div>
					<div className="gird-item">
						<MediaComponent { ...props } />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
