import {Panel, PanelBody, ColorPicker} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

export function ContainerBgColor(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={false} title='Container Background Color'>
            <ColorPicker
                onChange={ (val) => {
                    setAttributes({ container_bg_color : val });
                } }
                enableAlpha
                defaultValue={attributes.container_bg_color}
            />
            </PanelBody>
        </Panel>
    );
} 