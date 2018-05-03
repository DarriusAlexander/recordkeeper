<?php
/**
 * The partial for rendering description and credit details about an external
 * image.
 *
 * @package    Nelio_Content
 * @subpackage Nelio_Content/admin/views/partials/media
 * @author     Antonio Villegas <antonio.villegas@neliosoftware.com>
 * @since      1.4.6
 */

/**
 * List of vars used in this partial:
 *
 * None.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}//end if

?>
<textarea>[*
	if ( descriptionWithDot.length ) {
		*][*~ descriptionWithDot *] [*
	}
	*][* if ( author.length && authorUrl.length ) { *]<?php
		printf(
			_x( 'Photo by <a href="%1$s" target="_blank">%2$s</a> on <a href="%3$s" target="_blank">%4$s</a>.', 'text', 'nelio-content' ),
			'[*= authorUrl *]', '[*~ author *]', '[*= sourceUrl *]', '[*~ source *]'
		);
	?>[* } else if ( author.length ) { *]<?php
		printf(
			_x( 'Photo by %1$s on <a href="%2$s" target="_blank">%3$s</a>.', 'text', 'nelio-content' ),
			'[*~ author *]', '[*= sourceUrl *]', '[*~ source *]'
		);
	?>[* } else { *]<?php
		printf(
			_x( 'Source: <a href="%1$s" target="_blank">%2$s</a>.', 'text', 'nelio-content' ),
			'[*= sourceUrl *]', '[*~ source *]'
		);
	?>[*
	} *]</textarea>
