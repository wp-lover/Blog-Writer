
import { InspectorControls } from '@wordpress/block-editor';
import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

import {Settings} from './settings';
import {ContainerBgColor} from './container-bg-color';
import {ItemBgColor , ItemBgHoverColor} from './item-bg-color';
import {ItemTextColor , ItemTextHoverColor } from './item-text-color';



export default function EditorPanel() {
    const [attributes , setAttributes] = useContext(ContextAttributes);
    return (
        <>
            <InspectorControls>
                <Settings />
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