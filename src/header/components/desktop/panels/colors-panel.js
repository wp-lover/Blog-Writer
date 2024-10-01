
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
                    <br />
                    <h3>Item Background Hover Color</h3>
                    <PanelRow>
                        <ColorPicker
                            onChange={ (val) => {
                                setAttributes({ item_bg_hover_color : val });
                            } }
                            enableAlpha
                            defaultValue={attributes.item_bg_hover_color}
                        />
                    </PanelRow>
                    <h3>Item Text Hover Color</h3>
                    <ColorPicker
                            onChange={ (val) => {
                                setAttributes({ item_text_hover_color : val }); 
                               
                            } }
                            enableAlpha
                            defaultValue={attributes.item_text_hover_color}
                        />
                </PanelBody>     
            </Panel>
        </>
    );
}