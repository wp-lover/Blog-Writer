<?php


namespace WpLover\BlogWriter\Inc\Menu;


use WpLover\BlogWriter\Inc\Base\BaseController;


/**
 * @package Menu
 * 
 * version 1.0
 */

class Register extends BaseController
{
    
    function register()
    {
        add_action( 'init' , [ $this , 'register_menus'] );
    }

    function register_menus()
    {


        register_nav_menu('blog_writer_header', __('Blog Writer Header Menu', $this->textDomain ));
        register_nav_menu('blog_writer_sidebar', __('Blog Writer Sidebar Menu', $this->textDomain ));
    }

    /**
     * @param array
     */
    function header_menu( $styles = [] , $subMenuStyles = [] , $childItemStyle = []) {
    
           return wp_nav_menu( array(
                'theme_location'    => 'blog_writer_header',
                'depth'             => 2,
                'container'         => '',
                'container_class'   => '',
                'container_id'      => 'gsp-header-menu',
                'menu_class'        => 'header-menu hidden md:flex justify-start',
                'menu_id'        => 'gsp-header-menu',
                // 'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                'walker'            => new WP_Lover_Navwalker( $styles , $subMenuStyles , $childItemStyle),
                'echo'              => false
            ) ); 
    }

    

}
