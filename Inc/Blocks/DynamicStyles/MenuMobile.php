<?php

namespace WpLover\BlogWriter\Inc\Blocks\DynamicStyles;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


class MenuMobile
{
    function __construct( $attributes = [] )
    {
        // Generate dynamic CSS based on block attributes
        $custom_css = '';

        $dispayIcon = 'none';
                
        if ( isset( $attributes['is_hidden_desktop'] ) && $attributes['is_hidden_desktop'] ) {
            $dispayIcon = 'block';
        }

        // hide/show sidebar menu icon
        if ( ! empty( $attributes['container_margin_t'] ) ) {
            $custom_css .= "
                @media ( min-width : 767px ) {";

            $custom_css .= "#gsp-sidebar-menu-icon {
                display: " . $dispayIcon . ";";

            $custom_css .= "
                }";     
        }

        // margin-top for menu container
        if ( ! empty( $attributes['container_margin_t'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container {
                    margin-top: " . esc_attr( $attributes['container_margin_t'] ) . "px;" .
                "}";
        }

        // background color for menu container
        if ( ! empty( $attributes['container_bg_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-inside {
                    background-color: " . esc_attr( $attributes['container_bg_color'] ) . ";" .
                "}";
        }

        // background color for li tag
        if ( ! empty( $attributes['item_bg_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li {
                    background-color: " . esc_attr( $attributes['item_bg_color'] ) . ";" .
                "}";
        }

        // background color on hover for li tag
        if ( ! empty( $attributes['item_bg_hover_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li:hover {
                    background-color: " . esc_attr( $attributes['item_bg_hover_color'] ) . ";" .
                "}";
        }

        // color on hover for link text
        if ( ! empty( $attributes['item_text_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li a {
                    color: " . esc_attr( $attributes['item_text_color'] ) . ";" .
                "}";
        }

        // color on hover for link text
        if ( ! empty( $attributes['item_text_hover_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li:hover a {
                    color: " . esc_attr( $attributes['item_text_hover_color'] ) . ";" .
                "}";
        }

        // color on hover for link text
        if ( ! empty( $attributes['item_text_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li path {
                    fill: " . esc_attr( $attributes['item_text_color'] ) . ";" .
                "}";
        }

        // color on hover for link text
        if ( ! empty( $attributes['item_text_hover_color'] ) ) {
            $custom_css .= "
                #gsp-sidebar-container li:hover path {
                    fill: " . esc_attr( $attributes['item_text_hover_color'] ) . ";" .
                "}";
        }



        // Add the inline styles for this block
        if ( ! empty( $custom_css ) ) {
            wp_add_inline_style( 'blog-writer-blocks', $custom_css );
        }

        
    }
}