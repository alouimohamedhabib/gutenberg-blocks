import { useBlockProps, RichText } from '@wordpress/block-editor';
/**
 * Renders the block content for the "testmohamedhabibaloui" block.
 *
 * @param {Object} attributes - The block attributes.
 * @param {string} attributes.title - The title of the block.
 * @param {string} attributes.titleColor - The color of the title.
 * @param {string} attributes.titleSize - The font size of the title.
 * @param {string} attributes.description - The description of the block.
 * @param {string} attributes.descriptionColor - The color of the description.
 * @param {string} attributes.descriptionSize - The font size of the description.
 * @param {Object[]} attributes.buttons - An array of button objects.
 * @param {string} attributes.buttons[].url - The URL of the button.
 * @param {string} attributes.buttons[].text - The text of the button.
 * @param {string} attributes.buttons[].className - The CSS class name of the button.
 * @param {string} attributes.pictureURL - The URL of the image.
 * @param {string} attributes.pictureAlt - The alt text of the image.
 * @returns {JSX.Element} The rendered block content.
 */

export default function save({ attributes }) {
    const {
        title,
        titleColor,
        titleSize,
        description,
        descriptionColor,
        descriptionSize,
        buttons,
        pictureURL,
        pictureAlt
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {title && (
                <RichText.Content
                    tagName="h2"
                    value={title}
                    className='title'
                    style={{ color: titleColor, fontSize: titleSize }}
                />
            )}
            {description && (
                <RichText.Content
                    tagName="p"
                    value={description}
                    style={{ color: descriptionColor, fontSize: descriptionSize }}
                    className='description'
                />
            )}
            {pictureURL && (
                <div className="image-wrapper">
                    <img src={pictureURL} alt={pictureAlt} />
                </div>
            )}
            {buttons && buttons.length > 0 && (
                <div className="buttons-wrapper buttons">
                    {buttons.map((button, index) => (
                        <a key={index} href={button.url} className={`button ${button.className}`}>
                            {button.text}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
