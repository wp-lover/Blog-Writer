<?php


namespace WpLover\BlogWriter\RestApi;


// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;

class Initialize extends Routes
{

  
    function register()
    {
        add_action( 'rest_api_init' , [ $this , 'register_routes'] );

    }

    function register_routes()
    {
        $this->menus();

    }
    
}