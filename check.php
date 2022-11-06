<?php
include("conf.php");
$un=$_POST["username"];
$pw=$_POST["password"];
$sql=$con->prepare("select username,password from registration where username=? and password=?");
$sql->bind_param('ss',$un,$pw);
$sql->execute();
$sql->bind_result($un,$pw);
$sql->store_result();
if($sql->num_rows>0)
{
   echo"1";

}
else
{
    echo"2";
}
?>
