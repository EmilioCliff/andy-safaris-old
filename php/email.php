<?php
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        // Process your data here
        echo json_encode(["reached" => "i was reached", "receivedData" => $data]);
    } else {
        echo json_encode(["error" => "No data received"]);
    }
?>
