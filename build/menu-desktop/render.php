<?php

use \WpLover\BlogWriter\Inc\Menu\Register;
use WpLover\BlogWriter\Inc\Blocks\StylesForBlocks;



	if (! empty( $attributes )) {
		
		$blocksStyle = StylesForBlocks::get_instance();
		$blocksStyle->headerAttributes = $attributes;
	
		$menu = new Register;

		echo $menu->header_menu();
	}
	