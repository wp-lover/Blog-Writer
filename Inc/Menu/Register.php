<?php


namespace WpLover\BlogWriter\Inc\Menu;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


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

        register_nav_menu('blog_writer_header', __('Blog Writer Header Menu', 'blog-writer' ));
        register_nav_menu('blog_writer_sidebar', __('Blog Writer Sidebar Menu', 'blog-writer' ));
    }    

}
