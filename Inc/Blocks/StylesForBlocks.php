<?php

namespace WpLover\BlogWriter\Inc\Blocks;


class StylesForBlocks 
{
    private static $instance = null;

    public $headerAttributes = [];

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
    }

    function headerStyles()
    {
        if ( ! empty( $this->headerAttributes ) ) {
            
            ?><style> 
#gsp-header-menu{
    margin-bottom: <?php print_value($this->headerAttributes['menu_container_margin_y'])  ?>px;
}
.nav-item{
    min-width: <?php print_value($this->headerAttributes['item_min_width'])  ?>px;
    background-color: <?php print_value($this->headerAttributes['item_bg_color'])  ?>;
    margin-top: <?php print_value( $this->headerAttributes['item_margin_t'] ); ?>px;
    margin-left: <?php print_value( $this->headerAttributes['item_margin_l'] ); ?>px;
    margin-right: <?php print_value( $this->headerAttributes['item_margin_r'] ); ?>px;
    margin-bottom: <?php print_value( $this->headerAttributes['item_margin_b'] ); ?>px;
    padding: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ) ? '8px' : '0px'  ?>;
    border-bottom-right-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ) ? '8px' : '0px'  ?>;
}
.item-parent{
    cursor: pointer;
}
.item-parent ul li{
    margin-top: 5px;
}

.nav-item :hover {
    background-color: <?php print_value($this->headerAttributes['item_bg_hover_color'])  ?>;
    color: <?php print_value($this->headerAttributes['item_text_hover_color'])  ?>;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ) ? '8px' : '0px'  ?>;
    border-bottom-right-radius: <?php echo ( $this->headerAttributes['item_margin_b'] ) ? '8px' : '0px'  ?>;
}

.nav-item a {
    padding-top: <?php print_value( $this->headerAttributes['item_padding_t'] ); ?>px;
    padding-left: <?php print_value( $this->headerAttributes['item_padding_l'] ); ?>px;
    padding-bottom: <?php print_value( $this->headerAttributes['item_padding_b'] ); ?>px;
    padding-right: <?php print_value( $this->headerAttributes['item_padding_r'] ); ?>px;
}
.nav-item svg path {
    fill: <?php print_value( $this->headerAttributes['item_text_color'] ); ?>;
}

.nav-item a {
    color: <?php print_value( $this->headerAttributes['item_text_color'] );?>;
    text-decoration: none; border: none;
    margin: 0;
}

.item-parent .sub-menu{
    background-color: transparent;
    margin-top: <?php print_value( $this->headerAttributes['sub_menu_margin_t']  );  ?>px;
    
}
.item-parent .sub-menu li {
    margin-bottom: <?php print_value( $this->headerAttributes['child_item_margin_b']  );  ?>px;
    border-radius: 10px;
}
.item-parent .sub-menu li :hover{
    border-radius: 10px;
}



</style><?php

        }
    }

    function headerScript()
    { 
        ?>
        <script>
            function gsp_header_sub_menu(itemId , marginTop){

            var item = document.getElementById( 'nav-item-' + itemId )
    
            var child = item.getElementsByClassName( 'sub-menu' );

            // if not container class named 'hidden'
            if (!child[0].classList.contains('hidden') ) {

                child[0].style.opacity = 0;
                setTimeout( function(){
                    child[0].classList.remove( 'd-block' );
                    child[0].classList.add( 'hidden' );
                    
                } , 450 );  
                
                controll_dropdown_icon( itemId , "<?php print_value( $this->headerAttributes['item_text_color'] );?>", false );

            }else{
                


                child[0].classList.remove( 'hidden' );
                child[0].classList.add( 'd-block' );

                
                setTimeout( function(){
                    child[0].style.opacity = 1;
                } , 100 );

                
                controll_dropdown_icon( itemId , "<?php print_value( $this->headerAttributes['item_text_color'] );?>" , true );
            }     
}

function controll_dropdown_icon(itemId , fillColor , isOpen )
{
    let path = document.getElementById( "path-id-" + itemId );


    if (isOpen) {
        path.setAttribute( "d" , "M6 15l6-6 6 6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }else{
        path.setAttribute( "d" , "M6 9l6 6 6-6" ); 
        path.setAttribute( "fill" , fillColor ); 
    }
     
}
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