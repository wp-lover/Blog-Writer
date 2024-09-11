import { PanelRow , RangeControl } from "@wordpress/components";


export default function Padding(array) {

    const title = array.props[0];
    const key = array.props[1];
    const initialValue = array.props[2];
    return (
        <PanelRow>
            <RangeControl  
            help="Please select how transparent you would like this."
            initialPosition={initialValue}
            label={title}
            max={100}
            min={0}
            onChange={(val) => {
                
                setAttributes({key: val});
        
            }} />
        </PanelRow>
    );
}

