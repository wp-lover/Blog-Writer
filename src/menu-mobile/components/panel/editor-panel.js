
import { InspectorControls } from '@wordpress/block-editor';
import {RangeControl , Panel, PanelBody} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';



export default function EditorPanel() {
    const [attributes , setAttributes] = useContext(ContextAttributes);
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody>
                    <RangeControl  
                            initialPosition={ attributes.menu_container_margin_y }
                            label={"Menu Container Margin-Y"}
                            max={100}
                            min={-100}
                            onChange={(val) => {

                                setAttributes({ menu_container_margin_y : val});
                        
                            }}
                        />
                        <RangeControl  
                            initialPosition={ attributes.item_min_width }
                            label={"Item min-width"}
                            max={450}
                            min={0}
                            onChange={(val) => {

                                setAttributes({item_min_width: val});
                        
                            }}
                        />
                    </PanelBody>
                </Panel>
               
            </InspectorControls>
        </>
    );
}


// <ColorsPanel />
// <SpacePanelDesktop />
// <SubMenuSettings />