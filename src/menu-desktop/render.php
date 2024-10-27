<?php

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


use \WpLover\BlogWriter\Inc\Menu\WP_Lover_Navwalker;

$style = \WpLover\BlogWriter\Inc\Blocks\RegisterDynamicStyles::get_instance();

$style->menu_desktop_attributes = $attributes;


function gsp_header_fallback_menu() {
	echo '<p>Please set a menu in the "Blog Writer Header Menu" location.</p>';
}


if (! empty( $attributes ) && $attributes['has_data'] ) {

	wp_nav_menu( array(
		'theme_location'    => 'blog_writer_header',
		'depth'             => 2,
		'container'         => '',
		'container_class'   => '',
		'container_id'      => '',
		'menu_class'        => 'header-menu hidden md:flex justify-start',
		'menu_id'           => 'gsp-header-menu',
		'fallback_cb'    => 'gsp_header_fallback_menu',
		'walker'            => new WP_Lover_Navwalker()
	) ); 
	
}
	