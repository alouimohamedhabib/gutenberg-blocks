import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss'

const Edit = ({ attributes, setAttributes }) => {
    const { columns, columnGap, responsiveBreakpoint } = attributes;
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
            <InspectorControls>
                <PanelBody title="Grid Settings">
                  
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Edit;
