
import {useContext } from "@wordpress/element";
import { ContextAttributes } from "../../functions/context-api";


export default function HeaderMenu({items}) {

    const [attributes , setAttributes] = useContext(ContextAttributes);

    const li_styles = {
        mainWidth : '270px',
        background : attributes.item_bg_color,

        marginTop : attributes.item_margin_t + "px",
        marginLeft : attributes.item_margin_l + "px",
        marginRight : attributes.item_margin_r + "px",
        marginBottom : attributes.item_margin_b + "px",

        paddingTop : attributes.item_padding_t + "px",
        paddingLeft : attributes.item_padding_l + "px",
        paddingRight : attributes.item_padding_r+ "px",
        paddingBottom : attributes.item_padding_b + "px"
    }; 



    return (
        <>
            <header id="gsp-header-container" class="gsp-site-header md:flex md:items-end md:justify-between z-40 md:h-20 min-w-full py-0  px-4"
            style={{backgroundColor:attributes.header_bg}}
            >
                        <div class="gsp-site-name bg-slate-400 flex justify-between p-2">
                            <h1 class="gsp-site-name text-white text-xl">This is siteName</h1>
                            <span id="gsp-sidebar-menu-openner" class="md:hidden p-2 bg-black text-white fle">open</span>
                        </div>
                        <ul id="gsp-header-menu" class="header-menu hidden md:flex justify-start">
                            { 
                                items.map( function(e) {
                                    var link = e[0]['link']; var id = e[0]['ID'];
                                    var name = e[0]['name'];
                                    var ID = "nav-item-"+id;
                                    var classes = "nav-item-"+id+" nav-item";

                                    const  for_on_click = (e) => {

                                        let item = e.view.document.getElementById(ID);

                                        gsp_header_sub_menu(item , attributes.sub_menu_margin_t);

                                    
                                    }   


                                if (e[0]['has_child']) {
                                    return <li id={ID} className={classes + " item-parent"} style={li_styles} onClick={ for_on_click }>
                                            <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{color:attributes.item_text_color}}>
                                                {name}
                                                </a>
                                                <SubMenu item={ e } styles={li_styles} />
                                        </li>
                                }

                                return <li id={ID} className={classes} style={li_styles}>
                                        <a itemprop="url" href={link} class="nav-link" aria-current="page" style={{color:attributes.item_text_color}}>
                                            {name}
                                        </a>
                                    </li>
                                }) 
                            }
                                </ul>
                                <div class="hidden md:block ">
                                    <button class="p-2 bg-slate-500 text-white rounded-md">SIGN-IN</button>
                                </div>
                </header>
        </>
    );
}



function SubMenu({item , styles}){

    styles = {
        ...styles
    };


    return (
        <ul className="sub-menu hidden" >
            {
                item.map( function (e , i) {
                   
                    if (i != 0) {
                        var link = e[0]['link'] ? e[0]['link'] : '';
                        var id = e[0]['ID'] ? e[0]['ID'] : '';
                        var name = e[0]['name'] ? e[0]['name'] : '';

                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        return (
                            <li id={ID} className={classes} style={styles}>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page">
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