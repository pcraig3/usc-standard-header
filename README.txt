=== USC Standard Header ===
Contributors: pcraig3
Requires at least: 3.5.1
Tested up to: 3.6
Stable tag: 0.9.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Houses all of the bespoke JS and CSS code (and an custom menu walker) for our USC top header.

== Description ==

Houses all of the bespoke JS and CSS code (and an custom menu walker) for our USC top header.

You *still* have to change the header.php and upload the logo and get the menu plugin to work, but AFTER that, this
takes care of everything else.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

= Using The WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Search for 'plugin-name'
3. Click 'Install Now'
4. Activate the plugin on the Plugin dashboard

= Uploading in WordPress Dashboard =

1. Navigate to the 'Add New' in the plugins dashboard
2. Navigate to the 'Upload' area
3. Select `plugin-name.zip` from your computer
4. Click 'Install Now'
5. Activate the plugin in the Plugin dashboard

= Using FTP =

1. Download `plugin-name.zip`
2. Extract the `plugin-name` directory to your computer
3. Upload the `plugin-name` directory to the `/wp-content/plugins/` directory
4. Activate the plugin in the Plugin dashboard


== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.9.0 =
* Can't imagine we need <em>too</em> much more here.
* * Added more JS closes the search when the mobile nav is opened, and vice-versa
* * Changed how the JS works because requiring Divi's custom.js as a dependency was breaking a bunch of vanilla Divi stuff
* * Added a .focus() method to the input box whenever you click it.

= 0.1.0 =
* CSS from our children themes' style.css ended up here.
* A bit of JS to change the reveal/hide functionality of the search bar.
* Also changed the HTML code in header.php so that the search bar doesn't have to be position absolute (or fixed, ugh).
* Changed the of the search icon to use an actual width instead of padding because the padding was rendering differently in different browsers.

