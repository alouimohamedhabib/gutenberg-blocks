import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

const Edit = () => {
	const ALLOWED_BLOCKS = [
		'mha/testmohamedhabibaloui-content',
		'mha/testmohamedhabibaloui-carousel',
	];
	const blockProps = useBlockProps();

	return (
		<>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="horizontal"
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				/>
			</div>
		</>
	);
};

export default Edit;
