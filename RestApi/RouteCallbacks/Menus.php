<?php

namespace WpLover\BlogWriter\RestApi\RouteCallbacks;

trait Menus {

    protected $locations;

    protected $locationName = '';

    protected $items = [];

    protected $menu_items = [];

    /**
     * This is the modified data will return as result
     */
    protected $menu = [];

    // it will store menu order number for preventing duplication
    protected $menu_orders = [];

    function get_menu( \WP_REST_Request $request )
    {
        
        $locationName = $request['location-name'];

        $this->locations = get_nav_menu_locations();

        if ( $this->is_location_exists( $locationName ) ) {

          $menu = wp_get_nav_menu_object($this->locations[$this->locationName]);

          $this->menu_items = wp_get_nav_menu_items($menu->term_id);
  
          foreach ( $this->menu_items as $index => $item) {
              $this->modify_item( $index , $item );
          }


          return wp_send_json_success( [
            "menu" => $this->menu,
            "site_title" => get_bloginfo('name')
            
          ] );
        }
          
        return wp_send_json_error('data not found');
      
    }

    function is_location_exists( $name ){

      $status = false;

      if ( array_key_exists( $name , $this->locations) ) {

        $this->locationName = $name;

        $status = true;

      } else {

        if ( array_key_exists( 'blog_writer_header' , $this->locations) ) {
          
          $this->locationName = 'blog_writer_header';

          $status = true;

        } else {

          $status = false;
        }

      }
      
      return $status;
    }

    function modify_item( $index, $item )
    {

      $isChild = false;

      if ( $item->url == '#') {
        $isChild = true;
      }



        if ( $item->menu_item_parent == "0" ) {

            $this->menu[][] = [
                'ID'        => $item->ID,
                'parent_id' => $item->menu_item_parent,
                'name'      => $item->title,
                'link'      => $item->url,
                'has_child' => $isChild
            ];

            $isChild = false;

            array_push( $this->menu_orders , $item->menu_order );

        }else{

            foreach( $this->menu_items as $item2 ) {
                
                $parentID = $item->menu_item_parent;

                if ( $parentID == $item2->menu_item_parent ) {
                  
                  foreach( $this->menu_items as $index => $item3 ){ 
                    
                    if ( $item3->ID == $parentID ) {

                      $isChild2 = false;

                      if ( $item2->url == '#') {
                        $isChild2 = true;
                      }
                      
                      if ( ! in_array( $item2->menu_order , $this->menu_orders )  ) {
                        $this->menu[$index][][] = [
                              
                            'ID'        => $item2->ID,
                            'parent_id' => $item2->menu_item_parent,
                            'name'      => $item2->title,
                            'link'      => $item2->url,
                            'has_child' => $isChild2
                          
                        ];

                        $isChild2 = false;

                        array_push( $this->menu_orders , $item2->menu_order );
                      }
                    
                    }
                  }
                   
                }
            }
        }

    }
    
}