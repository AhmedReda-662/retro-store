<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


$conn = new mysqli('localhost', 'root', '', 'registration_db');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, user_id, product_id, quantity , product_name, product_price FROM shoppingcart";
$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

$conn->close();

echo json_encode($products);
?>