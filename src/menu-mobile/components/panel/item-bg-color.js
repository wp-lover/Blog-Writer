import {Panel, PanelBody, ColorPicker} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

export function ItemBgColor(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={false} title='Item Background Color'>
            <ColorPicker
                onChange={ (val) => {
                    setAttributes({ item_bg_color : val });
                } }
                enableAlpha
                defaultValue={attributes.item_bg_color}
            />
            </PanelBody>
        </Panel>
    );
} 


export function ItemBgHoverColor(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={false} title='Item Background Hover Color'>
            <ColorPicker
                onChange={ (val) => {
                    setAttributes({ item_bg_hover_color : val });
                } }
                enableAlpha
                defaultValue={attributes.item_bg_hover_color}
            />
            </PanelBody>
        </Panel>
    );
} 