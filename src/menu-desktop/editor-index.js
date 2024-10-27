import { useBlockProps  } from '@wordpress/block-editor';
import { useState, useEffect  } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { registerBlockType  } from "@wordpress/blocks"
import  metadata  from "./block.json"
import {  ContextAttributes  } from './functions/context-api';
import EditorPanel from './components/editor-panel';
import HeaderMenu from "./components/desktop/header-menu";


import "./editor-index.css";

let isDataLoaded = false;


registerBlockType( metadata.name, {
    edit: Edit,
    save: () => null
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

                    isDataLoaded = true;

                } else {
                    alert('Menu-Desktop did not found menu data, pleasse add menu first.');

                    setLoadingMessage('Menu-Desktop did not found menu data, pleasse add menu first.');
                }
                

            });
        }, []);

        

    return (
        <>
        <ContextAttributes.Provider value={[attributes , setAttributes]} >  
            <EditorPanel /> 
            <div {...blocksProps}>
                { isLoading == false ? menuWrapper( menus ) : <div><h3>{loadingMessage}</h3></div>}
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

