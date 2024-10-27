<?php

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! empty( $content )  ) {
    if ( is_user_logged_in() ) {
        // Escape inner block content safely
        echo wp_kses_post( $content );  // Using wp_kses_post to allow safe HTML tags
    }
}