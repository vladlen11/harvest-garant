<?php
/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
*/
if(isset($_POST['submit'])){
    /* Устанавливаем e-mail Кому и от Кого будут приходить письма */
    $to = "metalshop.sales@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = "form@harvest-garant.com.ua"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net

    /* Указываем переменные, в которые будет записываться информация с формы */
    $name = $_POST['Name'];
    /*$email = $_POST['Email'];*/
    $phone = $_POST['Phone'];
    $message = $_POST['Message'];
    $subject = "Форма отправки сообщений по канилированной сетке";

    /* Проверка правильного написания e-mail адреса */
    /*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
    {
    show_error("<br /> Е-mail адрес не существует");
    }*/

    /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
    $mail_to_myemail = "Здравствуйте!
    Было отправлено сообщение с сайта!
    Имя отправителя: $name
    Номер телефона: $phone
    Текст сообщения: $message
    Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";

    $headers = "From: $from \r\n";

    /* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    echo "Сообщение отправлено. Спасибо Вам " . $fname . ", мы скоро свяжемся с Вами.";
    echo "<br /><br /><a href='http://harvest-garant.com.ua/egoza-land/index.html'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
    function changeurl(){eval(self.location="http://harvest-garant.com.ua/lp-kanilirovannaya/index.html");}
    window.setTimeout("changeurl();",3000);
</script>