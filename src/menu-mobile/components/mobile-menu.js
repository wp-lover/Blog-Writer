import {useContext , useState , useRef  } from "@wordpress/element";

// import references from "../functions/references";
import MenuMobileLogic from "../functions/editor-logic";



export default function MobileMenu({items}) {



    const menuContainer = useRef(null)

    const  menuCloserOnclick = () => {
       
        gsp_sidebar_container_control( menuContainer.current);

       } // onClick ending

       const meneIconStyles = {
        width : "50px",
        height : "50px",
        top: "20px",
        right: "20px",
        zIndex : 99,
       };
       

    return (
        <>
        <div style={meneIconStyles}>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={menuCloserOnclick} id="gsp-sidebar-opener" width="35" height="35" viewBox="0 0 100 80" fill="black">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
            </div>
           <div ref={menuContainer} id="gsp-sidebar-container" style={{
                zIndex: 100,
                left : "0px"
            }}>
            <div>
            <ul id="gsp-mobile-menu" className="mobile-menu" >
                { 
                    items.map( function(e) {

                        const [hoverd , setHoverd] = useState(false);

                       
                        var link = e[0]['link']; var id = e[0]['ID'];
                        var name = e[0]['name'];
                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        const  for_on_click = (e) => {

                            // let item = e.view.document.getElementById(ID);

                            // gsp_header_sub_menu(item , attributes.sub_menu_margin_t);

                        
                        }   


                    if (e[0]['has_child']) {
                        return <li id={ID} className={classes + " item-parent"} onClick={ for_on_click }  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page" >
                                    {name}
                                    </a>
                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path id="path-id-128" d="M6 9l6 6 6-6"></path>
                                    </svg>    
                                    {/* <SubMenu item={ e } /> */}
                            </li>
                    }

                    return <li id={ID} className={classes}  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                            <a itemprop="url" href={link} class="nav-link" aria-current="page">
                                {name}
                            </a>
                        </li>
                    }) 
                }
            </ul>
            </div>
            <div id="gsp-sidebar-closer" onClick={menuCloserOnclick}>
                <button id="sidebar_closer_btn">X</button>
            </div>
            </div>
        </>
    );
}

function gsp_sidebar_container_control( element)
{
    let display = '';

    if (element.style.left == '0px' ) {
        element.style.left = "-100vw";
        display = 'none';
    }else{
        element.style.left = "0px";
        display = 'flex';
    }

    setTimeout( () => {
        element.style.display = display;
    } , 500 );

}

function SubMenu({item  }){

    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <ul className="sub-menu hidden" style={{marginTop:attributes.sub_menu_margin_t+35+"px"}} >
            {
                item.map( function (e , i) {

                    const [hoverd , setHoverd] = useState(false);

                    // const itemStyles = {
                    //     minWidth: styles.minWidth,
                    //      background:  hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color,
                    //      marginBottom:attributes.child_item_margin_b,
                    //      paddingLeft:styles.paddingLeft,
                    //      paddingRight:styles.paddingRight,
                    //      paddingTop:styles.paddingTop,
                    //      paddingBottom:styles.paddingBottom,
                    //      borderRadius: "10px",
                    //      listStyle:"none"
                    //  };
                 
                    if (i != 0) {
                        var link = e[0]['link'] ? e[0]['link'] : '';
                        var id = e[0]['ID'] ? e[0]['ID'] : '';
                        var name = e[0]['name'] ? e[0]['name'] : '';

                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        return (
                            <li id={ID} className={classes}  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{
                                               color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
                                                textDecoration:"none"
                                                }}>
                                    {name}
                                </a>
                            </li>
                        );
                    } 
                        
                    }
                )
            }
            
        </ul>
    );
}


let styles = null;

function gsp_header_sub_menu(item , marginTop){
    
    var child = item.getElementsByClassName( 'sub-menu' );

    // if not container class named 'hidden'
    if (!child[0].classList.contains('hidden') ) {

        child[0].style.opacity = 0;
        setTimeout( function(){
            child[0].classList.remove( 'd-block' );
            child[0].classList.add( 'hidden' );
            
        } , 450 );  
        
        controll_dropdown_icon( item , item.getAttribute( 'color' ) , false );

    }else{
        


        child[0].classList.remove( 'hidden' );
        child[0].classList.add( 'd-block' );

        if (styles == null) {
            styles = child[0].style;
        }

        
        setTimeout( function(){
            child[0].style.opacity = 1;
            child[0].style.marginTop = styles.marginTop ;
            
        } , 100 );

        
        controll_dropdown_icon( item , item.getAttribute( 'hover_color' ) , true );
    }     
}

function controll_dropdown_icon(item , fillColor , isOpen )
{
    let path = item.getElementsByTagName('path')[0];


    if (isOpen) {
        path.setAttribute( "d" , "M6 15l6-6 6 6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }else{
        path.setAttribute( "d" , "M6 9l6 6 6-6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }
     
}


