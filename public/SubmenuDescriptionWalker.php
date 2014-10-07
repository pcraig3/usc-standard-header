<?php

/**
 * Create HTML list of nav menu items.
 * Replacement for the native Walker, adds a description only to submenu items
 * (ie, not the top-level menu items).
 *
 * This class expects a modified 'header.php' file in order to work properly.
 *
 * Stolen from toscho on stackexchange.
 * @see    http://wordpress.stackexchange.com/q/14037/
 * @author toscho, http://toscho.de
 */
class Submenu_Description_Walker extends Walker_Nav_Menu
{
    /**
     * Start the element output.
     *
     * @param  string $output   Passed by reference. Used to append additional content.
     * @param  object $item     Menu item data object.
     * @param  int $depth       Depth of menu item. May be used for padding.
     * @param  array $args      Additional strings.
     * @return void
     */
function start_el( &$output, $item, $depth = 0, $args = array() )
    {
        $classes     = empty ( $item->classes ) ? array () : (array) $item->classes;

        $class_names = join(
            ' '
        ,   apply_filters(
                'nav_menu_css_class'
            ,   array_filter( $classes ), $item
            )
        );

        ! empty ( $class_names )
            and $class_names = ' class="'. esc_attr( $class_names ) . '"';

        $output .= "<li id='menu-item-$item->ID' $class_names>";

        $attributes  = '';

        ! empty( $item->attr_title )
            and $attributes .= ' title="'  . esc_attr( $item->attr_title ) .'"';
        ! empty( $item->target )
            and $attributes .= ' target="' . esc_attr( $item->target     ) .'"';
        ! empty( $item->xfn )
            and $attributes .= ' rel="'    . esc_attr( $item->xfn        ) .'"';
        ! empty( $item->url )
            and $attributes .= ' href="'   . esc_attr( $item->url        ) .'"';

        
        $description = '';

        // insert description for sub-level elements only
        if ( isset( $item->description ) 
            && !empty ( $item->description ) 
                && $depth > 0 )       
            $description = '<span class="menu-item__description">' . esc_attr( $item->description ) . '</span>';

        $title = apply_filters( 'the_title', $item->title, $item->ID );

        $item_output = $args->before
            . "<a $attributes>"
            . $args->link_before
            . $title
            . $description
            . '</a> '
            . $args->link_after
            . $args->after;

        // Since $output is called by reference we don't need to return anything.
        $output .= apply_filters(
            'walker_nav_menu_start_el'
        ,   $item_output
        ,   $item
        ,   $depth
        ,   $args
        );
    }
}

