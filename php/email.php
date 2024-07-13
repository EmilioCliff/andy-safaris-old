<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        // Process your data here
        echo json_encode(["reached" => "i was reached", "receivedData" => $data]);
    } else {
        echo json_encode(["error" => "No data received"]);
    }
?>
