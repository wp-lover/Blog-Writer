<?php

namespace WpLover\BlogWriter\Inc\Blocks;


class StylesForBlocks 
{
    private static $instance = null;

    public $headerAttributes = [];

    public $sidebarAttributes = [];

    private function __construct()
    {
        add_action( 'wp_head' , [ $this, 'styles' ] );
        add_action( 'wp_footer' , [ $this, 'scripts' ] );
    }

    static public function get_instance() : StylesForBlocks
    {
        if ( self::$instance == null) {
            self::$instance = new StylesForBlocks();
        }

        return self::$instance;
    }

    function scripts( )
    {
       $this->headerScript();
    }

    function styles( )
    {
       $this->headerStyles();

       $this->sidebarMenuStype();
    }

    function sidebarMenuStype()
    {   
        if ( empty( $this->sidebarAttributes )  ) {

            return;
        }

        $is_hidden_desktop = false;
        
        if ( isset( $this->sidebarAttributes['is_hidden_desktop'] ) && $this->sidebarAttributes['is_hidden_desktop'] ) {
            $is_hidden_desktop = true;
        }
        
        ?><style>
            @media ( min-width : 767px ) {
                #gsp-sidebar-menu-icon {
                    display: <?php echo  $is_hidden_desktop == true ? 'none' : 'block' ?>;
                }
            }
            #gsp-sidebar-container{
                margin-top: <?php print_value($this->sidebarAttributes['container_margin_t'])  ?>px;
            }
            #gsp-sidebar-inside{
                background-color: <?php print_value($this->sidebarAttributes['container_bg_color'] ?? '' )  ?>;
            }
            #gsp-sidebar-container li{
                background-color: <?php print_value($this->sidebarAttributes['item_bg_color'] ?? '' )  ?>;
            }
            #gsp-sidebar-container li:hover {
                background-color: <?php print_value($this->sidebarAttributes['item_bg_hover_color'] ?? '' )  ?>;
            }
            #gsp-sidebar-container li a {
                color: <?php print_value($this->sidebarAttributes['item_text_color'] ?? '' )  ?>;
            }
            #gsp-sidebar-container li:hover a {
                color: <?php print_value($this->sidebarAttributes['item_text_hover_color'] ?? '' )  ?>;
            }
            #gsp-sidebar-container li a path {
                fill: <?php print_value($this->sidebarAttributes['item_text_color'] ?? '' )  ?>;
            }
        </style><?php
    }

    function headerStyles()
    {
        if ( ! empty( $this->headerAttributes ) ) {
            
            ?><style> 
#gsp-header-menu{
    margin-bottom: <?php print_value($this->headerAttributes['menu_container_margin_y'] ?? 0 )  ?>px;
}
#gsp-header-menu .nav-item{
    min-width: <?php print_value($this->headerAttributes['item_min_width'] ?? 80 )  ?>px;
    background-color: <?php print_value($this->headerAttributes['item_bg_color'] ?? '' )  ?>;
    margin-top: <?php print_value( $this->headerAttributes['item_margin_t'] ?? 0 ); ?>px;
    margin-left: <?php print_value( $this->headerAttributes['item_margin_l'] ?? 0 ); ?>px;
    margin-right: <?php print_value( $this->headerAttributes['item_margin_r'] ?? 0 ); ?>px;
    margin-bottom: <?php print_value( $this->headerAttributes['item_margin_b'] ?? 0 ); ?>px;
    padding: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ?? 0 ) ? '8px' : '0px'  ?>;
    border-bottom-right-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ?? 0 ) ? '8px' : '0px'  ?>;
}
#gsp-header-menu .item-parent{
    cursor: pointer;
}
#gsp-header-menu .item-parent ul li{
    margin-top: 5px;
}

