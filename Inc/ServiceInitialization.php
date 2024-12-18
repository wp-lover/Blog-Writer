<?php

namespace WpLover\BlogWriter\Inc;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


class ServiceInitialization
{
    private $services = [
        Menu\Register::class,
        Base\Scripts::class,
        Blocks\Register::class,
        \WpLover\BlogWriter\RestApi\Initialize::class,
        
    ];

    function __construct()
    {
        $this->run_service();
       
    }


    function run_service()
    {
        foreach ($this->services as $class ) {
            
            $instance = $this->instantiate( $class );

            if ( method_exists( $instance , 'register' ) ) {

                $instance->register();
            }
        }
    }

    /**
     * initialze the class
     * @return class instance new instance of the class
     */
    function instantiate( $class )
    {
        return new $class();
    }
}