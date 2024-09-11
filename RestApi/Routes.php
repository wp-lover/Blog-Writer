<?php

namespace WpLover\BlogWriter\RestApi;

class Routes
{
    use RouteCallbacks\Menus;

    function menus()
    {
        register_rest_route('gsp/v1', '/menu', array(
            'methods'  => 'GET',
            'callback' => function(){
                return 'hello world';
            } ,
            'permission_callback' => '__return_true'
        ));
    }

}

// [$this, 'get_menu']