<?php
/**
 * USC Standard Header Plugin unifies that which is meant to be common to all USC microsites using the same header.
 *
 * Basically, we've included a Menu Walker (which adds descriptions to the top nav sub-items), as well as the
 * custom CSS and JS governing the look and feel of the top navigation.
 *
 * Things this plugin can't handle are
 * 1. The custom header.php file, which must be copied from another microsite
 * 2. The USC logo, which must be selected using the Divi theme options
 * 3. The top menu being the same as the other microsites, which must be done through the WordPress backend
 *
 * No admin-facing functionality
 *
 * @package   USC_Standard_Header
 * @author    Paul Craig <pcraig3@uwo.ca>
 * @license   GPL-2.0+
 * @copyright 2014 pcraig3
 *
 * @wordpress-plugin
 * Plugin Name:       USC Standard Header
 * Plugin URI:        https://github.com/pcraig3/usc-standard-header
 * Description:       Enqueues custom styling and javascript, and enables descriptions for USC header.
 * Version:           1.0.0
 * Author:            Paul Craig
 * Text Domain:       usc-standard-header
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/pcraig3/usc-standard-header
 * WordPress-Plugin-Boilerplate: v2.6.1
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/*----------------------------------------------------------------------------*
 * Public-Facing Functionality
 *----------------------------------------------------------------------------*/


require_once( plugin_dir_path( __FILE__ ) . 'public/class-usc-standard-header.php' );
require_once( plugin_dir_path( __FILE__ ) . 'public/SubmenuDescriptionWalker.php' );

/*
 * Register hooks that are fired when the plugin is activated or deactivated.
 * When the plugin is deleted, the uninstall.php file is loaded.
 */
register_activation_hook( __FILE__, array( 'USC_Standard_Header', 'activate' ) );
//register_deactivation_hook( __FILE__, array( 'USC_Standard_Header', 'deactivate' ) );

add_action( 'plugins_loaded', array( 'USC_Standard_Header', 'get_instance' ) );