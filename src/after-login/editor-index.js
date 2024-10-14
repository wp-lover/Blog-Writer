import { useBlockProps  } from '@wordpress/block-editor';
import { registerBlockType  } from "@wordpress/blocks"
import { InnerBlocks } from '@wordpress/block-editor';


import  metadata  from "./block.json";

registerBlockType( metadata.name, {
    edit: Edit,
    save: function (props) {

        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    }
} );

function Edit( props ) {

    const blocksProps = useBlockProps();

    return (
        <div {...blocksProps}>
            <InnerBlocks />
        </div>
    );

}
