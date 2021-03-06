<?php
$order_data = sunshine_get_order_data(SunshineFrontend::$current_order->ID);
$order_items = sunshine_get_order_items(SunshineFrontend::$current_order->ID);
$customer_id = get_post_meta( SunshineFrontend::$current_order->ID, '_sunshine_customer_id', true );
$status = sunshine_get_order_status(SunshineFrontend::$current_order->ID);
?>
<div id="sunshine" class="sunshine-clearfix <?php sunshine_classes(); ?>">

	<?php do_action('sunshine_before_content'); ?>

	<div id="sunshine-main">

		<h2><?php echo sprintf( __( 'Order #%s', 'sunshine' ), SunshineFrontend::$current_order->ID ); ?></h2>

		<p id="sunshine-order-status" class="sunshine-status-<?php echo $status->slug; ?>">
			<strong><?php echo $status->name; ?>:</strong> <?php echo $status->description; ?>
		</p>
		<?php do_action( 'sunshine_order_notes', SunshineFrontend::$current_order->ID ); ?>
		<div class="sunshine-form" id="sunshine-order">
			<div id="sunshine-order-contact-fields" class="sunshine-clearfix">
				<h2><?php _e('Contact Information','sunshine'); ?></h2>
				<div class="field field-left"><label><?php _e('Email','sunshine'); ?></label> <?php echo $order_data['email']; ?></div>
				<?php if ( $order_data['phone'] ) { ?>
				<div class="field field-right"><label><?php _e('Phone','sunshine'); ?></label> <?php echo $order_data['phone']; ?></div>
				<?php } ?>
			</div>
			<div id="sunshine-order-billing-fields">
				<h2><?php _e('Billing Information','sunshine'); ?></h2>
				<div class="field field-left"><label><?php _e('First Name','sunshine'); ?></label> <?php echo $order_data['first_name']; ?></div>
				<div class="field field-right"><label><?php _e('Last Name','sunshine'); ?></label> <?php echo $order_data['last_name']; ?></div>
				<div class="field field-left"><label><?php _e('Address','sunshine'); ?></label> <?php echo $order_data['address']; ?></div>
				<div class="field field-right"><label><?php _e('Address 2','sunshine'); ?>	</label> <?php echo $order_data['address2']; ?></div>
				<div class="field field-left"><label><?php _e('City','sunshine'); ?></label> <?php echo $order_data['city']; ?></div>
				<div class="field field-right"><label><?php _e('State / Province','sunshine'); ?></label> <?php echo ( isset( SunshineCountries::$states[$order_data['country']][$order_data['state']] ) ) ? SunshineCountries::$states[$order_data['country']][$order_data['state']] : $order_data['state']; ?></div>
				<div class="field field-left"><label><?php _e('Zip / Postcode','sunshine'); ?></label> <?php echo $order_data['zip']; ?></div>
				<div class="field field-right"><label><?php _e('Country','sunshine'); ?></label> <?php echo SunshineCountries::$countries[$order_data['country']]; ?></div>
			</div>
			<?php if ( $order_data['shipping_first_name'] ) { ?>
				<div id="sunshine-order-shipping-fields">
					<h2><?php _e('Shipping Information','sunshine'); ?></h2>
					<div class="field field-left"><label><?php _e('First Name','sunshine'); ?></label> <?php echo $order_data['shipping_first_name']; ?></div>
					<div class="field field-right"><label><?php _e('Last Name','sunshine'); ?></label> <?php echo $order_data['shipping_last_name']; ?></div>
					<div class="field field-left"><label><?php _e('Address','sunshine'); ?></label> <?php echo $order_data['shipping_address']; ?></div>
					<div class="field field-right"><label><?php _e('Address 2','sunshine'); ?>	</label> <?php echo $order_data['shipping_address2']; ?></div>
					<div class="field field-left"><label><?php _e('City','sunshine'); ?></label> <?php echo $order_data['shipping_city']; ?></div>
					<div class="field field-right"><label><?php _e('State / Province','sunshine'); ?></label> <?php echo ( isset( SunshineCountries::$states[$order_data['shipping_country']][$order_data['shipping_state']] ) ) ? SunshineCountries::$states[$order_data['shipping_country']][$order_data['shipping_state']] : $order_data['shipping_state']; ?></div>
					<div class="field field-left"><label><?php _e('Zip / Postcode','sunshine'); ?></label> <?php echo $order_data['shipping_zip']; ?></div>
					<div class="field field-right"><label><?php _e('Country','sunshine'); ?></label> <?php echo SunshineCountries::$countries[$order_data['shipping_country']]; ?></div>
				</div>
			<?php } ?>
		</div>
		<div id="sunshine-order-cart-items">
			<h2><?php _e('Items','sunshine'); ?></h2>
			<?php do_action('sunshine_before_order_items', SunshineFrontend::$current_order->ID, $order_items); ?>
			<table id="sunshine-cart-items">
			<tr>
				<th class="sunshine-cart-image"><?php _e('Image','sunshine'); ?></th>
				<th class="sunshine-cart-name"><?php _e('Product','sunshine'); ?></th>
				<th class="sunshine-cart-qty"><?php _e('Qty','sunshine'); ?></th>
				<th class="sunshine-cart-price"><?php _e('Item Price','sunshine'); ?></th>
				<th class="sunshine-cart-total"><?php _e('Item Total','sunshine'); ?></th>
			</tr>
			<?php
			$i = 1; foreach ($order_items as $item) {
			?>
				<tr class="sunshine-cart-item">
					<td class="sunshine-cart-item-image">
						<?php
						$thumb = wp_get_attachment_image_src($item['image_id'], 'sunshine-thumbnail');
						$image_html = '<a href="'.get_permalink($item['image_id']).'"><img src="'.$thumb[0].'" alt="" class="sunshine-image-thumb" /></a>';
						echo apply_filters('sunshine_cart_image_html', $image_html, $item, $thumb);
						?>
					</td>
					<td class="sunshine-cart-item-name">
						<?php
						$product = get_post($item['product_id']);
						$cat = wp_get_post_terms($item['product_id'], 'sunshine-product-category');
						?>
						<h3><span class="sunshine-item-cat"><?php echo apply_filters('sunshine_cart_item_category', (isset($cat[0]->name)) ? $cat[0]->name : '', $item); ?></span> - <span class="sunshine-item-name"><?php echo apply_filters('sunshine_cart_item_name', $product->post_title, $item); ?></span></h3>
						<div class="sunshine-item-comments"><?php echo apply_filters('sunshine_order_line_item_comments', $item['comments'], SunshineFrontend::$current_order->ID, $item); ?></div>
					</td>
					<td class="sunshine-cart-item-qty">
						<?php echo $item['qty']; ?>
					</td>
					<td class="sunshine-cart-item-price">
						<?php sunshine_money_format($item['price']); ?>
					</td>
					<td class="sunshine-cart-item-total">
						<?php sunshine_money_format($item['total']); ?>
					</td>
				</tr>

			<?php $i++; } ?>
			</table>

			<div id="sunshine-order-totals">
				<table>
				<tr class="sunshine-subtotal">
					<th><?php _e('Subtotal','sunshine'); ?></th>
					<td><?php sunshine_money_format($order_data['subtotal']); ?></td>
				</tr>
				<?php if ( $order_data['tax'] > 0 ) { ?>
				<tr class="sunshine-tax">
					<th><?php _e('Tax','sunshine'); ?></th>
					<td><?php sunshine_money_format($order_data['tax']); ?></td>
				</tr>
				<?php } ?>
				<?php if ( $order_data['shipping_method'] ) { ?>
				<tr class="sunshine-shipping">
					<th><?php _e('Shipping','sunshine'); ?> (<?php echo sunshine_get_shipping_method_name( $order_data['shipping_method'] ); ?>)</th>
					<td><?php sunshine_money_format($order_data['shipping_cost']); ?></td>
				</tr>
				<?php } ?>
				<?php if ( $order_data['discount_total'] > 0 ) { ?>
				<tr class="sunshine-discounts">
					<th><?php _e('Discounts','sunshine'); ?></th>
					<td>-<?php sunshine_money_format( $order_data['discount_total'] ); ?></td>
				</tr>
				<?php } ?>
				<?php if ($order_data['credits'] > 0) { ?>
				<tr class="sunshine-credits">
					<th><?php _e('Credits','sunshine'); ?></th>
					<td>-<?php sunshine_money_format($order_data['credits']); ?></td>
				</tr>
				<?php } ?>

				<tr class="sunshine-total">
					<th><?php _e('Total','sunshine'); ?></th>
					<td><?php sunshine_money_format($order_data['total']); ?></td>
				</tr>
				</table>
			</div>
		</div>

		<?php if ( $order_data['notes'] ) { ?>
			<h3><?php _e( 'Additional Order Notes', 'sunshine' ); ?></h3>
			<p><?php echo nl2br( htmlspecialchars( $order_data['notes'] ) ); ?></p>
		<?php } ?>

		<?php if ( $customer_id ) { ?>
		<div id="sunshine-order-comments">
			<h2><?php _e( 'Order Comments', 'sunshine' ); ?></h2>
			<?php
			$comments = get_comments('post_id='.SunshineFrontend::$current_order->ID.'&post_type=sunshine-order&order=ASC');
			if ($comments) {
			?>
			<ol>
			<?php
			wp_list_comments('type=comment&avatar_size=0', $comments);
			?>
			</ol>
			<?php
			}
			comment_form(
				array(
					'comment_notes_before' => '',
					'comment_notes_after' => '',
					'logged_in_as' => '',
					'id_form' => 'sunshine-order-comment',
					'id_submit' => 'sunshine-submit',
					'title_reply' => __('Add Comment', 'sunshine')
				),
				SunshineFrontend::$current_order->ID
			);
			?>
		</div>
		<?php } ?>
	</div>

	<?php do_action('sunshine_after_content'); ?>

</div>
