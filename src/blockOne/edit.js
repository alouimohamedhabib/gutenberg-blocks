import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,

} from '@wordpress/block-editor'
import {
	PanelBody,
	ButtonGroup,
	Button,
	ToggleControl,
	SelectControl,
	TextControl,
	Icon,
	CheckboxControl
} from '@wordpress/components'
import { Fragment, useState } from '@wordpress/element'

import './editor.scss'
import ArrayFrom from './utils/ArrayFrom'
import iconOptions from './utils/iconOptions'
import IconsPositions from './utils/IconsPositions'
import ButtonPlaceholderContent from './utils/ButtonPlaceholderContent'

/**
 * Renders the edit component for the "Block One" block.
 *
 * This component is responsible for rendering the block editor interface, including the block controls and inspector controls.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attributes - The block attributes.
 * @param {Function} props.setAttributes - Function to update the block attributes.
 * @returns {JSX.Element} The edit component.
 */
/**
 * Renders the edit component for the "Block One" block.
 *
 * This component is responsible for rendering the block editor interface, including the block controls and inspector controls.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.attributes - The block attributes.
 * @param {Function} props.setAttributes - Function to update the block attributes.
 * @returns {JSX.Element} The edit component.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();
	const [nbrButtonToRender, setnbrButtonToRender] = useState()
	// 
	const { attributes, setAttributes } = props;
	const {
		title,
		description,
		titleColor,
		titleSize,
		descriptionColor,
		descriptionSize,
		buttons } = attributes;

	const {
		iconPlaceholder,
		iconPositionPlaceholder,
		labelPlaceholder,
		linkPlaceholder,
		typePlaceholder, showIcon } = ButtonPlaceholderContent


	// callbacks

	/**
  * Handles changes to the title size.
  *
  * Updates the `titleSize` block attribute with the new value.
  *
  * @param {number} titleSize - The new title size.
  * @returns {void}
  */
	const onChangeTitleSize = (titleSize) => {
		setAttributes({ titleSize });
	};
	/**
  * Handles the change in the number of buttons to render.
  *
  * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
  * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
  *
  * @param {number} btnNumber - The new number of buttons to render.
  * @returns {void}
  */
	/**
	 * Handles changes to the number of buttons to render.
	 *
	 * If the `buttons` array is empty, it creates a new array of button objects with placeholder content.
	 * Otherwise, it updates the `nbrButtonToRender` state with the new button number.
	 *
	 * @param {number} btnNumber - The new number of buttons to render.
	 * @returns {void}
	 */
	const onChangeButtonNumber = (btnNumber) => {
		let tmpButtonsContent = [
			...buttons
		]
		ArrayFrom(btnNumber).map((_, index) => {
			if (!tmpButtonsContent[index] || tmpButtonsContent[index]?.label === '')
				tmpButtonsContent.push({
					label: labelPlaceholder,
					link: linkPlaceholder,
					icon: iconPlaceholder,
					iconPosition: iconPlaceholder,
					showIcon,
					type: typePlaceholder,
				})
		})
		setAttributes({
			buttons: [
				...tmpButtonsContent
			]
		})
		setnbrButtonToRender(btnNumber)
	};
	/**
  * Handles changes to the properties of a specific button.
  *
  * Updates the `buttons` attribute with the new button object at the specified index.
  *
  * @param {number} index - The index of the button to update.
  * @param {object} buttonObj - The new button object with updated properties.
  * @returns {void}
  */
	const onChangeButtonProps = (index, buttonObj) => {
		console.log(buttonObj)
		let tmpButtons = buttons.map((button, btnIndex) => btnIndex === index ? button = { ...buttonObj } : button)
		// debugger;
		setAttributes({
			buttons: [
				...tmpButtons
			]
		})
	}

	/**
  * Handles changes to the description size.
  *
  * Updates the `descriptionSize` attribute with the new value.
  *
  * @param {string} descriptionSize - The new description size value.
  * @returns {void}
  */
	const onChangeDescriptionSize = (descriptionSize) => {
		setAttributes({ descriptionSize });
	};
	const onChangeTitleColor = titleColor => props.setAttributes({ titleColor })
	const onChangeDescriptionColor = descriptionColor => props.setAttributes({ descriptionColor })
	return (
		<Fragment>
			{/* ********************************************************************* Inspector  */}
			<InspectorControls>
				<PanelColorSettings
					title={__('Les couleurs 🎨', 'testmohamedhabibaloui')}
					colorSettings={
						[
							{
								value: titleColor,
								onChange: onChangeTitleColor,
								label: __('Couleur de text ', 'testmohamedhabibaloui'),
							},
							{
								value: descriptionColor,
								onChange: onChangeDescriptionColor,
								label: __('Couleur de la description ', 'testmohamedhabibaloui'),
							}
						]
					}
				/>

				<PanelBody title={__('Taille du text', 'testmohamedhabibaloui')}>
					{titleSize && (
						<SelectControl
							label={__('Taille de title', 'testmohamedhabibaloui')}
							value={titleSize}
							options={[
								{ label: 'Small', value: '12px' },
								{ label: 'Medium', value: '16px' },
								{ label: 'Large', value: '24px' },
								{ label: 'Extra Large', value: '32px' }
							]}
							onChange={onChangeTitleSize}
						/>
					)}
					{descriptionSize && (
						<SelectControl
							label={__('Taille de la description', 'testmohamedhabibaloui')}
							value={descriptionSize}
							options={[
								{ label: 'Small', value: '12px' },
								{ label: 'Medium', value: '16px' },
								{ label: 'Large', value: '24px' },
								{ label: 'Extra Large', value: '32px' }
							]}
							onChange={onChangeDescriptionSize}
						/>
					)}
				</PanelBody>

				<PanelBody title={__('Les boutons labelés', 'testmohamedhabibaloui')}>
					<SelectControl
						label={__('Combien de bouton à afficher', 'testmohamedhabibaloui')}
						value={nbrButtonToRender}
						options={[
							{ label: 'Pas de bouton', value: '0' },
							{ label: 'Un seul bouton', value: '1' },
							{ label: 'Deux boutons', value: '2' },
						]}
						onChange={(val) => onChangeButtonNumber(val)}
					/>

					{nbrButtonToRender > 0
						?
						ArrayFrom(nbrButtonToRender).map((_, index) => <>
							<TextControl
								label={<>{__('Label du bouton', 'testmohamedhabibaloui')} {index + 1}</>}
								value={buttons[index]?.label}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									label: val
								})}
							/>
							<TextControl
								label={<>{__('Lien du bouton', 'testmohamedhabibaloui')} <b>{index + 1}</b></>}
								value={buttons[index]?.link}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									link: val
								})}
							/>
							{/* Maybe a better using SelectControl here 💡 */}
							<CheckboxControl
								label={__('Bouton primaire', 'testmohamedhabibaloui')}
								checked={buttons[index].type === 'primary' ? true : false}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									type: val ? 'primary' : 'secondary'
								})}
							/>
							<SelectControl
								label={<>{__('Selectionner une icone', 'testmohamedhabibaloui')} <b>{index + 1}</b></>}
								value={buttons[index]?.icon}
								options={iconOptions}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									icon: val
								})}
							/>

							<CheckboxControl
								__nextHasNoMarginBottom
								label={__('Afficher l\'icone', 'testmohamedhabibaloui')}
								checked={buttons[index].showIcon ?? true}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									showIcon: val
								})}
							/>


							<SelectControl
								label={<>{__('La position de l\'icone', 'testmohamedhabibaloui')} <b>{index + 1}</b></>}
								value={buttons[index]?.iconPosition}
								options={IconsPositions}
								onChange={(val) => onChangeButtonProps(index, {
									...buttons[index],
									iconPosition: val
								})}
							/>
							<div className='splitter'>	</div>
						</>)

						: <></>}

				</PanelBody>
			</InspectorControls>
			{/* ********************************************************************* Block rendering  */}
			<div {...blockProps}>
				{/* The title input */}
				<RichText
					style={{
						color: titleColor,
						fontSize: titleSize ?? 12
					}}
					tagName="h2"
					placeholder={__('Un text ici...', 'testmohamedhabibaloui')}
					value={title}
					className="title"
					onChange={title => props.setAttributes({ title })}
				/>
				<RichText
					style={{
						color: descriptionColor,
						fontSize: descriptionSize ?? 12
					}}
					tagName="p"
					placeholder={__('Description..', 'testmohamedhabibaloui')}
					value={description}
					className="description"
					onChange={description => props.setAttributes({ description })}
				/>
				{nbrButtonToRender > 0
					&& ArrayFrom(nbrButtonToRender).map((_, index) => (
						<Button
							className={`button ${buttons[index]?.iconPosition === 'right' ? 'reverse' : ''}`}
							isPrimary={buttons[index]?.type === 'primary' ? true : false}
							onClick={() => window.location.href = buttons[index].link}
						>
							{buttons[index].showIcon && <Icon icon={buttons[index]?.icon} className='button--icon' />}
							{buttons[index]?.label ? buttons[index]?.label : __('Label du bouton ...', 'testmohamedhabibaloui')}
						</Button>
					)
					)}
			</div>

		</Fragment>
	)
}
