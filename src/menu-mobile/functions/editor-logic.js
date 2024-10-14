import references from "./references";

export default class MenuMobileLogic {


    
  

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

