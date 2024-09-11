<?php

namespace WpLover\BlogWriter;
/**
 * @package Blog_Writter
 */
/*
 Plugin Name: Blog-Writer
 Plugin URI: https://github.com/wp-lover/Blog-Writer
 Description: This is a WordPress plugin that will help to design pages and  create creative content like posts & articles and also include MCQ-based blog posts.
 Version: 1.0
 Requires at least: 5.8
 Requires PHP: 5.6.20
 Author: Joshim
 Author URI: https://github.com/wp-lover/
 License: GPLv2 or later
 Tags: Bloc Based Plugin, Posts, Articles, MCQ, Learn, etc.
 Text Domain: blog_writer
 */


!defined( 'ABSPATH' ) ? exit : '';


if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
    require_once __DIR__ . '/vendor/autoload.php';
}

 
final class BlogWriter
{
     
    public $dir = '';
    public $pluginURI = '';

    public $textDomain = 'blog_writer';

    public $version = '1.0';

    private $isServiceLoaded = false;

    private static $instance = null;

    private function __construct()
    {
        // Set the plugin directory when the class is instantiated
        $this->dir = __DIR__;

        // Set the plugin URI when the class is instantiated
        $this->pluginURI = plugins_url('', __FILE__);
    }



     /**
     * Get the singleton instance of BlogWriter
     *
     * @return BlogWriter
     */
    static function get_instance(): BlogWriter
    {
        if (self::$instance === null) {
            // Create a new instance of the class
            self::$instance = new self();
        }
        
        return self::$instance;
    }

    /**
     * load other services
     * 
     * @return void
     */
    function load()
    {
        if ( $this->isServiceLoaded == false ) {
            new \WpLover\BlogWriter\Inc\ServiceInitialization();
        }

        $this->isServiceLoaded = true;
    }

}


if ( class_exists( 'WpLover\BlogWriter\BlogWriter' ) ) {

   add_action( 'plugin_loaded' , [ BlogWriter::get_instance() , 'load' ] );
}