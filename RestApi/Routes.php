<?php

namespace WpLover\BlogWriter\RestApi;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


class Routes
{
    use RouteCallbacks\Menus;

    function menus()
    {
        register_rest_route('gsp/v1', '/menu', array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_menu'] ,
            'permission_callback' => '__return_true'
        ));
    }

}

// [$this, 'get_menu']