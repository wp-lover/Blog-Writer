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
  return (
      <div>
          <div className="first-section">
              <InnerBlocks key="md-left" allowedBlocks={wp.blocks.getBlockTypes().map(block => block.name).filter(blockName => !notAllowedBlocksForRight.includes(blockName))} />
          </div>
          <div className="second-section">
              <InnerBlocks key="md-right" allowedBlocks={wp.blocks.getBlockTypes().map(block => block.name).filter(blockName => !notAllowedBlocksForLeft.includes(blockName))} />
          </div>
      </div>
  );
}
