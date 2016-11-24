<?php
require 'vendor/autoload.php';
require 'config.php';

header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');

function sendEmail($data) {
    $mail = new PHPMailer;
    //$mail->SMTPDebug = 3;
    $mail->isSMTP();
    $mail->CharSet = EMAIL_CHARSET;
    $mail->Host = EMAIL_SENDER_SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = EMAIL_SENDER_ADDRESS;
    $mail->Password = EMAIL_SENDER_SMTP_PASSWORD;
    $mail->SMTPSecure = EMAIL_SENDER_SMTP_ENCRYPTION;
    $mail->Port = EMAIL_SENDER_SMTP_PORT;

    $mail->From = EMAIL_SENDER_ADDRESS;
    $mail->FromName = EMAIL_SENDER_NAME;
    $mail->addReplyTo(EMAIL_SENDER_REPLY_TO);
    $mail->isHTML(true);

    $mail->addAddress($data['to']);

    $mail->Subject = $data['subject'];
    $mail->Body    = $data['body'];
    $mail->AltBody = $data['altBody'];

    return $mail->send();
}

$response = array(
    "error" => true,
    "message" => null,
);

if (!empty($_POST['login'])) {
    die('GTFO!');
}
if ( !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['number']) && !empty($_POST['message']) ) {
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $subject = strip_tags($_POST['subject']);
    $message = strip_tags($_POST['message']);
    $number = strip_tags($_POST['number']);
    $ip = filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP);
    $message_date = date("Y-m-d H:i:s");

    var_dump($service);

    $email_result = sendEmail(array(
        'to' => EMAIL_RECEPIENT,
        'subject' => $subject,
        'body' => "Здравствуйте. Вам было отправлено сообщение с сайта. Оно содержит следующие данные: <br> Имя: $name <br> Контакты: $number, $email <br> Тема: $subject <br> Сообщение: $message <br> IP: $ip <br> Время отправки: $message_date",
        'altBody' => "Здравствуйте. Вам было отправлено сообщение с сайта. Оно содержит следующие данные: Имя: $name Контакты: $number, $email Тема: $subject Сообщение: $message IP: $ip Время отправки: $message_date"
    ));

    if($email_result) {
        $response['error'] = false;
        $response['message'] = "Спасибо Вам за ваше обращение";
    }
    else {
        $response['message'] = "Произошла ошибка, попробуйте еще раз или перезвоните нам по телефону";
    }
}
else {
    $response['message'] = "Вы не заполнили все поля!";
}

echo json_encode($response);