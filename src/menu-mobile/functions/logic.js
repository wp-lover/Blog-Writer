export class GspMenuMobile {
    
    constructor () {
        this.gspSidebarContainer = document.getElementById('gsp-sidebar-container');

        this.gspSidebarCloser = document.getElementById('gsp-sidebar-closer');

        this.gspSidebarOpener = document.getElementById('gsp-sidebar-opener');

        this.body = document.querySelector('body');

        this.wpAdminBar = document.getElementById("wpadminbar");

        // close & open sidebar
        if (this.gspSidebarContainer) {
            
            // close the sidebar menu
            if (this.gspSidebarCloser) {
                this.gspSidebarCloser.onclick =  (e) => {
                    this.gsp_sidebar_container_control();
                    }
            }

            // open the sidebar menu
            if (this.gspSidebarOpener) {
                this.gspSidebarOpener.onclick = () => {
                    this.gsp_sidebar_container_control();
                }   
            }
            
        }

        
        this.setWPadminBar();
        

        this.hangle_onclick_for_submenu();

        window.addEventListener('resize' , () => {
            this.windowResizeEvent();
        });
    } // constructor ending

    windowResizeEvent() {
        this.setWPadminBar();
    }

    setWPadminBar(){
        setTimeout( () => {
            if (this.wpAdminBar) {
                
                this.gspSidebarContainer.style.top = this.wpAdminBar.offsetHeight + 'px';
                
            }
        } , 500);
    }

    gsp_sidebar_container_control()
    {

        // if sidebar-menu hidden
       if (this.gspSidebarContainer.style.left != '0px') {

            this.menuContainerShow();
       } else {

            
            if (this.gspSidebarContainer.style.display == 'none') {
                // this is initial loaded time and by default menu invisiable
                // so make menu visiable
                this.menuContainerShow();
    
            } else {
                // gspSidebarContainer.style.left = 0px and display flex
                // that means now menu visiable
                // so make menu hide
                this.menuContainerHide();
            }
       }

    }

    menuContainerHide(){

        if ( this.gspSidebarContainer.style.left == '0px' ) {
            const width = this.body.offsetWidth + 100;
            this.gspSidebarContainer.style.left = '-'+width+'px';  
        }
    }

    menuContainerShow(){

        if (this.gspSidebarContainer.style.display == 'none' || this.gspSidebarContainer.style.display == '') {

            this.gspSidebarContainer.style.display = 'flex';

            setTimeout( () => {
                this.gspSidebarContainer.style.left = "0px";
            } , 50 );

        }else{
            this.gspSidebarContainer.style.left = "0px";
        }
    }

    hangle_onclick_for_submenu(){
        
        let items = this.gspSidebarContainer.getElementsByClassName( 'item-parent' );
        
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            
            element.onclick = () => {
                this.sidebar_sub_menu(element);
            }
        }
    }
  

    /**
     * 
     * @param i [is menu-item id number] 
     */
    sidebar_sub_menu(item){ 
        
      
        var child = item.getElementsByClassName( 'sub-menu' );

        // this the first time if display property = none value
        if ( child[0].style.display != 'block') {

            child[0].style.display = 'block';

            setTimeout( function(){
                child[0].style.left = '0px';
            } , 100 );

            this.controll_dropdown_icon( item , true );

        } else {
            child[0].style.left = '-70%';

            setTimeout( function(){
                child[0].style.display = 'none';
            } , 600 );

            this.controll_dropdown_icon( item , false );
        } 
    }

    controll_dropdown_icon(item , isOpen )
    {
        let path = item.getElementsByTagName('path');


        if (isOpen) {
            path[0].setAttribute( "d" , "M6 15l6-6 6 6" ); 
        }else{
            path[0].setAttribute( "d" , "M6 9l6 6 6-6" ); 
        }
        
    }

}


document.addEventListener( 'DOMContentLoaded' , function () {

    new GspMenuMobile();

} );

