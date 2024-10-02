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

        

        if ( is_dir( $blogWriter->dir . '/build/menu-desktop' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/menu-desktop'  );
        }

        if ( is_dir( $blogWriter->dir . '/build/z-demo' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/z-demo'  );
        }

    }
    
}