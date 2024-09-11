import {PanelRow , RangeControl } from "@wordpress/components";


export default function Margin(array) {

    
   const title = array.props[0];
   const key = array.props[1];
   const initialValue = array.props[2];
 
    return (
        <PanelRow>
            <RangeControl  
                initialPosition={ initialValue }
                label={title}
                max={100}
                min={0}
                onChange={(val) => {

                    setAttributes({key: val});
            
                }} />
        </PanelRow>
    );
}