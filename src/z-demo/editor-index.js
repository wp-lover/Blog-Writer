import { registerBlockType  } from "@wordpress/blocks"
import  metadata  from "./block.json"


registerBlockType( metadata.name, {
    edit: Edit,
    save: function (props) {
      return null;

    }
} );

function Edit(props) {
   
  return (
      <p>This is the dummy block from blog-writer</p>
  );
}
