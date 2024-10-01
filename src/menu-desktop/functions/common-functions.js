/**
 * @param i [is menu-item id number] 
 * @param fillColor icon color
 * @param isOpen if sub-mneu open then it should true
 */
function controll_dropdown_icon(i , fillColor , isOpen )
{
    let path = document.getElementById( "path-id-" + i );

    console.log(path);

    if (isOpen) {
        path.setAttribute( "d" , "M6 15l6-6 6 6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }else{
        path.setAttribute( "d" , "M6 9l6 6 6-6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }
     
}

/**
 * 
 * @param i [is menu-item id number] 
 */
export function gsp_header_sub_menu(i){
    
    var item = document.getElementById('nav-item-' + i);

    console.log(item);

    var child = item.getElementsByClassName( 'sub-menu' );

    // if not container class named 'hidden'
    if (!child[0].classList.contains('hidden') ) {

        child[0].style.opacity = 0;

        setTimeout( function(){
            child[0].classList.remove( 'd-block' );
            child[0].classList.add( 'hidden' );
            
        } , 450 );  
        
        controll_dropdown_icon( i , item.getAttribute( 'color' ) , false );

    }else{
        
        child[0].classList.remove( 'hidden' );
        child[0].classList.add( 'd-block' );
        setTimeout( function(){
            child[0].style.opacity = 1;
            
        } , 100 );

        if (child[0].style.marginTop != child[0].getAttribute("mt")) {
            child[0].style.marginTop = child[0].getAttribute('mt');
        }
        
        controll_dropdown_icon( i , item.getAttribute( 'hover_color' ) , true );
    }     
}

/**
 * 
 * @param i [is menu-item id number] 
 */
function gsp_sidebar_sub_menu(i){
    
    var item = document.getElementById('nav-item-' + i);

    var child = item.getElementsByClassName( 'sub-menu' );

    if (child[0].style.left == '0px') {

        child[0].style.left = '-600px';

        setTimeout( function(){
            child[0].style.display = 'none';
            
        } , 550 );  
        
        controll_dropdown_icon( i , item.getAttribute( 'color' ) , false );

    }else{
        
        child[0].style.display = 'block';
        setTimeout( function(){
            child[0].style.left = '0px';
            
        } , 100 );   
        
        controll_dropdown_icon( i , item.getAttribute( 'hover_color' ) , true );
    }     
}

