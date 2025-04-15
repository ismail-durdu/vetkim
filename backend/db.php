<?php
$host = 'localhost';
$user = 'root'; // MySQL kullanıcısı
$pass = 'Emre541523.';     // Şifren varsa buraya yaz
$db = 'VetKim';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>