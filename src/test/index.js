import {  InnerBlocks } from '@wordpress/block-editor';

import { registerBlockType  } from "@wordpress/blocks"
import  metadata  from "./block.json"


registerBlockType( metadata.name, {
    edit: Edit,
    save: function (props) {
      return (
        <div>
            <div className="first-section">
                <InnerBlocks.Content key="md-left" />
            </div>
            <div className="second-section">
                <InnerBlocks.Content key="md-right" />
            </div>
        </div>
    );

    }
} );

function Edit(props) {
   // Define the blocks that are allowed, excluding the unwanted ones (e.g., core/image and core/quote).
   const notAllowedBlocksForLeft = ['core/quote'];

    // Define the blocks that are allowed, excluding the unwanted ones (e.g., core/image and core/quote).
    const notAllowedBlocksForRight = ['core/site-name', 'core/site-logo'];
    const styles = {
        position:"absolute",
        left: "0px",
        top : "0px",
        background: "red",
        marginTop: "0px",
        height: "100vh"
    };
  return (
      <div style={styles}>
          <div className="second-section">
              <InnerBlocks key="md-right" allowedBlocks={wp.blocks.getBlockTypes().map(block => block.name).filter(blockName => !notAllowedBlocksForLeft.includes(blockName))} />
                <p>This is sidebar block</p>
          </div>
      </div>
  );
}
