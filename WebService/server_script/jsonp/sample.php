<?php
$resArray = array( (object)array('name' => 'John', 'tel' => '07-123-1234', 'email' => 'john@gmail.com')
	, (object)array('name' => 'รำพึง', 'tel' => '07-333-8974', 'email' => 'rampueng@hotmail.com')
	, (object)array('name' => 'เฟอร์บี้', 'tel' => '07-909-1000', 'email' => 'ferby@toyrus.com')
	, (object)array('name' => 'Test', 'tel' => '07-111-1111', 'email' => '')
	);

//	$output = json_encode($resArray);
//echo $output;

echo $_GET['jsoncallback'] . '(' . json_encode($resArray) . ');';

?>