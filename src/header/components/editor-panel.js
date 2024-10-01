import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel , SelectControl , Panel, PanelBody } from "@wordpress/components";
import { useContext} from '@wordpress/element';

import { ContextAttributes , state_header_align, state_header_justify_content  } from '../functions/context-api';
import ColorsPanel from './desktop/panels/colors-panel';
import SubMenuSettings from './desktop/panels/sub-menu-panel';

import SpacePanelDesktop from './desktop/panels/space-panel-desktop';
import SpacePanelMobile from './desktop/panels/space-panel-desktop'; 




export default function EditorPanel() {

    const onSelect = ( tabName ) => {
   
        // if (tabName == 'desktop') {
        //     isDesktop.value = true;
        // } else {
        //     isDesktop.value = false;
        // }
    };
    

    return (
        <>
            <InspectorControls>
                <TabPanel
                    className="my-tab-panel"
                    activeClass="active-tab"
                    onSelect={ onSelect }
                    tabs={ [
                        {
                            name: 'desktop',
                            title: 'Desktop View',
                            className: 'tab-one',
                        },
                        {
                            name: 'mobile',
                            title: 'Mobile View',
                            className: 'tab-two',
                        },
                    ] }
                >
                   { ( tab ) => {
                    return (
                        tab.name == 'desktop' ? <DesktopHeaderMenu /> : <MobileSidebaMenu />
                    );
                   } }
                </TabPanel>
            </InspectorControls>
        </>
    );
}


function DesktopHeaderMenu() {
    return (
        <>
            <ColorsPanel />
            <SpacePanelDesktop />
            <SubMenuSettings />
        </>
    );
}

function MobileSidebaMenu(){
    return (
        <>
            <SpacePanelMobile />
        </>
    );
}
