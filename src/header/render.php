<?php

use \WpLover\BlogWriter\Inc\Menu\Register;
use WpLover\BlogWriter\Inc\Blocks\StylesForBlocks;

	$blocksStyle = StylesForBlocks::get_instance();
	$blocksStyle->headerAttributes = $attributes;

	$menu = new Register;

	

	?><header id="gsp-header-container" class="gsp-site-header md:flex md:items-end md:justify-between z-40 md:h-20 min-w-full py-0  px-4"
	   justify_content="space-around" style="background:<?php echo $attributes['header_bg'];?>"
	>
	  <div class="gsp-site-name bg-slate-400 flex justify-between p-2">
		  <h1 class="gsp-site-name text-white text-xl" style="color:<?php echo $title_text ?>;">
			<a href="<?php echo esc_url(get_bloginfo('url')) ?>"><?php echo esc_sql( get_bloginfo('name')) ?></a>
		  </h1>
		  <span id="gsp-sidebar-menu-openner" class="md:hidden p-2 bg-black text-white fle">open</span>
	  </div>
		<?php	echo $menu->header_menu(  );
		?><div class="hidden md:block ">
			<button class="p-2 bg-slate-500 text-white rounded-md">SIGN-IN</button>
		</div>
	</header>

	<?php

	// echo $attributes['submenu_bg'];
	// foreach ($attributes as $key => $value) {
	// 	echo $key . ' ' . $value . "</br>";
	// }