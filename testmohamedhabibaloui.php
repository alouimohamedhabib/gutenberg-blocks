<?php

/**
 * Plugin Name:       Test Mohamed Habib Aloui
 * Description:       🟢 Gutenber/React block developer on be half of Humains
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mohamed Habib aloui<yourtubr?co>
 * Author URI: 		  https://www.youtube.com/@AlouiMohamedhabib
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       testmohamedhabibaloui
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_testmohamedhabibaloui_block_init()
{
	// register block one
	register_block_type(__DIR__ . '/build/blockOne');
}
add_action('init', 'create_block_testmohamedhabibaloui_block_init');
