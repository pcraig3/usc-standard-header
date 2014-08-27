<?php
/**
 * USC Standard Header Plugin
 *
 * Includes the styling and menu walker so that the USC menu can be easily added to
 * all networked sites.
 *
 * @package   USC_Standard_Header
 * @author    Paul Craig <pcraig3@uwo.ca>
 * @license   GPL-2.0+
 * @copyright 2014 University Students' Council
 *
 * @wordpress-plugin
 * Plugin Name:       USC Standard Header
 * Plugin URI:        http://westernusc.org
 * Description:       *Header.php* Includes styling and enables descriptions for USC header. 
 * Version:           0.9.0
 * Author:            Paul Craig
 * Text Domain:       plugin-name-locale
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/<owner>/<repo>
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
 *
 */
register_activation_hook( __FILE__, array( 'USC_Standard_Header', 'activate' ) );
//register_deactivation_hook( __FILE__, array( 'USC_Standard_Header', 'deactivate' ) );

add_action( 'plugins_loaded', array( 'USC_Standard_Header', 'get_instance' ) );