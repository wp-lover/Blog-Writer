<?php

use \WpLover\BlogWriter\Inc\Menu\Register;
use WpLover\BlogWriter\Inc\Blocks\StylesForBlocks;

	$blocksStyle = StylesForBlocks::get_instance();
	$blocksStyle->headerAttributes = $attributes;

	$menu = new Register;

	$leftBlock= $content;

	echo  $leftBlock  ;