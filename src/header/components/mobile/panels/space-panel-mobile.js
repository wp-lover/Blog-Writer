import { ContextAttributes } from "../../../functions/context-api";

import Margin from "../../common/margin";
import Padding from "../../common/padding";
import PanelMargin from "../../common/panel-margin";
import PanelPadding from "../../common/panel-padding";



export default function SpacePanelMobile() {

    const [attributes , setAttributes] = useContext(ContextAttributes);

    const margins = [
        <Margin title="Margin-Left" key="margin_l" initialValue={attributes.sidebar_item_margin_l} />,
        <Margin title="Margin-Right" key="margin_r" initialValue={attributes.sidebar_item_margin_r} />,
        <Margin title="Margin-Bottom" key="margin_b" initialValue={attributes.sidebar_item_margin_b} />
    ];

    const padings = [
        <Padding title="Padding-Left" key="padding_l" initialValue={attributes.sidebar_item_padding_l} />,
        <Margin title="Padding-Right" key="padding_r" initialValue={attributes.sidebar_item_padding_r} />,
        <Margin title="Padding-Bottom" key="paddingn_b" initialValue={attributes.sidebar_item_padding_b} />
    ];

    return (
        <>
           <PanelMargin items={margins} /> 
           <PanelPadding items={padings}/>
        </>
    );
}




