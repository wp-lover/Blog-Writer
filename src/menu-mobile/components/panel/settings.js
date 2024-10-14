import {
    CheckboxControl, Panel, PanelBody, RangeControl
} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../functions/context-api';

export function Settings(){
    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody initialOpen={true} title='Settings'>
                <RangeControl  
                    initialPosition={ attributes.container_margin_t }
                    label={"Container Margin-Top"}
                    max={100}
                    min={-100}
                    onChange={(val) => {

                        setAttributes({ container_margin_t : val});
                
                    }}
                />
                <CheckboxControl
                    label="Hide on Desktop"
                    checked={ attributes.is_hidden_desktop }
                    onChange={ ( val ) => setAttributes({ is_hidden_desktop : val }) }
                />
            </PanelBody>
        </Panel>
    );
} 