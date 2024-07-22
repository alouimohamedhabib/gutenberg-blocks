import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { columns, columnGap, responsiveBreakpoint } = attributes;

    const blockProps = useBlockProps.save({
        className: `responsive-columns columns-${columns}`,
        style: { gap: `${columnGap}px` },
        'data-breakpoint': responsiveBreakpoint,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
