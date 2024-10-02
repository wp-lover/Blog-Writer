import {useContext} from '@wordpress/element'
import { ContextAttributes } from "../../functions/context-api";


export default function SidebarMenu({items}){

  const [attributes , setAttributes] = useContext(ContextAttributes);

  const li_styles = {
    mainWidth : '270px',
    background : attributes.sidebar_item_bg_color,
    color : attributes.sidebar_item_text_color,

    marginTop : attributes.sidebar_item_margin_t + "px",
    marginLeft : attributes.sidebar_item_margin_l + "px",
    marginRight : attributes.sidebar_item_margin_r + "px",
    marginBottom : attributes.sidebar_item_margin_b + "px",

    paddingTop : attributes.sidebar_item_padding_t + "px",
    paddingLeft : attributes.sidebar_item_padding_l + "px",
    paddingRight : attributes.sidebar_item_padding_r + "px",
    paddingBottom : attributes.sidebar_item_padding_b + "px"
}; 

 const styleContainer = {
    position:"absolute",
    left:"-380px",
    top:"0px",
    zIndex: 100,
    background: "green"
 };

    return (
        <div id="gsp-mobile-menu" style={styleContainer} class="">
                <ul  class="nav-primary-menu">

                { 
                    items.map( function(e) {
                        var link = e[0]['link']; var id = e[0]['ID'];
                        var name = e[0]['name'];
                        var ID = "nav-item-"+id;
                        var classes = "nav-item-"+id+" nav-item";

                        const  for_on_click = (e) => {

                            let item = e.view.document.getElementById(ID);
                            // gsp_header_sub_menu(item , states.sub_menu_margin_t);

                        
                        }   


                    if (e[0]['has_child']) {
                        return <li id={ID} className={classes + " item-parent"} style={li_styles} onClick={ for_on_click }>
                                <a itemprop="url" href={link} class="nav-link" aria-current="page">
                                    {name}
                                    </a>
                                    <SubMenu item={ e } styles={li_styles} />
                            </li>
                    }

                    return <li id={ID} className={classes} style={li_styles}>
                            <a itemprop="url" href={link} class="nav-link" aria-current="page">
                                {name}
                            </a>
                        </li>
                    }) 
                }
                    
                </ul>
            <div id="gsp-sidebar-menu-closer" style={{background:"red"}} class="">
                <div class="w-15 h-15 mt-2 text-center">
                    <span class="menu-icon">x</span>
                </div>
            </div>
      </div>
    );
     
}


function SubMenu({item , styles}){

    // const [attributes , setAttributes] = useContext(ContextAttributes);

  styles = {
      ...styles
  };


  return (
      <ul className="sub-menu hidden">
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