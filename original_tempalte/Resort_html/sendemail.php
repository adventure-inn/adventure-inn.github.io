<?php

// Define some constants
define( "RECIPIENT_NAME", "Lake Resort" );
define( "RECIPIENT_EMAIL", "vinodpal09@gmail.com" );

// Read the form values
$success = false;
$senderName = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$phone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\' 0-9]/", "", $_POST['phone'] ) : "";
$body = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";
$subject = 'Contact Our';
// If all values exist, send the email
$headers = "From: " . $senderName . " <" . $senderEmail . "> To: " . RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
$message = "Dear: ".RECIPIENT_NAME." ".$body;

if(mail(RECIPIENT_EMAIL, $subject, $message, $headers)){
       echo "<p class='success'>Thanks for contacting us. We will contact you ASAP!</p>";

} else {
    echo "The email was NOT sent.";
}

?>