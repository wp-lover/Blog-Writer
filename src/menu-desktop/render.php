<?php

use \WpLover\BlogWriter\Inc\Menu\WP_Lover_Navwalker;
use \WpLover\BlogWriter\Inc\Menu\Register;
use WpLover\BlogWriter\Inc\Blocks\StylesForBlocks;

	$blocksStyle = StylesForBlocks::get_instance();
	$blocksStyle->headerAttributes = $attributes;

	$menu = new Register;

	echo $menu->header_menu();

	?>
	<div id="gsp-mobile-menu">
		<?php  echo $menu->mobile_menu(); ?>
	</div>
	<?php
		