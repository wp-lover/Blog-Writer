
import { InspectorControls } from '@wordpress/block-editor';
import {RangeControl , Panel, PanelBody} from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

import {ContainerBgColor} from './container-bg-color';
import {ItemBgColor , ItemBgHoverColor} from './item-bg-color';
import {ItemTextColor , ItemTextHoverColor } from './item-text-color';



export default function EditorPanel() {
    const [attributes , setAttributes] = useContext(ContextAttributes);
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody initialOpen={false} title='Container Space'>
                    <RangeControl  
                            initialPosition={ attributes.container_margin_t }
                            label={"Container Margin-Top"}
                            max={100}
                            min={-100}
                            onChange={(val) => {

                                setAttributes({ container_margin_t : val});
                        
                            }}
                        />
                    </PanelBody>
                </Panel>
                <ContainerBgColor />
                <ItemBgColor />
                <ItemBgHoverColor />
                <ItemTextColor />
                <ItemTextHoverColor />
            </InspectorControls>
        </>
    );
}


// <ColorsPanel />
// <SpacePanelDesktop />
// <SubMenuSettings />