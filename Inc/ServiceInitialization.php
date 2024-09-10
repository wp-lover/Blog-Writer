<?php

namespace WpLover\BlogWriter\Inc;


class ServiceInitialization
{
    private $services = [
        
    ];

    

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