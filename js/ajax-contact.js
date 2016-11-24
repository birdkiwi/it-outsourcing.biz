$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var service = button.data('service');
        var cost = button.data('cost');
        var subject = button.data('subject');
        var modal = $(this);
        modal.find('input[name=message]').val(service + " - " + cost + " рублей");
        modal.find('input[name=subject]').val(service + " - " + cost + " рублей");
        modal.find('.modal-title').html(subject);
    });
    
    // Get the form.
    var $forms = $('.main_contact_form');

    $forms.each(function () {
        var $form = $(this);
        var $formMessages = $form.find('.main_contact_form_message');

        $form.submit(function (e) {
            e.preventDefault();

            var formData = $form.serialize();

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
                            alert("Ой! Кажется что-то пошло не так. Пожалуйста, попробуйте еще раз отравить сообщение, либо свяжитесь с нами по телефону.");
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
    })

});