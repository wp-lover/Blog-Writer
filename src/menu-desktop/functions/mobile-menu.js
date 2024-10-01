class GspSidebarMenuController
{
    constructor()
    {   
        // this is sidebar menu container
        this.menuContainer = document.getElementById( 'gsp-sidebar-menu-container' );
        
        // this is the main [ul] tag for menu
        this.sidebarMenu = document.getElementById( 'gsp-sidebar-manu' );

        // sidebar menu closer container
        this.menuCloser = document.getElementById( 'gsp-sidebar-menu-closer' );

        // sidebar menu openner button
        this.menuOpenner = document.getElementById( 'gsp-sidebar-menu-openner' );

        this.width = document.documentElement.clientWidth;

        if (this.menuCloser ) {
            this.menuCloser.onclick = () => this.close_menu();

            this.menuOpenner.onclick = () =>  this.open_menu();

            // item styles
            for (let i = 0; i < this.sidebarMenu.children.length; i++) {
                
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
    }

    open_menu()
    {
        this.menuContainer.classList.remove('hidden');
        this.menuContainer.classList.add('flex');
        setTimeout( () => this.menuContainer.style.left = '0px', 100 );
    }

    close_menu() 
    {
        this.menuContainer.style.left = '-'+this.width+'px';
        setTimeout( function () {
            this.menuContainer.classList.remove('flex');
            this.menuContainer.classList.add('hidden');
        }.bind(this) , 500 ); 
    }


    item_bg_color( i = 0)
    {
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "bg_color" ) ) {
            items[i].style.backgroundColor = items[i].getAttribute( "bg_color" );
           }
    }

    item_hover_bg_color(i=0)
    {
        var items = this.sidebarMenu.children;
       
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
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "color" ) ) {
            items[i].style.color = items[i].getAttribute( "color" );
        }

    }

    item_hover_color(i=0)
    {
        var items = this.sidebarMenu.children;
       
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
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "px" ) ) {
            items[i].style.paddingLeft = items[i].getAttribute( "px" );
            items[i].style.paddingRight = items[i].getAttribute( "px" );
        }
    }

    item_py(i=0)
    {
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "py" ) ) {
            items[i].style.paddingTop = items[i].getAttribute( "py" );
            items[i].style.paddingBottom = items[i].getAttribute( "py" );
        }
    }

    item_mx(i=0)
    {
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "mx" ) ) {
            items[i].style.marginLeft = items[i].getAttribute( "mx" );
            items[i].style.marginRight = items[i].getAttribute( "mx" );
        }
    }

    item_my(i=0)
    {
        var items = this.sidebarMenu.children;
       
        if ( items[i].hasAttribute( "my" ) ) {
            items[i].style.marginTop = items[i].getAttribute( "my" );
            items[i].style.marginBottom = items[i].getAttribute( "my" );
        }
    }

    


} // class ending

let gspSidebarMenuContainer = null;
document.addEventListener("DOMContentLoaded", () => gspSidebarMenuContainer = new GspSidebarMenuController());

