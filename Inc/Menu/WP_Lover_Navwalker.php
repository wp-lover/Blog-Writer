<?php

namespace WpLover\BlogWriter\Inc\Menu; 

class WP_Lover_Navwalker extends \Walker_Nav_menu
{
    public $styles;

    public $subMenu;

    public $childItemStyles;

    /**
     * @param array
     */
    function __construct( $itemStyles = [] , $subMenu = [] , $childItemStyles = [] )
    {
       
        $this->styles = $itemStyles;

        $this->subMenu = $subMenu;

        $this->childItemStyles = $childItemStyles;
    }
 

    function start_lvl(&$output, $depth = 0, $args = \null)
    {
        $indent = str_repeat( "\t", $depth );

        // $submenu = ( $depth > 0 ) ? " sub-menu" : "";
        $output .= "\n$indent<ul class=\"sub-menu hidden\""  . $this->style_lvl() . ">";
        

        //
    }


    function start_el(&$output, $item, $depth = 0, $args = \null, $current_object_id = 0)
    {
        $indent = ( $depth ) ? str_repeat( "\t", $depth) : '';
        
        $li_attributes = ( $args->walker->has_children ) ? 'onclick="gsp_header_sub_menu('.$item->ID.')" ' : '';

        $li_attributes .= ( $depth && $args->walker->has_children ) ? $this->style_child_ele() : $this->itemStyles();

        $class_names = $value = '';

        // do not add wp defualt menu classes
        $classes = empty( $item->classes ) ? array() : array();

        $classes[] = ( $args->walker->has_children ) ? 'item-parent' : '';
        $classes[] = ( $item->current || $item->current_item_anchestor ) ? 'active' : '';
        $classes[] = 'nav-item nav-item-' . $item->ID;

        if ( $depth && $args->walker->has_children ) {
            $classes[] = "sub-menu";
        }

        $class_names = join( ' ' , apply_filters( 'nav_menu_css_class' , array_filter( $classes ) , $item, $args ) );
        $class_names = 'class="' . esc_attr( $class_names ) . '"';

        $id = apply_filters( 'nav_menu_item_id' , 'nav-item-' . $item->ID , $item , $args );
        $id = strlen( $id ) ? ' id="' . esc_attr( $id ) . '"' : '';


        $output .= $indent . '<li ' . $id . $value . $class_names . $li_attributes . '>';

        // set attributes
        $attributes = ! empty( $item->attr_title ) ? ' title="'. esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target ) ? ' target="'. esc_attr( $item->target ) .'"' : '';
        $attributes .= ! empty( $item->fxn ) ? ' rel="'. esc_attr( $item->fxn ) .'"' : '';
        $attributes .= ! empty( $item->url ) ? ' href="'. esc_attr( $item->url ) .'"' : '';

        // item output
        $item_output = $args->before;
        $item_output .= '<a '. $attributes .'>';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= ( $depth == 0 && $args->walker->has_children ) ? '<svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path id="path-id-'. $item->ID .'" d="M6 9l6 6 6-6"/>
          </svg>' : '' ;
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output , $item , $depth , $args );

        
    }

     function itemStyles()
    {
        $styles = '';

        if ( ! empty( $this->styles )  ) {
            $styles = 'style="';

            foreach ($this->styles as $key => $value) {
                $styles .= $key . ':' . $value . ';';
            }

            $styles .= '"';
        }

        return $styles;
    }

    /**
     * 
     */
    function style_lvl()
    {
        $styles = '' ;

        if ( ! empty( $this->subMenu ) ) {
            $styles .= 'style="';

            foreach( $this->subMenu as $key => $value ){

                $styles .= $key . ':' . $value . ';';
            }

            $styles .= '"';

        }

        

        return $styles;
    }

    function style_child_ele()
    {
        $styles = '' ;

        if ( ! empty( $this->childItemStyles ) ) {

            $styles .= 'style="';

            foreach( $this->childItemStyles as $key => $value ){

                $styles .= $key . ':' . $value . ';';
            }

            $styles .= '"';

        }

        return $styles;
    }

    // End Element
    function end_el( &$output, $item, $depth = 0, $args = null ) {
        $output .= "</li>\n";
    }

    // function end_lvl(&$output, $depth = 0, $args = \null)
    // {
        
    // }


}