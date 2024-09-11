<?php


namespace WpLover\BlogWriter\RestApi;



class Initialize extends Routes
{

    function __construct()
    {
        echo 'hello register'; die;
        
    }
    function register()
    {
        add_action( 'rest_api_init' , [ $this , 'register_routes'] );

        
    }

    function register_routes()
    {
        // $this->menus();

        echo 'hello'; die;
    }
    
}