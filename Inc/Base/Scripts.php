<?php

namespace WpLover\BlogWriter\Inc\Base;

use WpLover\BlogWriter\BlogWriter;

class Scripts
{

    public BlogWriter $instance;

    function __construct()
    {
        $this->instance = BlogWriter::get_instance();

        add_action( 'wp_enqueue_scripts' , [ $this , 'scripts' ] );

        add_action( 'admin_enqueue_scripts' , [ $this , 'adminScripts' ] );
    }

    function scripts()
    {
        $this->styles();
    }

    function styles()
    {
        wp_enqueue_style( 'gsp-primary' , $this->instance->pluginURI . '/assets/css/primary.css' , [] ,  $this->instance->version , 'all' );
    }

    function adminScripts(){
        wp_enqueue_style('dashicons');
    }
}