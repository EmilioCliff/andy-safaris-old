<?php
    function trimTabs($str) {
        return trim($str, "\t");
    }

    $data = json_decode(file_get_contents("php://input"), true);
    $form = isset($_GET['form']) ? $_GET['form'] : null;

    if ($data) {
        $additionalMessage = "";
        if ($data["additionalMessage"]) {
            $additionalMessage = trimTabs($sentence);
        }

        $to = "clifftest33@gmail.com";
        $headers  = "From: info@andysafaris.com\r\n";
        $headers .= "CC: " . $data["email"] . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        switch ($form) {
            case "enquery":
                $subject = 'Enquery Request';

                $message = '
                <h2>Enquery Confirmation</h2>
                <p>Dear ' . htmlspecialchars($data["fullName"]) .  ',</p>
                <p>Thank you for showing interest with our safaris and services here is your enquiry data:</p>
                <ul>
                    <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
                    <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
                    <li><strong>Service Enquery:</strong> ' . htmlspecialchars($data["serviceEnguery"]) . '</li>
                    <li><strong>Additional Message:</strong> ' . htmlspecialchars($additionalMessage) . '</li>
                </ul>
                <p>We look forward to providing you with an unforgettable experience.</p>
                <p>Best regards,</p>
                <p>The Safari Team</p>
                ';
                //code block;
                break;
            case "safari" :
                $subject = 'Safari Form Submittion';

                $message = '
                <h2>Safari Booking Confirmation</h2>
                <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
                <p>Thank you for booking your safari with us. Here are the details of your booking:</p>
                <ul>
                    <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
                    <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
                    <li><strong>Safari Date:</strong> ' . htmlspecialchars($data["safariDate"]) . '</li>
                    <li><strong>Arrival Date:</strong> ' . htmlspecialchars($data["arrivalDate"]) . '</li>
                    <li><strong>Number of Adults:</strong> ' . htmlspecialchars($data["noOfAdults"]) . '</li>
                    <li><strong>Number of Children:</strong> ' . htmlspecialchars($data["noOfChildren"]) . '</li>
                    <li><strong>Additional Message:</strong> ' . htmlspecialchars($additionalMessage) . '</li>
                </ul>
                <p>We look forward to providing you with an unforgettable experience.</p>
                <p>Best regards,</p>
                <p>The Safari Team</p>
                ';
                break;
            case "nairobi-tour":
                $subject = 'Nairobi - Tour Form Submittion';

                $message = '
                <h2>Nairobi Tour Booking Confirmation</h2>
                <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
                <p>Thank you for booking your nairobi - tour with us. Here are the details of your booking:</p>
                <ul>
                    <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
                    <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
                    <li><strong>Safari Date:</strong> ' . htmlspecialchars($data["safariDate"]) . '</li>
                    <li><strong>Arrival Date:</strong> ' . htmlspecialchars($data["arrivalDate"]) . '</li>
                    <li><strong>Number of Adults:</strong> ' . htmlspecialchars($data["noOfAdults"]) . '</li>
                    <li><strong>Number of Children:</strong> ' . htmlspecialchars($data["noOfChildren"]) . '</li>
                    <li><strong>Additional Message:</strong> ' . htmlspecialchars($additionalMessage) . '</li>
                </ul>
                <p>We look forward to providing you with an unforgettable experience.</p>
                <p>Best regards,</p>
                <p>The Safari Team</p>
                ';
                //code block
                break;
            case "car-hire":
                $subject = 'Car Hire Form Submittion';

                $message = '
                <h2>Car Booking Confirmation</h2>
                <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
                <p>Thank you for booking your dream car with us. Here are the details of your booking:</p>
                <ul>
                <li><strong>Car Name:</strong> ' . htmlspecialchars($data["carName"]) . '</li>
                    <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
                    <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
                    <li><strong>Duration:</strong> ' . htmlspecialchars($data["duration"]) . '</li>
                    <li><strong>Pickup Day:</strong> ' . htmlspecialchars($data["pickupDay"]) . '</li>
                    <li><strong>Additional Message:</strong> ' . htmlspecialchars($additionalMessage) . '</li>
                </ul>
                <p>We look forward to providing you with an unforgettable experience.</p>
                <p>Best regards,</p>
                <p>The Safari Team</p>
                ';
                break;
            case "taxi":
                $subject = 'Get A Taxi Booking Confirmation';
                $additionalMessage = trimTabs($data["contactDetails"]["comments"]);

                $message = '
                <h2>Taxi Booking Confirmation</h2>
                <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
                <p>Thank you for booking with us. Here are the details of your booking:</p>
                <ul>
                    <li><strong>Your Taxi:</strong> ' . htmlspecialchars($data["taxiSelected"]) . '</li>
                    <li><strong>Email:</strong> ' . htmlspecialchars($data["contactDetails"]["email"]) . '</li>
                    <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["contactDetails"]["phoneNumber"]) . '</li>
                    <li><strong>Pickup Day and Time:</strong> ' . htmlspecialchars($data["rideDetails"]["pickupDay"]) . ', ' . htmlspecialchars($data["rideDetails"]["pickupTime"]) .'</li>
                    <li><strong>Pickup Location:</strong> ' . htmlspecialchars($data["rideDetails"]["pickupLocation"]) . '</li>
                    <li><strong>Dropoff Location:</strong> ' . htmlspecialchars($data["rideDetails"]["dropoffLocation"]) . '</li>
                    <li><strong>Transfer Type:</strong> ' . htmlspecialchars($data["rideDetails"]["transferType"]) . '</li>
                    <li><strong>Total Distance:</strong> ' . htmlspecialchars($data["rideDetails"]["totalDistance"]) . '</li>
                    <li><strong>Total Time:</strong> ' . htmlspecialchars($data["rideDetails"]["totalTime"]) . '</li>
                    <li><strong>Payment Method:</strong> ' . htmlspecialchars($data["contactDetails"]["paymentMethod"]) . '</li>
                    <li><strong>Additional Message:</strong> ' . htmlspecialchars($additionalMessage) . '</li>
                </ul>
                <p>We look forward to providing you with an unforgettable experience.</p>
                <p>Best regards,</p>
                <p>The Safari Team</p>
                ';
                //code block;
                break;
                //code block
                break;
            case "review":
                //code block
                break;
            default:
              //code block
          }

        // $message = '
        // <h2>Safari Booking Confirmation</h2>
        // <p>Dear ' . htmlspecialchars($data["firstName"]) . ' ' . htmlspecialchars($data["lastName"]) . ',</p>
        // <p>Thank you for booking your ' . htmlspecialchars($data["serviceEnquiry"]) . ' with us. Here are the details of your booking:</p>
        // <ul>
        //     <li><strong>Email:</strong> ' . htmlspecialchars($data["email"]) . '</li>
        //     <li><strong>Phone Number:</strong> ' . htmlspecialchars($data["phoneNumber"]) . '</li>
        //     <li><strong>Safari Date:</strong> ' . htmlspecialchars($data["safariDate"]) . '</li>
        //     <li><strong>Arrival Date:</strong> ' . htmlspecialchars($data["arrivalDate"]) . '</li>
        //     <li><strong>Number of Adults:</strong> ' . htmlspecialchars($data["noOfAdults"]) . '</li>
        //     <li><strong>Number of Children:</strong> ' . htmlspecialchars($data["noOfChildren"]) . '</li>
        //     <li><strong>Additional Message:</strong> ' . htmlspecialchars($data["additionalMessage"]) . '</li>
        // </ul>
        // <p>We look forward to providing you with an unforgettable experience.</p>
        // <p>Best regards,</p>
        // <p>The Safari Team</p>
        // ';

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["reached" => "i was reached", "receivedData" => $data]);
        } else {
            echo json_encode(["error" => "Failed to send email", "email-message" => $message, "data-sent" => $data]);
        }
    } else {
        echo json_encode(["error" => "No data received"]);
    }
?>
