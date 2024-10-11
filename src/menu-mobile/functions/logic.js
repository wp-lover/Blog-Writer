document.addEventListener( 'DOMContentLoaded' , function () {

    new GspMenuMobile();

} );

export class GspMenuMobile {
    
    constructor () {
        this.gspSidebarContainer = document.getElementById('gsp-sidebar-container');

        this.gspSidebarCloser = document.getElementById('gsp-sidebar-closer');

        this.gspSidebarOpener = document.getElementById('gsp-sidebar-opener');

        this.body = document.querySelector('body');

        this.bodyWidth = this.body.offsetWidth;

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

        const wpAdminBar = document.getElementById("wpadminbar");

        setTimeout( () => {
            if (wpAdminBar) {
                
                this.gspSidebarContainer.style.top = wpAdminBar.offsetHeight + 'px';
                
            }
        } , 500);
    } // constructor ending

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
            const width = this.bodyWidth + 100;
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
  

    /**
     * 
     * @param i [is menu-item id number] 
     */
    gsp_sidebar_sub_menu(i){
        
        var item = document.getElementById('nav-item-' + i);

        var child = item.getElementsByClassName( 'sub-menu' );

        if (child[0].style.left == '0px') {

            child[0].style.left = '-600px';

            setTimeout( function(){
                child[0].style.display = 'none';
                
            } , 550 );  

        }else{
            
            child[0].style.display = 'block';
            setTimeout( function(){
                child[0].style.left = '0px';
                
            } , 100 );   
            
        }     
    }

}

