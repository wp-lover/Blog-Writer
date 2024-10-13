import {Panel, PanelBody, ColorPicker} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

export function ItemTextColor(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={false} title='Item Text Color'>
            <ColorPicker
                onChange={ (val) => {
                    setAttributes({ item_text_color : val });
                } }
                enableAlpha
                defaultValue={attributes.item_text_color}
            />
            </PanelBody>
        </Panel>
    );
} 


export function ItemTextHoverColor(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={false} title='Item Text Hover Color'>
            <ColorPicker
                onChange={ (val) => {
                    setAttributes({ item_text_hover_color : val });
                } }
                enableAlpha
                defaultValue={attributes.item_text_hover_color}
            />
            </PanelBody>
        </Panel>
    );
} 