$(function () {

    // Get the form.
    var $form = $('#main_contact_form');

    // Get the messages div.
    var $formMessages = $('#success_fail_info');

    // Set up an event listener for the contact form.
    $form.submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $form.serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: formData
            })
            .done(function (response) {
                alert("Спасибо за Вашу заявку, в скором времени наши менеджеры свяжутся с Вами!");
                // Make sure that the formMessages div has the 'success' class.
                $formMessages.removeClass('error');
                $formMessages.addClass('success');

                // Set the message text.
                $formMessages.text('Благодарим вас, ваше сообщение было успешно отправлено!');

                // Clear the form.
                $form[0].reset();
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                console.log($form[0]);
                alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                $formMessages.removeClass('success');
                $formMessages.addClass('error');
                $formMessages.text('Попробуйте еще раз отправить сообщение, либо свяжитесь с нами по телефону.');
            });

    });

});