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
                data: formData,
                dataType: 'json',
                cache: false
            })
            .done(function (response) {
                if(response) {
                    if(!response.error && response.message) {
                        $formMessages.removeClass('error');
                        $formMessages.addClass('success');

                        // Set the message text.
                        $formMessages.text('Благодарим вас, ваше сообщение было успешно отправлено!');
                        alert(response.message);
                        // Clear the form.
                        $form[0].reset();
                    } else {
                        alert(response.error);
                    }
                }
                else {
                    alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                    $formMessages.removeClass('success');
                    $formMessages.addClass('error');
                    $formMessages.text('Попробуйте еще раз отправить сообщение, либо свяжитесь с нами по телефону.');
                }

            })
            .fail(function (data) {
                alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
                $formMessages.removeClass('success');
                $formMessages.addClass('error');
                $formMessages.text('Попробуйте еще раз отправить сообщение, либо свяжитесь с нами по телефону.');
            });

    });

});