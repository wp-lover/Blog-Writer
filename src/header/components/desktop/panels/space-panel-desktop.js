import {RangeControl , Panel, PanelBody} from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { ContextAttributes } from '../../../functions/context-api';
    

export default function SpacePanelDesktop() {

    return (
        <>
           <ItemMargin />
           <ItemPadding />
        </>
    );
}



function ItemMargin() {

    const [attributes , setAttributes] = useContext( ContextAttributes );

    return (
        <>
           <Panel>
                <PanelBody title='Item Margin' initialOpen={false}>
                    <RangeControl  
                        initialPosition={ attributes.item_margin_t }
                        label={"Margin-Top"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_margin_t: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_margin_t }
                        label={"Margin-Bottom"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_margin_b: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_margin_l }
                        label={"Margin-Left"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_margin_l: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_margin_r }
                        label={"Margin-Right"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_margin_r: val});
                    
                    }} />
                </PanelBody>
           </Panel>
        </>
    );
}


function ItemPadding() {

    const [attributes , setAttributes] = useContext( ContextAttributes );

    return (
        <>
           <Panel>
                <PanelBody title='Item Padding' initialOpen={false}>
                    <RangeControl  
                        initialPosition={ attributes.item_padding_t }
                        label={"Padding-Top"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_padding_t: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_padding_t }
                        label={"Padding-Bottom"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_padding_b: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_padding_l }
                        label={"Padding-Left"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_padding_l: val});
                    
                    }} />
                    <RangeControl  
                        initialPosition={ attributes.item_padding_r }
                        label={"Padding-Right"}
                        max={100}
                        min={0}
                        onChange={(val) => {

                            setAttributes({item_padding_r: val});
                    
                    }} />
                </PanelBody>
           </Panel>
        </>
    );
}




