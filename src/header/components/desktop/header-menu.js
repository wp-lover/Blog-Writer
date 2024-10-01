import {useContext , useState  } from "@wordpress/element";
import { ContextAttributes  } from "../../functions/context-api";

export default function HeaderMenu({items}) {

    const [attributes , setAttributes] = useContext(ContextAttributes);

    return (
        <>
            
            <ul id="gsp-header-menu" class="header-menu">
                { 
                    items.map( function(e) {

                        const [hoverd , setHoverd] = useState(false);

                        const li_styles = {
                            background : hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color,
                            color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
                            marginTop : attributes.item_margin_t + "px",
                            marginLeft : attributes.item_margin_l + "px",
                            marginRight : attributes.item_margin_r + "px",
                            marginBottom : attributes.item_margin_b + "px",
                            paddingTop : attributes.item_padding_t + "px",
                            paddingLeft : attributes.item_padding_l + "px",
                            paddingRight : attributes.item_padding_r+ "px",
                            paddingBottom : attributes.item_padding_b + "px",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            borderBottomLeftRadius: attributes.item_margin_b  ? "8px" : "0px",
                            borderBottomRightRadius: attributes.item_margin_b ? "8px" : "0px",
                            listStyle:"none"
                        }; 

                        var link = e[0]['link']; var id = e[0]['ID'];
                        var name = e[0]['name'];
                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        const  for_on_click = (e) => {

                            let item = e.view.document.getElementById(ID);

                            gsp_header_sub_menu(item , attributes.sub_menu_margin_t);

                        
                        }   


                    if (e[0]['has_child']) {
                        return <li id={ID} className={classes + " item-parent"} style={li_styles} onClick={ for_on_click }  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{
                                    color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,
                                    textDecoration:"none"
                                    }}>
                                    {name}
                                    </a>
                                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path id="path-id-128" d="M6 9l6 6 6-6" fill={hoverd ? attributes.item_text_hover_color : attributes.item_text_color}></path>
                                    </svg>    
                                    <SubMenu item={ e } styles={li_styles} />
                            </li>
                    }

                    return <li id={ID} className={classes} style={li_styles}  onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
                            <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{color: hoverd ? attributes.item_text_hover_color : attributes.item_text_color,textDecoration:"none"}}>
                                {name}
                            </a>
                        </li>
                    }) 
                }
            </ul>
        </>
    );
}



function SubMenu({item , styles }){

    const [attributes , setAttributes] = useContext(ContextAttributes);


    return (
        <ul className="sub-menu" style={{marginTop:attributes.sub_menu_margin_t}} >
            {
                item.map( function (e , i) {

                    const [hoverd , setHoverd] = useState(false);

                    const itemStyles = {
                         background:  hoverd ? attributes.item_bg_hover_color : attributes.item_bg_color,
                         marginBottom:attributes.child_item_margin_b,
                         paddingLeft:styles.paddingLeft,
                         paddingRight:styles.paddingRight,
                         paddingTop:styles.paddingTop,
                         paddingBottom:styles.paddingBottom,
                         borderRadius: "10px",
                         listStyle:"none"
                     };
                 
                    if (i != 0) {
                        var link = e[0]['link'] ? e[0]['link'] : '';
                        var id = e[0]['ID'] ? e[0]['ID'] : '';
                        var name = e[0]['name'] ? e[0]['name'] : '';

                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        return (
                            <li id={ID} className={classes} style={itemStyles} onMouseEnter={ () => setHoverd(true) } onMouseLeave={ () => setHoverd(false) }>
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
        
        // controll_dropdown_icon( i , item.getAttribute( 'color' ) , false );

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

        
        // controll_dropdown_icon( i , item.getAttribute( 'hover_color' ) , true );
    }     
}

function controll_dropdown_icon(item , fillColor , isOpen )
{
    let path = item.getElementById( "path-id-" + i );


    if (isOpen) {
        path.setAttribute( "d" , "M6 15l6-6 6 6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }else{
        path.setAttribute( "d" , "M6 9l6 6 6-6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }
     
}




