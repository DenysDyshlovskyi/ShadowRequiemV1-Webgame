<?php
// Connects to MySQL database
$servername = "localhost";
$serverusername = "root";
$serverpassword = "skibidi";

$db_name = "player_info";

$conn = mysqli_connect($servername, $serverusername, $serverpassword, $db_name);

if(!$conn){
    echo "Connection failed!";
};
?>