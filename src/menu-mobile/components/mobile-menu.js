import {useContext , useState , useRef   } from "@wordpress/element";
import { InnerBlocks } from '@wordpress/block-editor';
import { ContextAttributes } from "../functions/context-api";


export default function MobileMenu({items}) {

    const [attributes , setAttribute] = useContext(ContextAttributes);

    const menuContainer = useRef(null)

    const [hoverd , setHoverd] = useState(false);

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

       const liStyles = {
            backgroundColor : hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color,
       };

       const linkStyles = {
        color : hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
       }
       

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
                    left : "0px",
                    marginTop : attributes.container_margin_t + "px"
                }}>
                <div style={{
                    background : attributes.container_bg_color
                }}>
                    < InnerBlocks />
                    <ul id="gsp-mobile-menu" className="mobile-menu" >
                        { 
                        items.map( function(e) {

                            const [hoverd , setHoverd] = useState(false);

                        
                            var link = e[0]['link']; var id = e[0]['ID'];
                            var name = e[0]['name'];
                            var ID = "nav-item-"+id;
                            var classes = "nav-item-"+id+" nav-item";

                            const  for_on_click = (e) => {

                                let item = e.view.document.getElementById(ID);

                                sidebar_sub_menu( item );

                            }   


                        if (e[0]['has_child']) {
                            return <li id={ID} className={classes + " item-parent"} style={{
                                background : hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
                            }} onClick={ for_on_click }  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                                    <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{
                                         color : hoverd ? attributes.item_text_hover_color : attributes.item_text_color
                                    }} >
                                        {name}
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill={ hoverd ? attributes.item_text_hover_color : attributes.item_text_color} id="path-id-128" d="M6 9l6 6 6-6"></path>
                                        </svg> 
                                    </a>   
                                        <SubMenu item={ e } liStyles={liStyles}/>
                                </li>
                        }

                        return <li id={ID} className={classes} style={{
                            background : hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
                        }} onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{
                                    color : hoverd ? attributes.item_text_hover_color : attributes.item_text_color
                                }}>
                                    {name}
                                </a>
                            </li>
                        }) 
                    }
                </ul>
            </div>
            <div id="gsp-sidebar-closer" style={{
                opacity: ".5",
            }} onClick={menuCloserOnclick}>
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

function SubMenu({ item , liStyles }){

    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <ul className="sub-menu" style={{display : "none"}} >
            {
                item.map( function (e , i) {

                    const [hoverd , setHoverd] = useState(false);
                 
                    if (i != 0) {
                        var link = e[0]['link'] ? e[0]['link'] : '';
                        var id = e[0]['ID'] ? e[0]['ID'] : '';
                        var name = e[0]['name'] ? e[0]['name'] : '';

                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        return (
                            <li id={ID} className={classes} style={{
                                background : hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color
                            }}  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
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



function sidebar_sub_menu( item ){
    
    var subMenu = item.querySelector( '.sub-menu' );

    // if not container class named 'hidden'
    if ( subMenu.style.display != "block" ) {

        subMenu.style.display = "block";

        setTimeout( function(){
            subMenu.style.left = "0px";
            
        } , 100 );  
        
        controll_dropdown_icon( item , '' , true );
        
    }else{
       
        subMenu.style.left = "-70%";

        setTimeout( function(){
            subMenu.style.display = "none";
        } , 500 );

       
        controll_dropdown_icon( item , '' , false );
    }     
}

function controll_dropdown_icon(item , fillColor , isOpen )
{
    let path = item.querySelector('path');


    if (isOpen) {
        path.setAttribute( "d" , "M6 15l6-6 6 6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }else{
        path.setAttribute( "d" , "M6 9l6 6 6-6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }
     
}


