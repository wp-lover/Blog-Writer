<?php

	class StyleForTest
	{
		public $styles;

		function __construct( $styles )
		{
			$this->styles = $styles;

			add_action( 'wp_head' , [ $this , 'header_blocks_style' ] );
		}

		function header_blocks_style() {
			?>
			<style>
				.nav-item a , .nav-item svg path {
					color: <?php echo $this->styles['color'] ?>;
				}
				.nav-item a {
					text-decoration: none;
				}
			</style>
			<?php
		}
	}

	$header_bg = $attributes['header_bg'];
	$title_text = $attributes['title_text'];
	$item_bg_color = $attributes['item_bg_color'];
	$item_bg_hover_color = $attributes['item_bg_hover_color'];
	$item_text_color = $attributes['item_text_color'];
	$item_text_hover_color = $attributes['item_text_hover_color'];

	
	// margin
	$item_margin_l = $attributes['item_margin_l'];
	$item_margin_r = $attributes['item_margin_r'];
	$item_margin_b = $attributes['item_margin_b'];
	
	// padding
	$item_padding_t = $attributes['item_padding_t'];
	$item_padding_l = $attributes['item_padding_l'];
	$item_padding_r = $attributes['item_padding_r'];
	$item_padding_b = $attributes['item_padding_b'];

	// child item
	$sub_menu_margin_t = $attributes['sub_menu_margin_t'];
	$child_margin_b = $attributes['child_item_margin_b'];


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

	new StyleForTest( $styles );

	$menu = new \WpLover\BlogWriter\Inc\Menu\Register;

	

	?><header id="gsp-header-container" class="gsp-site-header md:flex md:items-end md:justify-between z-40 md:h-20 min-w-full py-0  px-4"
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


