<?php


namespace WpLover\BlogWriter\RestApi;



class Initialize extends Routes
{
    function register()
    {
        add_action( 'rest_api_init' , [ $this , 'register_routes'] );

        echo 'hello register'; die;
    }

    function register_routes()
    {
        $this->menus();

        echo 'hello'; die;
    }
    
}