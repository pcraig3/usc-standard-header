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

	$(function () {

        var $et_search_icon = $( '#et_search_icon' );

        $et_search_icon.unbind( 'click' );

        $et_search_icon.click( function() {
            var $this_el = $(this),
                $form = $this_el.parents( '#main-header').find( '.et-search-form' );

            /*
            if ( $form.hasClass( 'et-hidden' ) ) {
                $form.css( { 'display' : 'block', 'opacity' : 0 } ).animate( { opacity : 1 }, 500 );
            } else {
                $form.animate( { opacity : 0 }, 500 );
            }
            */

            $form.toggleClass( 'et-hidden' );
            $this_el.toggleClass( 'et-clicked' );
        } );





	});

}(jQuery));