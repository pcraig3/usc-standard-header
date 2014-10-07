=== USC Standard Header ===
Contributors: pcraig3
Requires at least: 3.6
Tested up to: 4.0
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Houses all of the bespoke JS and CSS code (and an custom menu walker) for our USC top header.

== Description ==

Houses all of the bespoke JS and CSS code (and an custom menu walker) for our USC top header.

You *still* have to change the header.php and upload the logo and get the menu plugin to work, but AFTER that, this
takes care of everything else.


== Frequently Asked Questions ==

= What does this plugin not take care of? =

1. A new child theme needs to duplicate the header.php contained in any of the other child themes
2. A new child theme needs to upload the USC logo for the header in the Divi theme options
3. A new child theme needs to un-select the floating menu in the Divi theme options
4. A new child theme needs to get the network-wide menu plugin to work

== Changelog ==

= 1.0.0 =
* Bucket-ton of comments
* Clear search bar when search icon is clicked
* Shrink top menu by one pixel
* Added method to make sure that empty search strings don't call index.php

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