#gsp-header-menu .nav-item:hover {
    background-color: <?php print_value($this->headerAttributes['item_bg_hover_color'] ?? '' )  ?>;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0px;
    border-bottom-left-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ?? 0 ) ? '8px' : '0px'  ?>;
    border-bottom-right-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ?? 0 ) ? '8px' : '0px'  ?>;
}

#gsp-header-menu .nav-item:hover a {
    display: flex;
    color: <?php print_value($this->headerAttributes['item_text_hover_color'] ?? '' )  ?>;
    
}

#gsp-header-menu .nav-item a {
    display: flex;
    color: <?php print_value( $this->headerAttributes['item_text_color'] ?? '' );?>;
    text-decoration: none;
    border: none;
    padding-top: <?php print_value( $this->headerAttributes['item_padding_t'] ?? 0 ); ?>px;
    padding-left: <?php print_value( $this->headerAttributes['item_padding_l'] ?? 0 ); ?>px;
    padding-bottom: <?php print_value( $this->headerAttributes['item_padding_b'] ?? 0 ); ?>px;
    padding-right: <?php print_value( $this->headerAttributes['item_padding_r'] ?? 0 ); ?>px;
    margin: 0px;
}
#gsp-header-menu .nav-item svg path {
    fill: <?php print_value( $this->headerAttributes['item_text_color'] ?? 'black' ); ?>;
}


#gsp-header-menu .item-parent .sub-menu{
    background-color: transparent;
    margin-top: <?php print_value( $this->headerAttributes['sub_menu_margin_t'] ?? 0  );  ?>px;
    z-index: 800;
    
}
#gsp-header-menu .item-parent .sub-menu li {
    margin-bottom: <?php print_value( $this->headerAttributes['child_item_margin_b'] ?? ''  );  ?>px;
    border-radius: 10px;
}
#gsp-header-menu .item-parent .sub-menu li :hover{
    border-radius: 10px;
}



</style><?php

        }
    }

    function headerScript()
    { 
        ?>
        <script>
            document.addEventListener( 'DOMContentLoaded' , function () {

            const gspHeaderMenu = document.getElementById('gsp-header-menu');

            var gspHeaderItemParents  = gspHeaderMenu.getElementsByClassName('item-parent');

            document.addEventListener( 'click', function (e) {

                
                for (let i = 0; i < gspHeaderItemParents.length; i++) {

                    const element = gspHeaderItemParents[i];

                    if (e.target.tagName == 'A') {
                        const li = e.target.parentNode;

                        if (li == element) {
                            gsp_header_sub_menu(element);
                        } 
                    }

                    if ( e.target.tagName == 'SPAN') {
                        const aTag = e.target.parentNode;

                        if (aTag.parentNode == element) {

                            gsp_header_sub_menu(element);
                        }
                    }
                }
            });
    
    // console.log(gspHeaderItemParents);

  function gsp_header_sub_menu( item ){

         var child = item.getElementsByClassName( 'sub-menu' );

         // if not container class named 'hidden'
         if (!child[0].classList.contains('hidden') ) {

             child[0].style.opacity = 0;
             setTimeout( function(){
                 child[0].classList.remove( 'd-block' );
                 child[0].classList.add( 'hidden' );
                 
             } , 450 );  
             
             controll_dropdown_icon( item , "<?php print_value( $this->headerAttributes['item_text_color'] ?? '' );?>", false );

         }else{
             


             child[0].classList.remove( 'hidden' );
             child[0].classList.add( 'd-block' );

             
             setTimeout( function(){
                 child[0].style.opacity = 1;
             } , 100 );

             
             controll_dropdown_icon( item , "<?php print_value( $this->headerAttributes['item_text_color'] ?? '' );?>" , true );
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
});
        </script>
        <?php

    }

}


function print_value( $value )
{
    $val = null;

    if ( is_int( $value ) ) {
        $val = $value;
    }else{
        $val = esc_attr( $value );
        $val = esc_html( $value );
    }

    echo $val ?? '';
}
