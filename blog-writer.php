<?php

namespace WpLover\BlogWriter;

/**
 * Plugin Name:       Blog-Writer
 * Plugin URI:        https://github.com/wp-lover/Blog-Writer.git
 * Description:       A Gutenberg block plugin for designing desktop and mobile menus.
 * Version:           1.0.0
 * Author:            Joshim
 * Author URI:        https://github.com/wp-lover/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-writer
 * Requires at least: 5.0  // Minimum WordPress version required.
 * Requires PHP:      7.4  // Minimum PHP version for Composer and OOP support.
 * Tested up to:      6.4   // The latest WordPress version you’ve tested.
 */

 /**
 * @package blog-writer
 */


// Exit if access directly
!defined( 'ABSPATH' ) ? exit : '';

// Autoloader for whole project
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
    require_once __DIR__ . '/vendor/autoload.php';
}

 
final class BlogWriter
{
     
    public $dir = '';
    public $pluginURI = '';

    public $textDomain = 'blog-writer';

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
    static function get_instance()
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