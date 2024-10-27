import {RangeControl , Panel, PanelBody} from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../../functions/context-api';
    

export default function BorderRadius() {

    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <Panel>
            <PanelBody title='Border Radius' initialOpen={false}>
                <RangeControl  
                    initialPosition={ attributes.border_radius_tl }
                    label={"Border Radius Top Left"}
                    max={100}
                    min={0}
                    onChange={(val) => {

                        setAttributes({border_radius_tl: val});
                
                }} />
                <RangeControl  
                    initialPosition={ attributes.border_radius_tr }
                    label={"Border Radius Top Right"}
                    max={100}
                    min={0}
                    onChange={(val) => {

                        setAttributes({border_radius_tr: val});
                
                }} />
                <RangeControl  
                    initialPosition={ attributes.border_radius_bl }
                    label={"Border Radius Bottom Left"}
                    max={100}
                    min={0}
                    onChange={(val) => {

                        setAttributes({border_radius_bl: val});
                
                }} />
                <RangeControl  
                    initialPosition={ attributes.border_radius_br }
                    label={"Border Radius Bottom Right"}
                    max={100}
                    min={0}
                    onChange={(val) => {

                        setAttributes({border_radius_br: val});
                
                }} />
            </PanelBody>
        </Panel>
    );
}
