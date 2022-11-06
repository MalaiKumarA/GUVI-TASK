<?php
include("confmongo.php");
$un=$_POST['data'];
$result=$collection->findOne(['name'=>$un]);
 foreach($result as $r)
 {
    echo $r."\n";
 }
?>