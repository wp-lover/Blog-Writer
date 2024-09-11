<?php

namespace WpLover\BlogWriter\RestApi\RouteCallbacks;

trait Menus {

    protected $items = [];

    protected $menu_items = [];

    /**
     * This is the modified data will return as result
     */
    protected $menu = []; 

    function get_menu( \WP_REST_Request $request )
    {
        $locations = get_nav_menu_locations();

        if ( array_key_exists( 'blog_writer_header' , $locations) ) {
          
            $menu = wp_get_nav_menu_object($locations['blog_writer_header']);

            $this->menu_items = wp_get_nav_menu_items($menu->term_id);
    
            foreach ( $this->menu_items as $index => $item) {
                $this->modify_item( $index , $item );
            }
        }

    
        return wp_send_json_success( [
          "menu" => $this->menu,
          "site_title" => get_bloginfo('name')
        ] );
      
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
                      
                      $this->menu[$index][][] = [
                        
                              'ID'        => $item2->ID,
                              'parent_id' => $item2->menu_item_parent,
                              'name'      => $item2->title,
                              'link'      => $item2->url,
                              'has_child' => $isChild2
                        
                      ];

                      $isChild2 = false;
                    
                    }
                  }
                   
                }
            }
        }

    }
    
}