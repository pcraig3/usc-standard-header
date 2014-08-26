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

    /** This USED to wait for Divi's very own 'custom.js', but that caused a bunch of strange problems
     * like Services stopped working and the tabs on the front of WesternFilf and under 'transportation'
     * stopped working as well.
     *
     * I dunno, must have been my JS interfering with theirs, because none of this code is relevant to tabs
     * or the services grid layout.
     */
    $( document ).ready(function() {

	//$(function () {  when we had Divi's custom.js as a dependency, we didn't wait for $(document).ready

        var $et_search_icon = $( '#et_search_icon' );

        $et_search_icon.unbind( 'click' );

        $et_search_icon.click( function() {
            var $this_el = $(this),
                $form = $this_el.parents( '#main-header').find( '.et-search-form' );

            $form.toggleClass( 'et-hidden' );
            $this_el.toggleClass( 'et-clicked' );

            if ( $this_el.hasClass( 'et-clicked' ) ) {
                $form.find('input').focus();
            }

        } );


	});

}(jQuery));

