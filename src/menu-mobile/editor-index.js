import { useBlockProps  } from '@wordpress/block-editor';
import { useState, useEffect  } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { registerBlockType  } from "@wordpress/blocks"
import  metadata  from "./block.json"
import { ContextAttributes } from './functions/context-api';
import EditorPanel from './components/panel/editor-panel';
import MobileMenu from "./components/mobile-menu";


import "./editor-index.css";


registerBlockType( metadata.name, {
    edit: Edit,
    save: function (props) {

        return null;
    }
} );

function Edit( props ) {

   
    
    // const blockProps = useBlockProps();
    const [menus, setMenus] = useState([]);

    const [isLoading , setLoading] = useState(true);

    const [loadingMessage , setLoadingMessage] = useState('Data loading...');

   const  {attributes , setAttributes } = props;

    const blocksProps = useBlockProps();

    // Do not make request for data if the block is not selected.

        useEffect(() => {
           
           apiFetch({ path: '/gsp/v1/menu' }).then((menu) => {
                
                if (menu['success']) {
                    setMenus(menu['data']['menu']);

                    setLoading(false);

                } else {
                    alert('Menu-Desktop did not found menu data, pleasse add menu first.');

                    setLoadingMessage('Menu-Desktop did not found menu data, pleasse add menu first.');
                }
                

            });
        }, []);

        

    return (<div>
        <ContextAttributes.Provider value={[attributes , setAttributes]} >  
            <EditorPanel /> 
            <div {...blocksProps}>
                { isLoading == false ? menuWrapper( menus ) : <div><h3>{loadingMessage}</h3></div>}
            </div>
        </ContextAttributes.Provider>
    </div>);

}


function menuWrapper( items ){

   

    return (
    <>
        <MobileMenu items={items}/>
        </>
       );
}
