
import { ContextAttributes } from '../../../functions/context-api';
    
import Margin from "../../common/margin";

import Padding from "../../common/padding";
import PanelMargin from "../../common/panel-margin";
import PanelPadding from "../../common/panel-padding";



export default function SpacePanelDesktop() {

    const [attributes , setAttributes] = useContext( ContextAttributes );

    const margins = [
        <Margin props={[ "Margin-Left", "margin_l", attributes.item_margin_l ]} />,
        <Margin props={[ "Margin-Right", "margin_r", attributes.item_margin_r ]} />,
        <Margin props={[ "Margin-Bottom", "margin_b", attributes.item_margin_b ]} />
    ];

    const padings = [
        <Padding props={[ "Padding-Top", "padding_t", attributes.item_padding_t ]} />,
        <Padding props={[ "Padding-Left", "padding_l", attributes.item_padding_l ]} />,
        <Padding props={[ "Padding-Left", "padding_r", attributes.item_padding_r ]} />,
        <Padding props={[ "Padding-Bottom", "padding_b", attributes.item_padding_b ]} />
    ];

    return (
        <>
           <PanelMargin items={margins} /> 
           <PanelPadding items={padings}/>
        </>
    );
}




