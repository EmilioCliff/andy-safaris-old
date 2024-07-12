<?php
    $data = json_decode(file_get_contents("php://input"));
    // $data = $_POST['album'];

    echo json_encode($data)
?>