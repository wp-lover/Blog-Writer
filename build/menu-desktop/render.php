<?php

use \WpLover\BlogWriter\Inc\Menu\Register;
use WpLover\BlogWriter\Inc\Blocks\StylesForBlocks;

$blocksStyle = StylesForBlocks::get_instance();
$blocksStyle->headerAttributes = $attributes;

	if (! empty( $attributes ) && $attributes['has_data'] ) {
	
		$menu = new Register;

		echo $menu->header_menu();
	}
	