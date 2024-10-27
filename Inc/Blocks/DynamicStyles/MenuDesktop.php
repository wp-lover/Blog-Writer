<?php

namespace WpLover\BlogWriter\Inc\Blocks\DynamicStyles;

// Exit if access directly
if ( ! defined( 'ABSPATH' ) ) exit;


class MenuDesktop
{
    function __construct( $attributes = [] )
    {
        // Generate dynamic CSS based on block attributes
        $custom_css = '';


        // margin-bottom for menu container
        if ( ! empty( $attributes['menu_container_margin_y'] ) ) {
            $custom_css .= "
                #gsp-header-menu {
                    margin-bottom: " . esc_attr( $attributes['menu_container_margin_y'] ) . "px;" .
                "}";
        }

        // some styles on li tag
        $custom_css .= "
                #gsp-header-menu .nav-item {
                    min-width: " . esc_attr( $attributes['item_min_width'] ?? "80" ) . "px;" .
                    "background-color: " .    esc_attr( $attributes['item_bg_color'] ?? "" ) . ";" .
                    "margin-top: " .    esc_attr( $attributes['item_margin_t'] ?? "0" ) . "px;" .
                    "margin-left: " .    esc_attr( $attributes['item_margin_l'] ?? "0" ) . "px;" .
                    "margin-right: " .    esc_attr( $attributes['item_margin_r'] ?? "0" ) . "px;" .
                    "margin-bottom: " .    esc_attr( $attributes['item_margin_b'] ?? "0" ) . "px;" .
                    "padding-top: " .    esc_attr( $attributes['item_padding_t'] ?? "0" ) . "px;" .
                    "padding-left: " .    esc_attr( $attributes['item_padding_l'] ?? "0" ) . "px;" .
                    "padding-right: " .    esc_attr( $attributes['item_padding_r'] ?? "0" ) . "px;" .
                    "padding-bottom: " .    esc_attr( $attributes['item_padding_b'] ?? "0" ) . "px;" .
                    "border-top-left-radius: " .    esc_attr( $attributes['border_radius_tl'] ?? "0" ) . "px;" .
                    "border-top-right-radius: " .    esc_attr( $attributes['border_radius_tr'] ?? "0" ) . "px;" .
                    "border-bottom-left-radius: " .    esc_attr( $attributes['border_radius_bl'] ?? "0" ) . "px;" .
                    "border-bottom-right-radius: " .    esc_attr( $attributes['border_radius_br'] ?? "0" ) . "px;" .
                "}";

        // color on link text
        if ( ! empty( $attributes['item_bg_hover_color'] ) ) {
            $custom_css .= "
                #gsp-header-menu .nav-item:hover {
                background-color: " . esc_attr( $attributes['item_bg_hover_color'] ) . ";" .
                "}";
        }

                // color on link text
        if ( ! empty( $attributes['item_text_color'] ) ) {
            $custom_css .= "
                #gsp-header-menu .nav-item a {
                color: " . esc_attr( $attributes['item_text_color'] ) . ";" .
                "}";
        }

        // hover color on link text
        if ( ! empty( $attributes['item_text_hover_color'] ) ) {
            $custom_css .= "
                #gsp-header-menu .nav-item:hover > a {
                color: " . esc_attr( $attributes['item_text_hover_color'] ) . ";" .
                "}";
        }

        // color for dropdown icon
        if ( ! empty( $attributes['item_text_color'] ) ) {
            $custom_css .= "
                #gsp-header-menu .nav-item path {
                fill: " . esc_attr( $attributes['item_text_color'] ) . ";" .
                "}";
        }

        // hover color on dropdown icon
        if ( ! empty( $attributes['item_text_hover_color'] ) ) {
            $custom_css .= "
                #gsp-header-menu .nav-item:hover path {
                fill: " . esc_attr( $attributes['item_text_hover_color'] ) . ";" .
                "}";
        }

        // margin for submenu
        if ( ! empty( $attributes['sub_menu_margin_t'] ) ) {
            $custom_css .= "
                #gsp-header-menu .item-parent .sub-menu {
                    margin-top: " . esc_attr( $attributes['sub_menu_margin_t'] ) . "px;" .
                "}";
        }

        // margin for child item
        if ( ! empty( $attributes['child_item_margin_b'] ) ) {
            $custom_css .= "
                #gsp-header-menu .item-parent .sub-menu li {
                    margin-bottom: " . esc_attr( $attributes['child_item_margin_b'] ) . "px;" .
                "}";
        }

        // Add the inline styles for this block
        if ( ! empty( $custom_css ) ) {
            wp_add_inline_style( 'blog-writer-blocks', $custom_css );
        }


        
    }
}