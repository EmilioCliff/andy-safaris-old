<?php
$connection = pg_connect("host='localhost' dbname='postgres' user='postgres' password='secret'");

if (!$connection) {
    die("Connection to DB failed: " . pg_last_error());
}

$data = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO reviews (client, email, rating, review) VALUES ($1, $2, $3, $4)";
$params = [$data["fullName"], $data["email"], $data["rating"], $data["review"]];

$result = pg_query_params($connection, $sql, $params);

if (!$result) {
    die("Failed to insert into DB: " . pg_last_error());
}

echo "Record inserted successfully";

pg_close($connection);
?>
