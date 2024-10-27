<?php 

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


use WpLover\BlogWriter\Inc\Menu\WP_Lover_Navwalker;


$style = \WpLover\BlogWriter\Inc\Blocks\RegisterDynamicStyles::get_instance();

$style->menu_mobile_attributes = $attributes;

function gsp_sidebar_fallback_menu() {
    echo '<p>Please set a menu in the "Blog Writer Sidebar Menu" location.</p>';
}


?><div id="gsp-sidebar-menu-icon">
<svg xmlns="http://www.w3.org/2000/svg" id="gsp-sidebar-opener" width="35" height="35" viewBox="0 0 100 80" fill="black">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
</svg>
</div>
<div id="gsp-sidebar-container">
    <div id="gsp-sidebar-inside">
        <?php

        // Escape inner block content safely
        if ( ! empty( $content ) ) {
            echo wp_kses_post( $content );  // Using wp_kses_post to allow safe HTML tags
        }
        
           wp_nav_menu( array(
            'theme_location'    => 'blog_writer_sidebar',
            'depth'             => 2,
            'menu_id'           => 'gsp-mobile-menu',
            'fallback_cb'    => 'gsp_sidebar_fallback_menu',
            'walker'            => new WP_Lover_Navwalker(),
        ) );
        ?>
    </div>
    <div id="gsp-sidebar-closer">
        <button id="sidebar_closer_btn" onclick="gspSidebarCloser()">X</button>
    </div>
</div>