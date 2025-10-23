<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);  // Очистка от потенциально опасных символов
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL); // Проверка и очистка email
  $message = htmlspecialchars($_POST["message"]); // Очистка от потенциально опасных символов



  $to = "<ethe.feller2016@yandex.ru>"; 
  $subject = "Сообщение с вашего сайта от: " . $name;
  $body = "Имя: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Сообщение:\n" . $message;

  $headers = "From: " . $email . "\r\n"; //  Email отправителя
  $headers .= "Reply-To: " . $email . "\r\n"; //  Адрес для ответа

  if (mail($to, $subject, $body, $headers)) {
    echo "Сообщение успешно отправлено!"; 
  } else {
    echo "Ошибка при отправке сообщения. Пожалуйста, попробуйте позже."; 
  }
} else {

  echo "Некорректный метод отправки формы.";
}
?>