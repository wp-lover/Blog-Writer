import { useBlockProps  } from '@wordpress/block-editor';
import { useState, useEffect  } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { registerBlockType  } from "@wordpress/blocks"
import  metadata  from "./block.json"
import {  ContextAttributes  } from './functions/context-api';
import EditorPanel from './components/editor-panel';
import HeaderMenu from "./components/desktop/header-menu";


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

   const  {attributes , setAttributes } = props;


    const blocksProps = useBlockProps();

    // Do not make request for data if the block is not selected.

        useEffect(() => {
           
           apiFetch({ path: '/gsp/v1/menu' }).then((menu) => {
                setMenus(menu['data']['menu'])

            });
        }, []);

        

    return (
        <>
        <ContextAttributes.Provider value={[attributes , setAttributes]} >  
            <EditorPanel /> 
            <div {...blocksProps}>
                { menus.length > 0 ? menuWrapper( menus ) : <div>Data loading...</div>}
            </div>
        </ContextAttributes.Provider>
        </>
    );

}


function menuWrapper( items ){


    return (
    <>
        <HeaderMenu items={items}/>
        </>
       );
}

