import { useBlockProps, InnerBlocks, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss'

const Edit = ({ attributes, setAttributes }) => {
    const ALLOWED_BLOCKS = [
        'mha/testmohamedhabibaloui-content',
        'mha/testmohamedhabibaloui-carousel'];

        const blockProps = useBlockProps();

    return (
        <>
            <div {...blockProps}>
            <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    orientation="horizontal"
                    renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
                />
            </div>
        </>
    );
};

export default Edit;
