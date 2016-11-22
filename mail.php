<?php
    header('Content-Type: text/html; charset=utf-8');
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $subject = strip_tags(trim($_POST["subject"]));
        $number = strip_tags(trim($_POST["number"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Ой! Сообщение не было отправлено!";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        //$recipient = "info@metadesk.ru";
        $recipient = "alexey-bolonia@yandex.ru";

        // Set the email subject.
        $email_subject = "Новое сообщение с сайта it-outsourcing от $name";

        // Build the email content.
        $email_content = "Имя: $name\n";
        $email_content .= "E-mail: $email\n\n";
        $email_content .= "Тема сообщения: $subject\n\n";
        $email_content .= "Телефон: $number\n\n";
        $email_content .= "Текст сообщения:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $email_subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Благодарим вас, ваше сообщение было успешно отправлено!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Ой! Кажется что-то пошло не так :/";
    }

?>
