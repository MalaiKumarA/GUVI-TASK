<?php
require_once __DIR__ . '/vendor/autoload.php';
$con=new MongoDB\Client;
$db=$con->profile;
$collection=$db->information;
?>