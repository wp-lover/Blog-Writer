import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from "@wordpress/components";

import ColorsPanel from './desktop/panels/colors-panel';
import SubMenuSettings from './desktop/panels/sub-menu-panel';

import SpacePanelDesktop from './desktop/panels/space-panel-desktop';
import SpacePanelMobile from './desktop/panels/space-panel-desktop'; 


const onSelect = ( tabName ) => {
   
    // if (tabName == 'desktop') {
    //     isDesktop.value = true;
    // } else {
    //     isDesktop.value = false;
    // }
};


export default function EditorPanel() {

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



