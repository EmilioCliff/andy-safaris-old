<?php
    $data = json_decode(file_get_contents("php://input"), true);
    $form = isset($_GET['form']) ? $_GET['form'] : null;

    if ($data) {
        $to = "clifftest33@gmail.com";

        $subject = 'Enquiry form Submittion';

        $headers  = "From: info@andysafaris.com\r\n";
        $headers .= "CC: " . $data["email"] . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        switch ($form) {
            case "enquery":
                
                //code block;
                break;
            case "safari" :
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
                //code block;
                break;
            case "nairobi-tour":
                //code block
                break;
            case "car-hire":
                //code block
                break;
            case "taxi":
                //code block
                break;
            case "review":
                //code block
                break;
            default:
              //code block
          }

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
            echo json_encode(["error" => "Failed to send email", "email-message" => $message, "data-sent" => $data]);
        }
    } else {
        echo json_encode(["error" => "No data received"]);
    }
?>
