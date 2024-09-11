
import {Panel, PanelBody, PanelRow , ColorPicker } from "@wordpress/components";
import {useContext } from '@wordpress/element';

import { ContextAttributes  } from '../../../functions/context-api';


export default function ColorsPanel() {

    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <>
            <Panel>
                <PanelBody title="Colors" initialOpen={false}>
                    <PanelRow>
                        <h3>Header Background Color</h3>
                    </PanelRow>
                    <PanelRow>
                        <ColorPicker
                            onChange={ (val) => {
                                setAttributes({ header_bg : val });
                            } }
                            enableAlpha
                            defaultValue={attributes.header_bg}
                           
                        />
                    </PanelRow>
                    <PanelRow>
                    <h3>Item Background Color</h3>
                    </PanelRow>
                    <PanelRow>
                        <ColorPicker
                            onChange={ (val) => {
                                setAttributes({ item_bg_color : val });
                            } }
                            enableAlpha
                            defaultValue={attributes.item_bg_color}
                        />
                    </PanelRow>
                    <PanelRow>
                    <h3>Item Text Color</h3>
                    </PanelRow>
                    <PanelRow>
                        <ColorPicker
                            onChange={ (val) => {
                                setAttributes({ item_text_color : val }); 
                               
                            } }
                            enableAlpha
                            defaultValue={attributes.item_text_color}
                        />
                    </PanelRow>
                </PanelBody>     
            </Panel>
        </>
    );
}