import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel , SelectControl , Panel, PanelBody } from "@wordpress/components";
import {useState , useContext} from '@wordpress/element';

import { ContextAttributes } from '../functions/context-api';
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
            <JustifyContent />
            <ItemAlign />
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


const JustifyContent = () => {

    const [attributes ,setAttribute] = useContext(ContextAttributes);
    
    const [ value , setValue ] = useState( 'md:justify-between' );

    return (
        <Panel>
            <PanelBody>
                <h3>Header Justify Content</h3>
                <SelectControl
                    label="Justify Content"
                    value={ value }
                    options={ [
                        { label: 'Between', value: 'md:justify-between' },
                        { label: 'Center', value: 'md:justify-center' },
                        { label: 'Around', value: 'md:justify-around' },
                    ] }
                    onChange={ ( val ) => {
                        setValue( val );
                        setAttribute({ header_justify_content : val });

                    } }
                    __nextHasNoMarginBottom
                />
            </PanelBody>
        </Panel>
    );
};


const ItemAlign = () => {

    const [attributes ,setAttribute] = useContext(ContextAttributes);
    
    const [ value, setValue ] = useState( 'md:items-end' );

    return (
        <Panel>
            <PanelBody>
                <h3>Header Item Alignment</h3>
                <SelectControl
                    label="Item Align"
                    value={ value }
                    options={ [
                        { label: 'Start', value: 'md:items-start' },
                        { label: 'Center', value: 'md:items-center' },
                        { label: 'End', value: 'md:items-end' },
                    ] }
                    onChange={ ( val ) => {
                        setValue( val );
                        setAttribute({ header_item_align : val });

                    } }
                    __nextHasNoMarginBottom
                />
            </PanelBody>
        </Panel>
    );
};
