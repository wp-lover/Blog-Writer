import {Panel, PanelBody, PanelRow , RangeControl } from "@wordpress/components";
import {useContext , } from '@wordpress/element';

import { ContextAttributes } from '../../../functions/context-api';



export default function SubMenuSettings() {
    return (
       <>
            <Margin />
       </>
    );
}


function Margin() {

    const [attributes , setAttributes] = useContext( ContextAttributes );

    return (
        <Panel>
                <PanelBody title="Dropdown Menu Margin" initialOpen={false}>
                    <PanelRow>
                        <RangeControl  
                        initialPosition={attributes.sub_menu_margin_t}
                        label="Container Margin-Top"
                        max={100}
                        min={0}
                        onChange={(val) => {
                            
                            setAttributes({ sub_menu_margin_t: val });
                    
                        }} />
                    </PanelRow>
                    <PanelRow>
                        <RangeControl  
                        initialPosition={attributes.child_item_margin_b}
                        label="Child Item Margin-Bottom"
                        max={100}
                        min={0}
                        onChange={(val) => {
                            
                            setAttributes({ child_item_margin_b : val });
                    
                        }} />
                    </PanelRow>
                </PanelBody>
            </Panel>
    );
}

