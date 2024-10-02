class GspHeaderMenuController
{
    constructor()
    {
        this.header = document.getElementById( 'gsp-header-container' );

        // main ul id
        this.headerMenu = document.getElementById( 'gsp-header-menu' );

        if(!this.headerMenu){
            return;
        }

        this.container_justify_content();
        this.container_item_alignment();
        this.container_bg_color();
        
        // menu
        this.header_menu_set_position();
        // item styles
        if (this.headerMenu) {

            for (let i = 0; i < this.headerMenu.children.length; i++) {
            
                this.item_bg_color( i );
                this.item_hover_bg_color( i );
                this.item_color( i);
                this.item_hover_color(i);
                this.item_px(i)
                this.item_py(i);
                this.item_mx(i)
                this.item_my(i);
            }
        }
        // this.run_console();
    }

    run_console()
    {
        console.log( this.headerMenu.children );
        console.log( this.headerMenu.children.length );
        
    }

    container_justify_content()
    {
        if ( this.header && this.header.hasAttribute( 'justify_content' ) ) {
            this.header.style.justifyContent = this.header.getAttribute( 'justify_content' );
        }
    }

    container_bg_color()
    {
        if (this.header && this.header.hasAttribute( 'bg_color' ) ) {
            this.header.style.backgroundColor = this.header.getAttribute( 'bg_color' );
        }
    }

    container_item_alignment()
    {
        if (this.header && this.header.hasAttribute( 'align_items' ) ) {
            this.header.style.alignItems = this.header.getAttribute( 'align_items' );
        }
    }

    header_menu_set_position()
    {
        var positioinName = '';
        var value = '0px';
        if (this.headerMenu && this.headerMenu.hasAttribute( 'position_name' )) {
            positioinName = this.headerMenu.getAttribute( 'position_name' );
        }else{
            return;
        }

        if (this.headerMenu && this.headerMenu.hasAttribute( 'position_value' )) {
            value = this.headerMenu.getAttribute( 'position_value' );
        }else{
            return;
        }

        switch (positioinName) {
            case 'top':
                this.headerMenu.style.top = value;
                break;
            case 'bottom':
                this.headerMenu.style.bottom = value;
                break;
            case 'left':
                this.headerMenu.style.left = value;
                break; 
            case 'right':
            this.headerMenu.style.right = value;
            break;    
                default:
                break;
        }

    }

    item_bg_color( i = 0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if (this.headerMenu && items[i].hasAttribute( "bg_color" ) ) {
            items[i].style.backgroundColor = items[i].getAttribute( "bg_color" );
           }
    }

    item_hover_bg_color(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;

        // Set background color on hover
        items[i].addEventListener('mouseover', function() {
                        
            if ( items[i].hasAttribute( "bg_hover_color" ) ) {
                items[i].style.backgroundColor = items[i].getAttribute( "bg_hover_color" );
            }

        });

        items[i].addEventListener('mouseout', function() {
            
            if ( items[i].hasAttribute( "bg_color" ) ) {
                items[i].style.backgroundColor = items[i].getAttribute( "bg_color" );
            }

        });

    }

    item_color(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if ( this.headerMenu && items[i].hasAttribute( "color" ) ) {
            items[i].style.color = items[i].getAttribute( "color" );
        }

    }

    item_hover_color(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        // Set background color on hover
        items[i].addEventListener('mouseover', function() {
                
            if ( items[i].hasAttribute( "hover_color" ) ) {
                items[i].style.color = items[i].getAttribute( "hover_color" );
            }

        });

        items[i].addEventListener('mouseout', function() {
            
            if ( items[i].hasAttribute( "color" ) ) {
                items[i].style.color = items[i].getAttribute( "color" );
            }

        });

    }

    item_px(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if ( items[i].hasAttribute( "px" ) ) {
            items[i].style.paddingLeft = items[i].getAttribute( "px" );
            items[i].style.paddingRight = items[i].getAttribute( "px" );
        }
    }

    item_py(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if ( items[i].hasAttribute( "py" ) ) {
            items[i].style.paddingTop = items[i].getAttribute( "py" );
            items[i].style.paddingBottom = items[i].getAttribute( "py" );
        }
    }

    item_mx(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if ( items[i].hasAttribute( "mx" ) ) {
            items[i].style.marginLeft = items[i].getAttribute( "mx" );
            items[i].style.marginRight = items[i].getAttribute( "mx" );
        }
    }

    item_my(i=0)
    {
        if( ! this.headerMenu ){
            return;
        }

        var items = this.headerMenu.children;
       
        if ( items[i].hasAttribute( "my" ) ) {
            items[i].style.marginTop = items[i].getAttribute( "my" );
            items[i].style.marginBottom = items[i].getAttribute( "my" );
        }
    }
}    

let gspHeaderContainer = null;
document.addEventListener("DOMContentLoaded", () => gspHeaderContainer = new GspHeaderMenuController());

