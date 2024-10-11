<?php 


    use WpLover\BlogWriter\Inc\Menu\WP_Lover_Navwalker;

?><div>
<svg xmlns="http://www.w3.org/2000/svg" id="gsp-sidebar-opener" width="35" height="35" viewBox="0 0 100 80" fill="black">
    <rect width="100" height="10"></rect>
    <rect y="30" width="100" height="10"></rect>
    <rect y="60" width="100" height="10"></rect>
</svg>
</div>
<div id="gsp-sidebar-container">
    <div id="gsp-sidebar-inside">
        <?php
           wp_nav_menu( array(
            'theme_location'    => 'blog_writer_sidebar',
            'depth'             => 2,
            'menu_id'           => 'gsp-mobile-menu',
            // 'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
            'walker'            => new WP_Lover_Navwalker(),
        ) );
        ?>
    </div>
    <div id="gsp-sidebar-closer">
        <button id="sidebar_closer_btn" onclick="gspSidebarCloser()">X</button>
    </div>
</div>