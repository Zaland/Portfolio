<?php
	// grab information from ajax
	$name = $_GET['name'];
	$email = $_GET['email'];
	$message = $_GET['message'];
	$email_from = $name.'<'.$email.'>';

	// prepare the mail 
	$to = "zalandkhan1@gmail.com";
	$subject = "Contact Enquiry!";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "From: ".$email_from."\r\n";
	$mail = "Contact Form <br> <br>
			 Name: $name <br>
			 Email: $email <br>
			 Message: $message";

	// send the mail
	mail($to, $subject, $mail, $headers);
?>