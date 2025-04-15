<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;

// SQL injection'a karşı hazırlıklı sorgu kullanıyoruz
$stmt = $conn->prepare("SELECT * FROM users WHERE user_email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if ($password === $user['user_password']) { // Bu kısmı hash'li hale getirebilirsin
        echo json_encode([
            "status" => "success",
            "message" => "Login successful",
            "email" => $user['user_email']
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Wrong password"
        ]);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);
}
?>