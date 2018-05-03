

<h1>
<?php
	$bookingData = array(
		'bookingMail'	=>	$page->bookingMail()->yaml(),
		'confirmationText'	=>	$page->confirmationMail()->yaml()
	);
	$bookingManager = bookingManager($bookingData);
?>
is successS
</h1>
