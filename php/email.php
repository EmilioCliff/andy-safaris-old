<?php
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        $to = $data["email"];

        $subject = 'Enquiry form Submittion';

        $headers  = "From: clifftest33@gmail.com\r\n";
        $headers .= "CC: clifftest33@gmail.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $message = '
        <h2>Safari Booking Confirmation</h2>
        <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
        <p>Thank you for booking your ' . htmlspecialchars($data["serviceEnquiry"]) . ' with us. Here are the details of your booking:</p>
        <ul>
            <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
            <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
            <li><strong>Safari Date:</strong> ' . htmlspecialchars($data["safariDate"]) . '</li>
            <li><strong>Arrival Date:</strong> ' . htmlspecialchars($data["arrivalDate"]) . '</li>
            <li><strong>Number of Adults:</strong> ' . htmlspecialchars($data["noOfAdults"]) . '</li>
            <li><strong>Number of Children:</strong> ' . htmlspecialchars($data["noOfChildren"]) . '</li>
            <li><strong>Additional Message:</strong> ' . htmlspecialchars($data["additionalMessage"]) . '</li>
        </ul>
        <p>We look forward to providing you with an unforgettable experience.</p>
        <p>Best regards,</p>
        <p>The Safari Team</p>
        ';

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["reached" => "i was reached", "receivedData" => $data]);
        } else {
            echo json_encode(["error" => "Failed to send email", "email-message" => $message]);
        }
    } else {
        echo json_encode(["error" => "No data received"]);
    }
?>
