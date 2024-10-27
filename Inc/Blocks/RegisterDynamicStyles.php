<?php

namespace WpLover\BlogWriter\Inc\Blocks;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


class RegisterDynamicStyles
{
    // class instance
    private static ?RegisterDynamicStyles $instance = null;
    
    // attributes for 'menu-desktop'
    public $menu_desktop_attributes;

    // attributes for 'menu-mobile'
    public $menu_mobile_attributes;

    private function __construct(){}

    function register_styles()
    {
        if ( ! empty( $this->menu_desktop_attributes ) ) {
            new DynamicStyles\MenuDesktop( $this->menu_desktop_attributes );
        }

        if ( ! empty( $this->menu_mobile_attributes ) ) {
            new DynamicStyles\MenuMobile( $this->menu_mobile_attributes );
        }
    }

    /**
     * @return RegisterDynamicStyles
     */
    public static function get_instance() : RegisterDynamicStyles
    {
        if ( self::$instance == null ) {
            self::$instance = new RegisterDynamicStyles();
        }

        return self::$instance;

    }
}