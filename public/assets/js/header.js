/**
 * Javascript file governs the opening and closing of the search bar.
 * I re-arranged the HTML in header.php so that we didn't have to use a position: absolute
 * search bar, but that broke the existing JS opening and closing the search bar.
 *
 * So I've overcome that difficulty
 */
(function ( $ ) {
	"use strict";

    /**
     * This is what we're replacing, located in Divi's custom.js
     *
     * 	$et_search_icon.click( function() {
			var $this_el = $(this),
				$form = $this_el.siblings( '.et-search-form' );

			if ( $form.hasClass( 'et-hidden' ) ) {
				$form.css( { 'display' : 'block', 'opacity' : 0 } ).animate( { opacity : 1 }, 500 );
			} else {
				$form.animate( { opacity : 0 }, 500 );
			}

			$form.toggleClass( 'et-hidden' );
		} );
     */

    /**
     * function makes sure that the search bar appears when the search-icon in the top header is clicked.
     * (this is necessary because we re-ordered the HTML in header.php so as to avoid an absolute header)
     *
     * Function also removes existing search strings from the input field, puts the focus on the input field
     * automatically, and closes the mobile header if it is open when the search bar button is clicked.
     *
     * *** NOTE: This ONCE waited for Divi's very own 'custom.js' before it executed, but that caused a bunch of strange
     * problems: Services stopped working and the tabs on the front of Western Film and under '/transportation'
     * stopped working as well.
     *
     * I dunno, must have been my JS interfering with theirs, because none of this code is relevant to tabs
     * or the Services grid layout.
     * /NOTE ***
     */
    $( document ).ready(function() {

	//$(function () {  when we had Divi's custom.js as a dependency, we didn't wait for $(document).ready

        var $et_search_icon = $( '#et_search_icon' );

        var $mobile_nav_anchor = $('#et-top-navigation').find('.mobile_nav');

        //remove string from input field
        $et_search_icon.parents( '#main-header').find( '.et-search-form input').val('');


        $et_search_icon.unbind( 'click' );

        $et_search_icon.click( function() {
            var $this_el = $(this),
                $form = $this_el.parents( '#main-header').find( '.et-search-form' );

            $form.toggleClass( 'et-hidden' );
            $this_el.toggleClass( 'et-clicked' );

            if ( $this_el.hasClass( 'et-clicked' ) ) {
                $form.find('input').focus();
            }

            /* Close the mobile nav menu if you open the search bar. */
            $mobile_nav_anchor.removeClass( 'opened' ).addClass( 'closed' );
            $mobile_nav_anchor.find('> ul').slideUp( 500 );
        } );

        /**
         * function that hides an open search bar if the mobile nav is opened
         */
        $mobile_nav_anchor.click( function() {

            var $this_el = $et_search_icon,
                $form = $this_el.parents( '#main-header').find( '.et-search-form' );

            $form.addClass( 'et-hidden' );
            $this_el.removeClass( 'et-clicked' );

        });

	});

}(jQuery));

