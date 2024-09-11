<?php

    // require_once ( dirname( __FILE__, 3) . '/Inc/Menu/WP_Bootstrap_Navwalker.php');

	$jsonMetaData = file_get_contents( __DIR__ . '/block.json' );

	$fromJson = json_decode($jsonMetaData);

	$jsonAttributes = $fromJson->attributes;

	$colors = $jsonAttributes->colors;

	(array) $colorAttributes = array_key_exists( 'colors' , $attributes ) ? $attributes['colors'] : [];

	$header_bg = array_key_exists( 'header_bg' , $colorAttributes ) ? $colorAttributes['header_bg'] : $colors->header_bg->default;
	$title_text = array_key_exists( 'title_text' , $colorAttributes ) ? $colorAttributes['title_text'] : $colors->title_text->default;
	$item_bg_color = array_key_exists( 'item_bg_color' , $colorAttributes ) ? $colorAttributes['item_bg_color'] : $colors->item_bg_color->default;
	$item_bg_hover_color = array_key_exists( 'item_bg_hover_color' , $colorAttributes ) ? $colorAttributes['item_bg_hover_color'] : $colors->item_bg_hover_color->default;
	$item_text_color = array_key_exists( 'item_text_color' , $colorAttributes ) ? $colorAttributes['item_text_color'] : $colors->item_text_color->default;
	$item_text_hover_color = array_key_exists( 'item_text_hover_color' , $colorAttributes ) ? $colorAttributes['item_text_hover_color'] : $colors->item_text_hover_color->default;

	
	$space = $jsonAttributes->space;
	(array) $spaceAttributes = array_key_exists( 'space' , $attributes ) ? $attributes['space'] : [];
	
	// margin
	$item_margin_l = array_key_exists( 'margin_l' , $spaceAttributes ) ? $spaceAttributes['margin_l'] : $space->margin_l->default;
	$item_margin_r = array_key_exists( 'margin_r' , $spaceAttributes ) ? $spaceAttributes['margin_r'] : $space->margin_r->default;
	$item_margin_b = array_key_exists( 'margin_b' , $spaceAttributes ) ? $spaceAttributes['margin_b'] : $space->margin_b->default;
	
	// padding
	$item_padding_t = array_key_exists( 'padding_t' , $spaceAttributes ) ? $spaceAttributes['padding_t'] : $space->padding_t->default;
	$item_padding_l = array_key_exists( 'padding_l' , $spaceAttributes ) ? $spaceAttributes['padding_l'] : $space->padding_l->default;
	$item_padding_r = array_key_exists( 'padding_r' , $spaceAttributes ) ? $spaceAttributes['padding_r'] : $space->padding_r->default;
	$item_padding_b = array_key_exists( 'padding_b' , $spaceAttributes ) ? $spaceAttributes['padding_b'] : $space->padding_b->default;

	// child item
	$sub_menu_margin_t = array_key_exists( 'sub_menu_margin_t' , $spaceAttributes ) ? $spaceAttributes['sub_menu_margin_t'] : $spaceAttributes->sub_menu_margin_t->default;
	$child_margin_b = array_key_exists( 'child_item_margin_b' , $spaceAttributes ) ? $spaceAttributes['child_item_margin_b'] : $space->child_item_margin_b->default;


	$styles = [
		'background' => $item_bg_color,
		'color' => $item_text_color,
		'margin' => '0px' . ' ' . $item_margin_l . 'px ' . $item_margin_b . 'px ' . $item_margin_r . 'px',
		'padding' => $item_padding_t . 'px ' . $item_padding_l . 'px ' . $item_padding_b . 'px ' . $item_padding_r . 'px'

	];

		// $sub_menu_margin_t .
	$subMenuStyles = [
		'margin-top' => $sub_menu_margin_t . 'px',
	];

	$childItemStyles = [
		'margin-bottom'  => $child_margin_b . 'px'
	];



	$menu = new Gsp\BlockTheme\Inc\Menu\Nav_Menus();

	

	?><header id="gsp-header-container" class="gsp-site-header md:flex md:items-end md:justify-between z-40 md:h-20 min-w-full py-0  px-4"
	bg_color="<?php echo $header_bg; ?>"
	   justify_content="space-around" style="background:<?php echo $header_bg;?>"
	>
	  <div class="gsp-site-name bg-slate-400 flex justify-between p-2">
		  <h1 class="gsp-site-name text-white text-xl" style="color:<?php echo $title_text ?>;">
			<a href="<?php echo esc_url(get_bloginfo('url')) ?>"><?php echo esc_sql( get_bloginfo('name')) ?></a>
		  </h1>
		  <span id="gsp-sidebar-menu-openner" class="md:hidden p-2 bg-black text-white fle">open</span>
	  </div>
		<?php	echo $menu->header_menu( $styles , $subMenuStyles , $childItemStyles );
		?><div class="hidden md:block ">
			<button class="p-2 bg-slate-500 text-white rounded-md">SIGN-IN</button>
		</div>
	</header>

	<?php
