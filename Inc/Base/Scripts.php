<?php

namespace WpLover\BlogWriter\Inc\Base;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;



use WpLover\BlogWriter\BlogWriter;

class Scripts
{

    public BlogWriter $instance;

    function __construct()
    {
        $this->instance = BlogWriter::get_instance();

        add_action( 'enqueue_block_assets' , [ $this , 'block_scripts' ] );
    }

    function block_scripts()
    {
        $this->block_styles();
    }

    function block_styles()
    {   
        wp_enqueue_style( 'blog-writer-blocks', $this->instance->pluginURI . '/assets/css/blocks-main.css' , [] ,  $this->instance->version , 'all' );

        // register inline css for blocks
        \WpLover\BlogWriter\Inc\Blocks\RegisterDynamicStyles::get_instance()->register_styles();

    }


}