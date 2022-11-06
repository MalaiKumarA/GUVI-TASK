<?php
include("confmongo.php");
$name=$_POST['name'];
$age=$_POST['age'];
$ph=$_POST['ph'];
$eid=$_POST['eid'];
$dob=$_POST['dob'];
 if($insertoneresult=$collection->insertone(['name'=>$name,'age'=>$age,'phonenumber'=>$ph,'emailid'=>$eid,'dateofbirth'=>$dob]))
 {
echo"data saved";
 }
?>


