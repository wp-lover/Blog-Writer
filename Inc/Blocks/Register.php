<?php

namespace WpLover\BlogWriter\Inc\Blocks;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


use WpLover\BlogWriter\BlogWriter;

class Register 
{
    function register()
    {
        add_action( 'init' , [ $this , 'register_blocks' ] );

        $this->register_category();
    }

    function register_category(){

        add_filter( 'block_categories_all' , function( $categories ) {

            // Adding a new category.
            $categories[] = array(
                'slug'  => 'blog-writer',
                'title' => 'Blog Writer'
            );
        
            return $categories;
        } );
    }

    function register_blocks()
    {
        $blogWriter = BlogWriter::get_instance();

        // menu-block 
        if ( is_dir( $blogWriter->dir . '/build/menu-desktop' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/menu-desktop' );
        }

        // menu-block 
        if ( is_dir( $blogWriter->dir . '/build/menu-mobile' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/menu-mobile'  );
        }

        if ( is_dir( $blogWriter->dir . '/build/after-login' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/after-login'  );
        }

        if ( is_dir( $blogWriter->dir . '/build/before-login' ) ) {
          
            register_block_type_from_metadata( $blogWriter->dir . '/build/before-login'  );
        }
    }
    
}