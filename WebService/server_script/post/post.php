<?php

$result = "Thank you. We got your info: ";

if( $_POST['email']) {
	$result .= $_POST['email'];
}

if( $_POST['nickname'] ){
	$result .= " " . $_POST['nickname'];
}

echo $result;

?>