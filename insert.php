<?php
include("conf.php");
$un=$_POST["username"];
$p=$_POST["ph"];
$pass=$_POST["password"];
$sql=$con->prepare("insert into registration (username,phonenumber,password) values (?,?,?)");
$sql->bind_param("sis",$un,$p,$pass);
$sql->execute();
if($sql)
{
    echo" Registration Successfully ";
}
?>