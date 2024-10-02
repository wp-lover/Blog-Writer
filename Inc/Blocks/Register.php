<?php

namespace WpLover\BlogWriter\Inc\Blocks;


use WpLover\BlogWriter\BlogWriter;

class Register 
{
    function register()
    {
        add_action( 'init' , [ $this , 'register_blocks' ] );
    }

    function register_blocks()
    {
        $blogWriter = BlogWriter::get_instance();
       

    }
    
}