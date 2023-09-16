<?php

$recipient = 'die_zandra@gmx.de';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Von: " . $_POST['nameField'];
        $headers = "From: ". $_POST['emailField'] ;

        mail($recipient, $subject, $_POST['emailField'], $_POST['messageField'], $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
