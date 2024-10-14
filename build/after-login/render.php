<?php

// Exit if access directly
!defined( 'ABSPATH' ) ? exit : '';

if ( ! empty( $content )  ) {
    if ( is_user_logged_in() ) {
        echo $content;
    }
}