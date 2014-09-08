(function ( $ ) {
	"use strict";

    /**
     * This is what we're replacing
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

    /** This ONCE waited for Divi's very own 'custom.js' before it executed, but that caused a bunch of strange
     * problems: Services stopped working and the tabs on the front of Western Film and under '/transportation'
     * stopped working as well.
     *
     * I dunno, must have been my JS interfering with theirs, because none of this code is relevant to tabs
     * or the Services grid layout.
     */
    $( document ).ready(function() {

	//$(function () {  when we had Divi's custom.js as a dependency, we didn't wait for $(document).ready

        var $et_search_icon = $( '#et_search_icon' );

        var $mobile_nav_anchor = $('#et-top-navigation .mobile_nav');

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


        /** Close the search bar if you open the mobile nav. */
        $mobile_nav_anchor.click( function() {

            var $this_el = $et_search_icon,
                $form = $this_el.parents( '#main-header').find( '.et-search-form' );

            $form.addClass( 'et-hidden' );
            $this_el.removeClass( 'et-clicked' );

        });

	});

}(jQuery));

