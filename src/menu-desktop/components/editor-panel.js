import { InspectorControls } from '@wordpress/block-editor';
import ColorsPanel from './desktop/panels/colors-panel';
import SubMenuSettings from './desktop/panels/sub-menu-panel';
import {RangeControl , Panel, PanelBody} from '@wordpress/components';
import SpacePanelDesktop from './desktop/panels/space-panel-desktop';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../functions/context-api';



export default function EditorPanel() {
    const [attributes , setAttributes] = useContext(ContextAttributes);
    return (
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody>
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
                <ColorsPanel />
                <SpacePanelDesktop />
                <SubMenuSettings />
            </InspectorControls>
        </>
    );
}