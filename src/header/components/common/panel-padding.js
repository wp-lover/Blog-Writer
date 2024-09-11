import { Panel ,PanelBody  } from "@wordpress/components"

export default function PanelMargin ( {items = [] , isOpen = false} ) 
{

    return (
        <Panel>
            <PanelBody title="Padding" initialOpen={isOpen}>
                {items.map ( e => e )}
            </PanelBody>
        </Panel>
    );
}